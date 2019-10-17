This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Router Mini App

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

-----------------------------

## History API
 
Before trying out the react-router library, let's try to understand the History API.
- The history API available to us in the browser allows the current browser session to interact with the address bar and the navigation history. Meaning, you can:
  - Change the url address bar.
  - Change browser's local navigation history.
- We can minpulate the browser history with JavaScript! Simply open up a browser and try these out in your chrome dev tools console.
  - `history.back()`
  - `history.forward()`
  - `history.pushState({}, 'random', '/someroute')`
  _Don't worry about the first and second arguments. Just understand for now that the third argument adds an additional url to the current url in your history object!_
  - `window.location`
  _Try this too before and after manipulating the history object_.

- Good source: [MDN Doc](https://developer.mozilla.org/en-US/docs/Web/API/History_API)


Why are these good to know? It's thanks to this History API that we can create a nice SPA. We can browse with the back button which looks to your previous page by searching the previous internal links in your history object.

And as you have guessed, React-Router does this for us!

## React-Router
Ability to navigate between different components, change urls,and modifying the browser history!

Until now we have learned and acquired the ability to perform a **Server Side Rendering**. 
1. Client makes an initial GET '/' request to the Server.
2. Server responses with the `index.html` **fully rendered**.
3. Then, Client makes an additional GET '/students' request to the Server.
4. Server responses with the corresponding view **fully rendered**.

Thanks to frontend frameworks like the React, we can do **Client Side Rendering**.
1. Client makes an initial GET '/' request to the Server.
2. Server responses with the `index.html` containing something like `<div id="root"></div>`.
3. Then under the hood, **React loads** accordingly to the url route matched. For instance, if the url address is '/students', **React Router** locates the '/students' and decides which component to render.
**Important: Client is not making any additional requests to the Server! It's all happening in the browser handled by React!**

As it was hinted out from above, **React Router** is a library that manages routing in your SPA.

- Really good documentation. Try the `Quick Start` in the [docs](https://reacttraining.com/react-router/web/guides/quick-start).

Make sure you revisit the following concepts:
```
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom'
```
- NavLink's `activeStyle`
- Route's `render` & `component` 
  - Renders a component passing in the three route props (match, location, history)  
  - Only with `render` you can pass down the customized props!

  Example: Sending the below students array down to the Students component.
  ```
  const students = ['student1', 'student2', 'student3']
  ```

  Using `component`
  ```
  ...

  import Students from './Students.js'

  ...

    <Route path="/students" component={Students} /> 

  ```  
  - Console logging the props in the Students component, you will see the three route props. 
  - But there would be no way to send down the students array through props.

  Using `render`
    ```
  ...

  import Students from './Students.js'

  ...

    <Route path="/students" render={(routeProps) => <Students {...routeProps} >} students={students} />

  ```
  - Console logging the props in the Students component, you will see the three route props. 
  - **You would also see the students inside the props object with the route props!**