import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent, DialogName } from './app.component';
import {ChatroomComponent} from "./chatroom/chatroom.component";
import {ChathouseComponent} from "./chathouse/chathouse.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatExpansionModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatToolbarModule, MatButtonModule,
    MatDialogModule, MatSidenavModule, MatIconModule, MatListModule, MatAutocompleteModule, MatSelectModule
} from '@angular/material';
import {DataService} from "./Services/DataService";
import {ProfileComponent} from "./profile/profile.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    ChathouseComponent,
    DialogName,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, DialogName, ProfileComponent]
})
export class AppModule { }
