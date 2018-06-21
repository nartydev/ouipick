import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { FirebaseAuth } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private angularfireAuth: AngularFireAuth) {
    this.user$ = angularfireAuth.authState;
  }

  register(email: string, password: string, firstname: string, lastname: string, adress: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
      let user = firebase.auth().currentUser;

      const updates = {};
      updates['/users/' + user.uid] = {
        uid: user.uid,
        email : email,
        firstname : firstname,
        lastname : lastname,
        adress: adress
      };

      firebase.database().ref().update(updates);
    });

  }

  login(email: string, password: string) {
    return this.angularfireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.angularfireAuth.auth.signOut();
  }
}

