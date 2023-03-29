import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  docData,
  DocumentData,
  Firestore,
  orderBy,
  query,
} from '@angular/fire/firestore';
import {
  BehaviorSubject,
  defer,
  finalize,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import { IMessage } from '../models/messages';

@Injectable()
export class MessagesService {
  private firestoreCollection: CollectionReference<DocumentData>;
  public isWritingMessage = new BehaviorSubject(false);

  constructor(private firestore: Firestore) {
    this.firestoreCollection = collection(this.firestore, 'messages');
  }

  getAllMessages(): Observable<IMessage[]> {
    const messageQuery = query(
      this.firestoreCollection,
      orderBy('createdAt', 'desc'),
    );
    return collectionData(messageQuery, { idField: 'id' }) as Observable<
      IMessage[]
    >;
  }

  writeMessage(name: string, message: string): Observable<IMessage> {
    this.isWritingMessage.next(true);
    return defer(() =>
      addDoc(collection(this.firestore, 'messages'), {
        name: name,
        message: message,
        createdAt: new Date(),
      }),
    ).pipe(
      finalize(() => this.isWritingMessage.next(false)),
      switchMap((value) => {
        const id = value.id;
        return docData(value).pipe(map((value) => ({ ...value, id })));
      }),
    ) as Observable<IMessage>;
  }
}
