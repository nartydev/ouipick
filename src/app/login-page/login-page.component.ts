import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Input() visibleLogin: any;

  newUser = { email: '', password: '', lastname: '', firstname: '', adress: ''};
  existingUser = { email: '', password: ''};

  selectLoginRegister = 0;

  loginValue = false;
  registerValue = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  registerUser() {
    // tslint:disable-next-line:max-line-length
    this.authService.register(
      this.newUser.email,
      this.newUser.password,
      this.newUser.firstname,
      this.newUser.lastname,
      this.newUser.adress);
  }

  loginUser() {
    this.authService.login(this.existingUser.email, this.existingUser.password)
      .then(value => {
        this.loginValue = true;
        setTimeout(() => {
          this.loginValue = false;
        }, 5000)
      })
      .catch(err => {
        console.error('erreur', err.message);
      });
  }

}
