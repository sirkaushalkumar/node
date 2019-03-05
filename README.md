# React

- What is React?
    - React is a JavaScript library
    - React *ultimate* purpose is to show content to users and handle user interaction.

- Why don't we use redux in the [codepen app](https://codepen.io/professorpandit/pen/rRVMjR)?
    - React can work by itself.
    - ...but it can also work with tremendous variety of other libraries, packages, servers, and databases.

-  What was class thing that we used in our app?
    -   A Javascript 'class'.
    - React 'components' are made using *either* Javascript functions or classes.

- What was the HTML looking stuff?
    - JSX
    - It looks like HTML and can be placed in Javascript code. Determines the content of our React app just like normal HTML

- How did the screen change when we moved the mouse?
    - An event handler
    - Event handlers are used to detect user interaction and respond to it.

- Why did we add two libraries (Reac and ReactDOM)?
    - React is split into two separate libraries
    - '*React*' knows what a component is and how to make components work together.
    - '*ReactDOM*' knows how to take a component and make it show up in the DOM.

- Steps to create a project
    - Install/Update Node Js
    - Install craete-react-app
    - Generate a project
    - Build project

* *npm install create-react-app* and *create-react-app &lt;app-name>* can be replaced with single command *npx create-react-app &lt;app-name>*

- create-react-app helps us build new react project and also setups behind the scenes libraries like *webpack*, *babel*, *dev server* that we don't have to setup manually.

- Browsers don't have support for latest javascript. So to make use of latest feature, we use the command line tool *babel*.

- create-react-app project directory structure is as follows: 
    - *src:* Folder where we put all the source code we write.
    - *public:* Folder that stores files, like images
    - *node_modules:* Folder that contains all of our project dependencies.
    - *package.json:* Records our project dependencies and configures our project
    - *package-lock.json:* Records the exact version of the packages that we install
    - *README.md:* Instructions on how to use this project

- App Start Instructions: 
    - *Stopping the React App:* Press **Control + C** at the terminal.
    - *Starting the app up in the future:* Run **npm start** in the project directory
    - Once the app is started, you can visist it at **localhost:3000**.

- Possible Errors in running the commad **npm start**:
     - Port in use message
     - localhost:3000 doesn't work

- Techniques to use modules
    - ES2015 import staement uses *import* to get ES2015 Modules.
    -  CommonJS import statement uses *require* to get CommonJS Modules

- A component
    - either a Function or Class
    - thet produces HTML to show the user (Using JSX)
    - and handles feedback from the user (Using Event Handlers)

- Steps to display Content with Functional Components:
    - Import the React and ReactDOM librarires import React from 'react';
    - We are using a bundler webpack in the project. Everything in here is a tiny universe.  
    - Create a react componet
    - Take a react componet and show it on the screen
