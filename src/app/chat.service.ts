import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:4200');

  constructor() { }

  sendMessage(message: string){
    this.socket.emit('new-message', message);
    console.log('mes',message)
  }

  getMessages(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('new-message', (data: any) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };  
    });
  }
}
