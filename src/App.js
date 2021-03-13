import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about:id' component={About}/>
      </Switch>
      
    </div>
  );
}

export default App;
