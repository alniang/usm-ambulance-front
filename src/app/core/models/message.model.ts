import { Timestamp } from "@angular/fire/firestore";

export class Message {
    _id!: string;
    nom!: string;
    telephone!: string;
    adresse!: string;
    destination!: string;
    date!: Date;
    heure!: string;
    infos!: string;
    read! : boolean
}