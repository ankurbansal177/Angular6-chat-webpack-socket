import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent, DialogName } from './app.component';
import {ChatroomComponent} from "./chatroom/chatroom.component";
import {ChathouseComponent} from "./chathouse/chathouse.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatToolbarModule, MatButtonModule, MatDialogModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {DataService} from "./Services/DataService";

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    ChathouseComponent,
    DialogName
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, DialogName]
})
export class AppModule { }
