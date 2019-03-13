import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import {Observable, observable} from 'rxjs';
import {User} from "../Interface/User";
import {ChatRoom} from "../Interface/ChatRoom";
import {Message} from "../Interface/Message";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class DataService {
    socketUrl = 'localhost:3000';  // URL to web api
    urlForCountries = "https://restcountries.eu/rest/v2/all";
    socket: any;
    static socket: any;
    static userId: String;
    static user: User;
    constructor(private http: HttpClient) {
        if(!DataService.socket){
            DataService.socket = io(this.socketUrl, {
                transports: ['websocket']
            });
            this.socket = DataService.socket;
        } else {
            this.socket = DataService.socket;
        }

    }
    fetchCountries(){
            return this.http.get(this.urlForCountries);
    }
    authenticateUser(userName: String) {
        return new Observable<User>(observer => {
            this.socket.emit("authenticateUser",userName, (data) => {
                DataService.userId = data.id;
                DataService.user = data;
                observer.next(data);
            });
        })

    }
    updateUser(user: User){
        return new Observable<User>(observer => {
            this.socket.emit("updateUser", user, (data) => {
                observer.next(data);
            })
        })
    }
    addChatRoom(userId: Number, targetUserId: Number){
        return new Observable<ChatRoom>(observer => {
            this.socket.emit("joinChatRoom",{userId: userId, targetUserId:targetUserId}, (data) => {
                observer.next(data);
            });
        })
    }
    sendMessage(message: Message){
        return new Observable<Message>(observer => {
            this.socket.emit("messageSent", message, (data) => observer.next(data));
        })
    }
    subscribeTo(event:String){
        return new Observable<any>(observer => {
            this.socket.on(event,(data)=>{
                observer.next(data);
            })
        })
    }
}