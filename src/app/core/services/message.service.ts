import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, Timestamp, updateDoc } from '@angular/fire/firestore';
import { map, Observable, Subject } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private fs = inject(Firestore);
  private messageCol = "messages";
  
  addMessage(message: any){
    const messageRef = collection(this.fs, this.messageCol);
    return addDoc(messageRef, message)
  }

  deleteMessage(id: string) {
    const docRef = doc(this.fs, `${this.messageCol}/${id}`);
    return deleteDoc(docRef);
  }

  getMessages(){
    const messageColRef = collection(this.fs, this.messageCol);
    return collectionData(messageColRef, {idField: '_id'}).pipe(
      map(messages => messages.map(msg => ({
        ...msg,
        date: msg['date'] instanceof Timestamp ? msg['date'].toDate() : msg['date']
      })))
    ) as Observable<Message[]>;
  }
  
  markAsRead(id: string) {
    const docRef = doc(this.fs, `${this.messageCol}/${id}`);
    return updateDoc(docRef, { read: true });
  }

}
