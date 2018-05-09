import { Component } from '@angular/core';

import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
   messages:Message[];
   constructor(private chatService: ChatService) { }

   message:Message=new Message();

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
      });*/
     this.messages.push(this.message);
  }
}

class Message {
  id:number;
  userName:string;
  message:string;
  date:Date;
}