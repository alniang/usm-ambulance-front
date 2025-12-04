import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private fs = inject(Firestore);
  messageCol = "messages";

  addMessage(message: any){
    const messageRef = collection(this.fs, this.messageCol);
    return addDoc(messageRef, message)
  }

  getMessages(){
    const messageColRef = collection(this.fs, this.messageCol);
    return collectionData(messageColRef, {idField: '_id'}) as Observable<Message[]>;
  }
  
}
