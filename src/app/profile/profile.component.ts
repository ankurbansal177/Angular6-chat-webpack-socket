import {Component, Inject, Input, OnChanges, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DataService} from "../Services/DataService";
import {FormControl} from "@angular/forms";
import {IdName, User} from "../Interface/User";

@Component({
    selector: 'profile-component',
    templateUrl: './profile.html',
    providers: [DataService]
})
export class ProfileComponent implements OnInit{
    options: any = [];
    user: User;
    selectedCountry: any = {};
    constructor(
        public dialogRef: MatDialogRef<ProfileComponent>, private dataService: DataService) {
        this.user = DataService.user;
        this.dataService.fetchCountries().subscribe(data => {
            this.options = data;
        });

    }
    selectCountry(option){
        console.log(option);
    }

    updateUser(){
        this.dataService.updateUser(this.user).subscribe((user) => {

        })
    }

    ngOnInit(){
    }
}

export interface Country{
    name: string
}