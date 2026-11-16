# StorioProject
Storio is an interactive web project that combines storytelling and platformer gameplay. The user is able to use an avatar to explore pages and “climb” through stories through platforming on blocks of text through the story rather than simply scrolling through text. 

## StorioProject Description
This program’s purpose is to alter how a user navigates the internet by turning the default web-browser into a 2D platform game, with the player-character acting as a way to navigate the page, and the page elements as platforms/level geometry. This is achieved by taking the basic HTML/Javascript functions that would normally be controlled with the mouse, and have them be managed by controls typically found in platformers.

The webpage will be centered on the character. “A” and “D” moves them left and right respectively (in the case of mobile, holding the left and right sides of the screen). This in turn will scroll the page horizontally. To scroll upwards vertically, the player must jump up from page element to page element–text-blocks, pictures, etc; downward is achieved by falling downwards with the program’s simulated gravity. 

The program’s collision mechanics work by comparing the player’s dimensions with the div elements in the HTML. When the webpage loads, the program uses getBoundingClientRect() method to find the position and dimensions of relevant HTML elements.

## Files
- gameobject.js :  Manages game objects and platform elements from the HTML, including positions and dimensions.
- movement.js : Player movement. A and D move left right, space jumps. Or touchscreen, top jumps and right/left to move left and right.
- player.js : Player character’s appearance and position.
- camera.js : Controls the camera and follows player progress through the game.
- Home.html : Main page of Storio.
- Tutorial.html : Introduces player to soft platforming and displays it’s possible to change html platforms.
- AliceInWonderland.html : Contains first chapter of Alice in Wonderland Platformer

## Current Features
- Player movement with both touch screen/mouse and keyboard. 
- Vertical based website, both popular in platforming and easily accessible by mobile users.
- Individual div’s styled with “platform” are able to interact with the player and are text based.
- Camera movement that follows the player through the level.
- Stories arranged from bottom of the page for upwards platforming. 

### Goals
- Checkpoints so the user doesn’t accidentally fall to the bottom and have to reread the whole story. Perhaps using the nav feature of HTML. 
- Passing a certain platform will change the background to an illustration of what’s happening in the story. For example, passing the text of Alice falling down the rabbit-hole would trigger the background to turn that image.
- Changing the jump height depending on mobile vs desktop to make platforming possible for both systems. 
- Downward button activates “click” to click on links.

### Bugs
- Player falling through platform when screen is resized.

# How to Run Vite + React

## Run the API (terminal 1)
    cd backend/server
    npm start          # http://localhost:3001/api/pages

## Run the React app (terminal 2)
    cd backend/client
    npm install
    npm run dev        # open the URL Vite prints, usually http://localhost:5173

## Run the React app (terminal 3)
    cd backend/server
    npm start
   
