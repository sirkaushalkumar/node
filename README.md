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
    - In JSX for `class` we use `className` at place for `class`. `class` is a javascript keyword and is used to define component. So to prevent the collison, and throwbacks we use `className` at place for `class`. Though this limitation will be gone as smart processes continue to evolve.
    - JSX can very easily  reference javascript variable. We can take a javascript variable and easily print it in JSX block (by uisng curly braces that is javascript variable).
    - Specifically we can display anything as text or as value. Such as string, integer, array, set of number etc.
    - But if we replave it with javascript object it is going to give error. For Objects are not valid as React Child.
    We are not allowed to take a js object and reference it in jsx. But we can use key inside object in case needed.
    We can also use style through this technique.
    - There are certain keywords like class and for which can be misterpreted. as discussed above for class,for is too replaces with `htmlFor` as `for` can be interpreted as javascript for.
    
### Communicating with props

- Nesting, Reusability and Configuration are three tenants of React Ecosystem.
    - Component **Nesting**
        - A component can shown inside of another.

    - Component **Resusability**
        - We want to make components that can be easily reused through out application.

    - Component **Configuartion**
        - We should be able to configure a component when it is created.
- We can leverage lot of available opesource libraries for small developement projects -
    - [Semantic UI](https://semantic-ui.com/views/comment.html) is one of the css helpers. Thi link mentioned here is a page for comments. We have used a [CDN](https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css) mentioned in hyperlink
    - We can use [faker.js](https://github.com/marak/Faker.js/) to generate massive amounts of realistic fake data in Node.js and the browser.

- Creating a Reusable, Configurable Component
    - Identify the JSX that appears to be duplicated
    - What is the purpose of that block of JSX? Think of a descriptive name for what it does
    - Create a new file to house this new component -  It should have the same name as the component
    - Create a new component in the new file. Paste the JSX into it
    - Make the new component configurable by using React's 'props' system.
    
- To be able to use the component, we have to accomplish two things:
    - We will use export statemnt in component js file telling others that if you want access, we have got it covered.
    - We will add import in index.js creating a link
    - The technique is called nesting.
    Since conponent is nested inside main app, app is parent component and imported component is child component.
 - The technique is called nesting. Since conponent is nested inside main app, app is parent component and imported component is child component. 

 - Props system can be used to customize the reusable components. Props system:
    - System for passing data from a parent component to a child component.
    - Goal is to customize or configure a child component.
    - It will send a little bit of configuration. 
    - A child cannot pass on the information to the parent element directly. It is generally about communicating informatiom from parent to child.
    - There are two stages-
        - parent component provides information
        - Child component accepts information
    - Name and value of the props are passed from parent: *&lt;ChildComponent propname="propvalue"/>* 
    - We can referernce some javascript variable as well in place of propvalue.
    - Props are referenced as arguments in child component definition javascript file.
    - Component can be reused used props and closing tage similar to html.

### Structuring Apps with Class-Based Components

- Functional Components are good good for simple content
- Class Components are good for just about everything else.
- 3 Benfits of Class Compenents
    1. 1st Benefit:
        - Easier Code organization
    2. 2nd Benefit(s)
        - can use 'state' (another React system)
        - Easier to handle use input
    3. 3rd Benefit(s)
        - Understands lifecycle events
        - Easier to do things when the app first starts.

- Third Application Challenges
    - Need to get the users physical location
    - Need to determine the current month
    - Need to change text and styling based on location + month
 - App Components
    - *App:* Has code to determine location + month
    - *SeasonDisplay:* Shows different text/icons based on props

- We can use [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to get user location using JavaScript.

- Application Lifecycle
    - JS file loaded by browser
    - App component gets created
    - We call gelocation service
    - App returns JSX, gets rendered to page as HTML
    - ... .
    - We get result of geolocation

- The geolocation api takes few seconds to deliver the location parameters(javascript returns jsx and gets turned into html and it is faster than geolocation api). A class based component in conjuction with state system is a solution foe this issue to fix to get the coordinates.

- New Lifecycle
    - JS file loaded by browser
    -  App component gets created
    - We call gelocation service
    - App returns JSX, gets rendered to page as HTML
    - ... .
    - We get result of geolocation
    - Tell the component to rerender itself with the new information

- Rules of Class Components
    - Must be a Javascript class (introduced in es2015)
    -  Must extend (subclass) React.Component
    -  Must define a 'render' method that returns some amount of JSX

- We are creating one class having only method render. We borrow other methods from React.Compoent into our class. In other words we are creating subclasses.


### State in React Components

- Rules of State
    - Only usable with class components. Technically can be used with functional components using the 'hooks system' (to be discussed later)
    - You will confuse props with state :(
    - 'State' is a JS object that contains data relevant to a component
    - Updating 'state' on a component causes the component to (almost) instantly rerender
    - State must be initialized when a component is created.
    - State can **only** be updated using the function 'setState'

- We make sure that we initialize our state when the component is first created. We eventually make sure that we update our state with setState. 
- We have a ceremonial thing to do in constructor i.e., calling super function. Base class has its sub class of its own. When we craete a class it overwrites. So to make sure that features rae called from called, we use super function.
- Then we initialize our state object. It will contain some important and relevant data for app. We usually initialize variables with sensible values. Numeric values are defaulted with **null**.
- Once we have assigned to its state, we can freely reference the state object and its properties inside of our app component.
- Anytime we update our state object right gere, component will almost render itself.
- We should not initialize any method or call in render methid that takes time.
- To update our state object, we always use setState.
- We called setState to update
- We never do direct assignment.
- Constructor function is optional, but if we create it, it is called first and it is mandatory to call super function inside it.
- Render is a mandatory function, It must be called and it must return some JSX

- App Lifecycle walkthrough
    - JS file loaded by browser
    - Instance of App component is created
    - App components 'constructor function gets called
    - State object is craeted and assigned to the 'this.state' property
    - We called geolocation service
    - React calls the components render method
    - App returns JSX, gets rendered to page as HTML
    - ...
    - We get result of gelocation
    - We update our state object with a call to 'this.setState'
    - React sees that we updatws the state of a component
    - React calls our 'render' method a second time
    - Render method returns some (updated) JSX.
    - React takes that JSX and updates content on the screen.

### Understanding Lifecycle Methods

- There are two ways to initialize state. We are going to see second. To understand that we need to understand Lifecycle Method.
- Component Lifecycle
    - constructor
    - render
        - component visible on screen
    - componentDidMount
        - Sit and wait for updates... .
    - componentDidUpdate
        - Sit and wait until this component is no longer shown
    - componentWillUnmount
- This entire series of event id called compoent lifecycle.
- These lifecycle methods are functions that are called during very distinct or discreet times during that cycle.
- **Render** Method is one function hat we absolutely have to define.
- First off immediately after a component shows up on the screen of our browser, a lifecycle method componentDidMount is called. We can use this method to put some amount of code inside to setup or do some initial data loading or a wide variety of operations that we might want to do.
- Once this is called, our component essentially sits around and wait for an update. Update is going to come in the form of calling setState Method. The component will rerender itselfor essentially update itself. Anytime that happens another lifecycle method ComponentDidUpdate will be called automatically.
- If at somepoint of time, we look to stop showing our component, ComponentDidUmnount will be called autmatically.

- Why lifecycle methods
    - *constructor:* Good Place to do one-time setup
    - *render:* Avoid doing anything besides returning JSX
    - *componentDidMount:* Good Place to do data-loading!
    - *componentDidUpdate:* Good Place to do more data-loading when state/props change like a network request or input.
    - *componentWillUnmount:* Good Place to do cleanup (especially for non-React stuff)

- We can do date loading in both render and componentDidMount function, but official documention and developers community convention asks not to do data loading in constructor function. This helps in writing more clear code. componentDidMount is perfect for initial dataloading and to kick off some outside process.

- Other lifecycle methods (rarely used)
    - shouldComponentUpdate
    - getDerivedStateFromProps
    - getSnapshotBeforeUpdate

- We can use [babeljs](https://babeljs.io/repl) website to check the react code that is rendered as HTML online.
- We can take state from a prop and pass it along the child. Anytime we call setState in parent componet, child component will also get updated. 

- We use currly braces for javascript variable. We can also use it to refer to javascript expression.
- We can provide default props, say if we have a spinner for loading and we miss to add message, them we can add following code:
```
Spinner.defaultProps = {
    message: 'Loading....'
}
```
- If no messags is provided, and no defualt props is available, then also it will work, but it is advisable as good practice to add these, we can also use props wih or operator to accomplish like `{props.message || 'Loading....}`
- We should refrain from putting if else and similar code in render function.
- Developers community asks to put component at botton after functional component, helper and config files.This is code organization.

### Handling User Input with Forms and Events

- Stuff to Still Figure Out
    - How do we get feedback from the user
    - How do we fetch data from some outside API or server
    -  How do we show lists of records.

- App Challenges
    - Nedd to get a search term from the user
    - Need to use that search term to make  a request to an outside API and fetch data
    - Need to take the fetched images and show them on the screen in a list

- To create an event handler, we create a callback function and to call it we use  event handller onChange method. We do not put parentheses in the method as we don't want it to render all the component. 
- Basically we are passing a reference to this function to the input element so that the input can call at some point in the future.
- We pass an event which is an javascript object that contains event properties
- So if someone types anything, a callback function is invoked and an argument event is passed along.
- `event.target.value` will contain the value that the user will type in.
- onChange is an event which will be called whenever an user changes the input.
- Common event handlers
    - User clicks on something: *`onClick`*
    - User chnages text in an input: *`onChange`*
    - User submits a form: *`onSubmit`*
- However some other elements that we create will not support every single different callback that we can think of.
- In other words we cannot really wire up in onChange callback to a div because a div does not ever get changes.
- Likewise a div does not get submitted but a div can be clicked so we can wire up onClick handler to a div.
- Event handlers name follows a community convention
    - It starts with on
    - It is followed by the element that we are assigning callback to
    - Further it is followed by the event we are watching
    - For example `onInputChange`
    - Sometimes people often use handle at place of on viz., `handleInputChnage`, but on is more popular.
    - We may choose any name otherwise but prop name cannot be altered.

There is an alternative method where don't need to create a separte eventhandler but can create an arrow function approach where we will pass the event and perform the action as needed. This can be preferable approach when we have to execute a single line of code. Say we called the event handler like this way - `onChange = {this.onInputChange}` and we have event handler definition as follows:

```
onInputChange(event){
    console.log(event.target.value)
}
```
- We can replace whole of this into this - `onChange = {(event) => console.log(event.target.value)}`.
- Sometime `event` is replaced with `e`.

- There are two types of form elements viz.,
    - controlled
    - uncontrolled

- As react developer, we should always use controlled form elements.
- 

We deleted the initial function and then we initialize a state object. It has a single property that we can refer as term and this can be defaulted to a empty string. The n onChange is replaces as: `onChange = {(e) => this.setState({e.target.value})}`. We will also use one more prop value initializinhg as `value ={this.state.term}`

- Flow of the process:
    - User types in input
    - Callback gets invoked
    - We call setState with the new value
    - Component rerenders
    - Input is told what its value is (coming from state)

- we assign the value of the input to value prop. It essentially overwrites whatever text is already inside of input.

- The entire setup that we did is called controlled element. It is because when we say `value = {this.state.term}` we basically shove the state term into input.

- In uncontrolled element, say if we have find the value of an element at any time, we ened to reach into the DOM amd pull out the value. The key part to understand was that the value was inside our html but not in our react code.

- We strive to centralize all the information that we have inside our react component. 
- The good thing about this approach is that it makes doing ceratin steps pretty easy and pretty starightforward. 
- For example, we can have specific text in an input, everytime our component renders. 
- We can also create manipulation for every text that user eneters. Like we want to chnage everything to lowercase everytime, when user inputs the content. The syntax shall be `onChange={(e) => this.setState({ term: e.target.value.toLowerCase()})}`
- Controlled verse is not only useful in text inputs, but in radio inputs, checkboxes as we.
- Next step is to make sure that once user presses enter key, it should trigger search.
- By default, on hit of enter key, browser attempts to submit the form to some back end server.
- undefined is a value inside javascript. id we try to access some property of it, we are going to get error.
- Two important questions on this keyword:
    - What is `this` used for in a class
    - How is the value of `this` determined in a function?

- Consider a component. It has different properties like state, render, onFormSubmit inside of the component.
- This a keyword that references back to the class itself.

|Instance of Search Bar|
|:---:|
|<br/>state<br/>render<br/>onFormSubmit<br/>|
|this|

