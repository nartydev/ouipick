import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private afDb: AngularFireDatabase, private eventService: EventService) { }

  createEvent(event) {
    console.log('event created');
    return this.afDb.list('events').push(event);
  }

  OneEventCreated(form) {
    const currentUser = firebase.auth().currentUser;
    console.log('Event created by user uid :', currentUser.uid);
    const urlImage = [
        'gs://ouipick-813a6.appspot.com/images/montagne1.png',
        'gs://ouipick-813a6.appspot.com/images/1120x490-Montagne.jpg',
        'gs://ouipick-813a6.appspot.com/images/montagne1.png' ];
    const randomNumber = Math.floor(Math.random() * urlImage.length);
    const numberFind = urlImage[randomNumber];

    const addedEvent = this.createEvent({
      user_uid: currentUser.uid,
      nameEvent: form.value.nameEvent,
      descriptionEvent: form.value.descriptionEvent,
      photoEvent: numberFind,
      categoryEvent: form.value.categoryEvent,
      addressEvent: form.value.addressEvent,
      // lattitudeEvent: ,
      // longitudeEvent: ,

    });
    console.log('addedEvent', addedEvent);

  }
}

