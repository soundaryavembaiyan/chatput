import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: any;
  messages: string[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getMessages().subscribe((message:any) => {
      this.messages.push(message);
    });
    console.log('this',this.messages)
  }

  sendMessage() {
    if (this.message && this.message.trim() !== '') {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}