import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IMessage } from '../models/messages';

@Injectable()
export class MessagesService {
  firestoreCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.firestoreCollection = collection(this.firestore, 'messages');
  }

  getAllMessages(): Observable<IMessage[]> {
    return collectionData(this.firestoreCollection) as Observable<IMessage[]>;
  }
}
