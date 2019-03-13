angular6-Chat
=============================
Angular 6 with Webpack 4 builder. You can find the backend here https://github.com/ankurbansal177/express-socket-chat and run that on port 3000.


## Getting Started

 1. Clone repo
 2. npm install
 3. npm run serve
 
 ## Component Hierarchy
 AppComponent contains header, side panel and dialogs.
 App component has chat house as its child component.
 Chat house consists of all the chat rooms.
 Chatroom is a generic object for one to one and group chats.
 Profile component consists of User details which is mapped with user interface.
 
 ## Backend tech
 1. Nodejs, express and socket.io have been used to create the backend
 2. There is no dedicated storage layer
 3. Storage is done in memory i.e. each class have static variables for created object list
 
 ## Object Structure
  ###Backend
    Following classes were created:
    1. User: Holds all information of User and all created users till date.
    2. Connection: This contains userId and socketId and the map is stored for emitting events to users
    3. Chatroom: This contains {id ,name, userList, messageList} and is generic for group chats and one to one chats
                 userlist can be increased and decreased.
    4. Message: Message carries details of sender, chatRoomId, content and time 
    
   ### Frontend:
   Following Services were created:
   1. DataService: DataService had the socket initialization as a static member as we needed only one socket for one user.
   and all the http calls and event firing was handled in Data Service. Observables were used for requests. A generic function for event subscription was used.
   Following Components were created:
   1. AppComponent
   2. DialogName
   3. ProfileComponent
   4. ChatHouseComponent
   5. ChatroomComponent
   Following Interfaces were created
   1. User
   2. Chatroom
   3. Message
   4. Country
   5. IdName
                 
 ## UI-Design
 Material components have been used across app.
 App is responsive
 
 ## Execution
 1. Default users with name Bot1, Bot2 and Bot3 have been inserted
 2. One chat room with these users is created initially
 3. Upon opening the app, you'll have to enter a name and user will be created.
 4. Upon user creation, a socket connection will be mapped on backed with user id.
 5. Newly created user is part of "All Users" named chatroom initially and can conversation with all users having blue icon in fron the names. Blue icon indicates the active user.
 6. Once you close the tab, user will become inactive. and all active users will see hollow icon in front of inactive users.
 7. All conversations will be visible in tabs, and user can switch to whichever tab he wants and continue the conversation.
