# React

### What is React?

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
    
    
### What is JSX

- What is JSX
    - It looka likw html but it is not html. To make es2015 or higher or process jsx we use JSX. No browser understands JSX. It is converted into html using babel. 
    - We can use the [link](https://babeljs.io/repl) to check how the processed code looks like.
    - It is much easier to read and it is much easier to get the essence of what is going on.
    - It is not required to use JSX in React but it is highly recommended.

- JSX 
    - Special dialect of JS (its not HTML!)
    - Browsers don't understand JSX code!. We write JSX then run tolls to turn it into normal JS
    - Very similar in form and function to HTML with a couple differences.
    - We need to put the immediate opening html element next to return keyword while creating the element or else it will give error. 
    - A better way to put it in parenthesis with opening paranthesis on the same line of return keyword.

- JSX vs HTML
    - Adding custom styling to an element uses different syntax.
    - Adding a class to an element uses different syntax.
    - JSX can reference JS variables.
    - *HTML:* &lt;div style="background-clor: red;">&lt;/div> will be converted into *JSX* as &lt;div style={{backgroundcolor: 'red'}}>&lt;/div>
    - First curly brace means that we want to referene a javascript varaiable inside of JSX. The second curly brace is meant javaScript object.
    - In styling JSX we provide javascript object.
    - We need to remove dash from any styling element in JSX
    - Separate two stylings with a comma puntuation mark.
    - As per community convention stylinh has single quotes for values but for other stuffs where character data is needed, double quotes is used.
    - In JSX for class we use className at place for class. class is a javascript keyword and is used to define component. So to prevent the collison, and throwbacks we use className at place for class. Though this limitation will be gone as smart processes continue to evolve.
    - JSX can very easily can reference javascript variable.
