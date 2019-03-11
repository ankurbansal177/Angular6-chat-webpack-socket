import {User} from "./User";
import {Message} from "./Message";

export interface ChatRoom{
    id: String;
    name:String;
    userList: User[];
    messageList: Message[];
}