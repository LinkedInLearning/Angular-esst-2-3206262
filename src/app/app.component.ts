import {Component, OnInit} from '@angular/core';
import {UserRole} from "./user/user-role";
import {UserLoginService} from "./user/user-login.service";
// import * as moment from 'moment';
// import * as cryptoJS from 'crypto-js';

@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LinkedIn';
  constructor( userLogin: UserLoginService ) {
    // console.log( moment() )
    // console.log( cryptoJS.MD5( 'hello world' ).toString() )
    // console.log ( UserRole.ADMIN )
    console.log ( userLogin )
  }
}
