import {MediaMatcher} from "@angular/cdk/layout";
import {ChangeDetectorRef, Component, OnDestroy, Inject, OnInit} from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {DataService} from "./Services/DataService";
import {Subject} from "rxjs/index";
import {ProfileComponent} from "./profile/profile.component";

export interface DialogData{
    name: String;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [DataService]
})
export class AppComponent implements OnDestroy, OnInit{
    public eventsSubject: Subject<any> = new Subject<any>();
    mobileQuery: MediaQueryList;
    name: string;
    private mobileQueryListener: ()=>void;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog, private dataService: DataService){
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
    }
    title = 'app';
    activeUsers = [];
    config = {
        panels: [
            {name: 'Dashboard', description: 'First section'},
            {name: 'Company Profiles', description: 'Second section'},
            {name: 'Users', description: 'Third section'},
            {name: 'Roles', description: 'Third section'},
            {name: 'Team Chat', description: 'Third section', children: this.activeUsers}
        ]
    };
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogName, {
            width: '250px',
            data: {name: this.name},
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.name = result;
            this.dataService.authenticateUser(this.name).subscribe((data) => {
                console.log(data);
            });
        });
    }
    startChat(item){
        console.log(DataService.userId + "wants to talk to" + item.id);
        if(item.active === true) {
            this.eventsSubject.next({userId: DataService.userId, targetUserId: item.id});
        }
    }
    openProfileDetails(): void{
        const dialogRef  = this.dialog.open(ProfileComponent, {
            width:'400px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log("Profile was viewed");

        })
    }
    ngOnInit(){
        this.openDialog();
        this.dataService.subscribeTo("userListUpdated").subscribe(dataList => {
            console.log("Before Length",dataList.length);
            this.config.panels[4].children = dataList.filter((data) => data.id != DataService.userId);
            console.log("After Length",this.activeUsers);
        })
    }
    ngOnDestroy():void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }

}

@Component({
    selector: 'dialog-name',
    templateUrl: 'user.dialog.html',
})
export class DialogName implements OnInit{

    constructor(
        public dialogRef: MatDialogRef<DialogName>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
    ngOnInit(): void{
        // this.dialogRef.open();
    }

}
