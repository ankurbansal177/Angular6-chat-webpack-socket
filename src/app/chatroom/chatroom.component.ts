import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Message} from "../Interface/Message";
import {ChatRoom} from "../Interface/ChatRoom";
import {DataService} from "../Services/DataService";

@Component({
    selector: 'chatroom-component',
    templateUrl: './chatroom.html',
    styleUrls: ['./chatroom.component.scss'],
    providers: [DataService]
})

export class ChatroomComponent implements OnInit{
    chat: Message[] = [];
    text: String = "";
    @Input() data: ChatRoom;
    constructor(private dataService: DataService){
    }
    sendText(text: String){
        console.log("Message sending", text);
        var message  = <Message>{userId: DataService.userId, content: text, chatRoomId: this.data.id, id: null, time: (new Date()).getTime(), userName: ""};
        this.dataService.sendMessage(message).subscribe((message) => {
            this.chat.push(message);
            this.text = "";
        });
    }


    ngOnInit() {
        this.chat = this.data.messageList;
        this.dataService.subscribeTo("messageRecieved").subscribe((message)=>{
            if(message.chatRoomId == this.data.id) {
                this.chat.push(message);
            }
        })

    }
}