import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';
import { JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { AmbulanceService } from '../core/services/ambulance.service';

@Component({
  selector: 'app-admin',
  imports: [JsonPipe],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent  implements OnInit {

  messages: any[] = [];
  private messageService = inject(MessageService);
  readonly messageList = toSignal(this.messageService.getMessages(), {initialValue: []} );
  readonly #ambulanceService = inject(AmbulanceService);
  // readonly messageList = toSignal(this.#ambulanceService.getMessages(), {initialValue: []} );
  constructor() { }

  ngOnInit() {
    // this.messageService.newMessage$.subscribe(data => {
    //   this.messages.push(data)
    // })

    // let mess = this.messageService.getMessages()
    // this.messages.push(mess)
    
    // console.log("MESSAGE: ", this.messages);
  }

}
