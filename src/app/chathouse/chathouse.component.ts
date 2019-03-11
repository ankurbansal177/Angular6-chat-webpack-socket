import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ChatRoom} from "../Interface/ChatRoom";
import {Observable, observable} from "rxjs/index";
import {DataService} from "../Services/DataService";

@Component({
    selector: 'chathouse-component',
    templateUrl: './chathouse.html',
    styleUrls: ['./chathouse.component.scss'],
    providers: [DataService]
})

export class ChathouseComponent implements OnInit{
    private eventsSubscription: any;
    chat: string;
    chatRooms: ChatRoom[] = [];
    activeChat: Number;
    constructor(private dataService: DataService){
        this.activeChat = 0;

    }
    @Input() events: Observable<any>;
    ngOnInit(){
        this.eventsSubscription = this.events.subscribe((obj) => {
            var foundIndex = this.checkIfRoomAlreadyExists(obj.userId, obj.targetUserId);
            if(foundIndex !== null){
                this.activateChatRoom(foundIndex);
            } else {
                this.addChatRoom(obj.userId, obj.targetUserId);
            }
        });
        this.dataService.subscribeTo("chatRoomJoined").subscribe(data => {
            var foundIndex = this.checkIfRoomAlreadyExists(data.userList[0].id, data.userList[1].id);
            if(foundIndex !== null){
                this.activateChatRoom(foundIndex);
            } else {
                this.chatRooms.push(data);
            }
        })
    }
    checkIfRoomAlreadyExists(user1, user2){
        var foundIndex = null;
        this.chatRooms.forEach((room,i) => {
            if(room.userList && ((room.userList[0].id == user1 && room.userList[1].id == user2) || (room.userList[1].id == user1 && room.userList[0].id == user2)) ){
                foundIndex =  i;
                return false;
            }
            return true;
        })

        return foundIndex;
    }
    getChatRoomName(room: ChatRoom){
        var name = room.name;
        if(room.userList.length == 2) {
            room.userList.forEach((user) => {
                if (DataService.userId != user.id) {
                    name = user.firstName;
                }
            })
        }
        return name;
    }
    addChatRoom(userId, targetUserId) {
        this.dataService.addChatRoom(userId, targetUserId).subscribe((data) => {
            console.log("Chat Room Added");
            this.chatRooms.push(data);
            this.activeChat = this.chatRooms.length - 1;
        });
    }

    activateChatRoom(index: Number){
        console.log(index);
        this.activeChat = index;
    }

    ngOnDestroy() {
        this.eventsSubscription.unsubscribe()
    }
}