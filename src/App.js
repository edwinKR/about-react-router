import React from 'react';
import {
  Link,
  NavLink,
  Route,
  Switch
} from 'react-router-dom';
import About from './About'
import Home from './Home'
import Students from './Students'

const students = ['Anais', 'Andy', 'AJ', 'Cody', 'Hemesh', 'Jason', 'Mitch', 'Syd']

const desiredStyle = {
  fontWeight: "bold",
  color: "red"
}

class App extends React.Component {
  
  render() {
    return (
      
      <div>
        <h2>SnapDragon's Website</h2>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={desiredStyle} to="/about">About</NavLink>
          </li> 
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/about'component={About}>
        </Route>
        <Route path="/students">
          <Students students={students}/>
        </Route>
      </Switch>

      </div>
    );
  }
}

export default App;
