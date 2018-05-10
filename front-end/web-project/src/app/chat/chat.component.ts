import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';

import { ChatService } from '../service/chat.service';

export class Message {
    constructor(
        public sender: string,
        public content: string,
        public isBroadcast = false,
    ) { }
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
   /*messages:Message[]=new Array();
   constructor(private chatService: ChatService) { }

   newMessage:Message=new Message();

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.chatService.getMessages()
    .subscribe(messages => this.messages = messages as Message[]);
  }

  addMessage(): void {
    /*this.chatService.addMessage(message)
      .subscribe(message => {
        this.messages.push(message as Message);
      });
     this.messages.push(this.newMessage);
  }*/
  @ViewChild('viewer') private viewer: ElementRef;

    public serverMessages = new Array<Message>();

    public clientMessage = '';
    public isBroadcast = false;
    public sender = '';

    private socket$: WebSocketSubject<Message>;

    constructor() {
        this.socket$ = WebSocketSubject.create('ws://localhost:8999');

        this.socket$
            .subscribe(
            (message) => this.serverMessages.push(message) && this.scroll(),
            (err) => console.error(err),
            () => console.warn('Completed!')
            );
    }

    ngAfterViewInit(): void {
        this.scroll();
    }

    public toggleIsBroadcast(): void {
        this.isBroadcast = !this.isBroadcast;
    }

    public send(): void {
        const message = new Message(this.sender, this.clientMessage, this.isBroadcast);

        this.serverMessages.push(message);
        this.socket$.next(<any>JSON.stringify(message));
        this.clientMessage = '';
        this.scroll();
    }

    public isMine(message: Message): boolean {
        return message && message.sender === this.sender;
    }

    public getSenderInitials(sender: string): string {
        return sender && sender.substring(0, 2).toLocaleUpperCase();
    }

    private getSenderColor(sender: string): string {
        const alpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ';
        const initials = this.getSenderInitials(sender);
        const value = Math.ceil((alpha.indexOf(initials[0]) + alpha.indexOf(initials[1])) * 255 * 255 * 255 / 70);
        return '#' + value.toString(16).padEnd(6, '0');
    }

    private scroll(): void {
        setTimeout(() => {
            this.scrollToBottom();
        }, 100);
    }

   /* private getDiff(): number {
        const nativeElement = this.viewer.nativeElement;
        return nativeElement.scrollHeight - (nativeElement.scrollTop + nativeElement.clientHeight);
    }*/

    private scrollToBottom(t = 1, b = 0): void {
       /* if (b < 1) {
            b = this.getDiff();
        }*/
        if (b > 0 && t <= 120) {
            setTimeout(() => {
                const diff = this.easeInOutSin(t / 120);// * this.getDiff();
                this.viewer.nativeElement.scrollTop += diff;
                this.scrollToBottom(++t, b);
            }, 1 / 60);
        }
    }

    private easeInOutSin(t): number {
        return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
    }
}

/*class Message {
  id:number;
  userName:string;
  message:string;
  date:Date;
}*/