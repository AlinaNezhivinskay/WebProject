import { Component } from '@angular/core';

import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
   messages:Object[];
   constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.chatService.getMessages()
    .subscribe(messages => this.messages = messages);
  }

  add(user: string, message:number,date:Date): void {
    user = user.trim();
    if (!user) { return; }
    this.chatService.addMessage({ user,message,date } as Object)
      .subscribe(message => {
        this.messages.push(message);
      });
  }
}
