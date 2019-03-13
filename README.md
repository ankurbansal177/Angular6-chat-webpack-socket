angular6-Chat
=============================
Angular 6 with Webpack 4 builder quickstart


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
