import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';
import { CommonModule, DatePipe, NgStyle } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { AmbulanceService } from '../core/services/ambulance.service';
import { Message } from '../core/models/message.model';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { IonContent } from '@ionic/angular/standalone';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-tableau-de-bord',
  imports: [
    CommonModule,
    DatePipe,
    IonContent, 
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    NgStyle
],
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.scss'],
})
export class TableauDeBordComponent  implements OnInit {

  private messageService = inject(MessageService);
  private dialog: MatDialog = inject(MatDialog);  
  readonly messageList = toSignal(this.messageService.getMessages(), {initialValue: []} );
  private breakpointObserver = inject(BreakpointObserver);
  isMobile = false;

  unread = 0;
  unreadCount = 0;
  messages: Message[] = [];
  selectedMessage: Message | null = null;
  selectedMessageStyle = {
    'border-left': '4px solid #25B7FF',
    'color': '#25B7FF',
    'font-weight': 'bold'
  };

  // readonly messageList = toSignal(this.#ambulanceService.getMessages(), {initialValue: []} );
  constructor() { }

  ngOnInit() {
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
      this.unread = messages.filter(m => !m.read).length;  // 👈 compteur auto
      console.log("MESSAGE NON LUE: ", this.unread);      
    });

    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  openMessage(msg: Message) {
    this.selectedMessage = msg;
    console.log(msg._id);
    
    if (!msg.read) {
      msg.read = true;
      this.unread-- ;
      this.messageService.markAsRead(msg._id); 
    }
  }

  goBack() {
    this.selectedMessage = null;
  }

  selectedMessageStyleFunc(msg: Message) {
    if (!msg.read){
      return this.selectedMessageStyle;
    }
    if (this.selectedMessage && msg._id === this.selectedMessage._id) {
      return {'background-color': '#CFE4FA'};
    }
    return {};
  }

  deleteMessage(msg: Message) {
    console.log("DELETE MESSAGE ID: ", msg._id);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      // data: msg
    });

    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.messageService.deleteMessage(msg._id).then(() => {
        console.log("Message supprimé avec succès :", msg);
        // Met à jour la liste locale des messages
        this.messages = this.messages.filter(m => m._id !== msg._id);

        // S'il était sélectionné, on l'enlève
        if (this.selectedMessage?._id === msg._id) {
          this.selectedMessage = null;
        }
      }).catch(error => {
        console.error("Erreur lors de la suppression du message :", error);
      });
    }
    });
  }
}
