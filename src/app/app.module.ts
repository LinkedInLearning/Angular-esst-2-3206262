import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {UtilsModule} from './utils/utils.module';
import { UserModule } from './user/user.module';
import {NettrekModule} from "../../projects/nettrek/src/lib/nettrek.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    UtilsModule,
    UserModule,
    NettrekModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
