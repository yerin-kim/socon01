import React from 'react';
//import proptypes from 'prop-types';
//import Potato from './Potato';
import '.App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './Components/Navigation';
import Detail from './routes/Detail';
import Navigation from './Components/Navigation';

function App() {
  return (
  <HashRouter>
    <Navigation>
      <Route path ="/" exact={true} component={Home} ></Route>
      <Route path ="/about"component={About} ></Route>
      <Route path ="/movie-detail"component={Detail} ></Route>
    </Navigation>
  </HashRouter>
  );
  }
  export default App; 

/*class App extends React.Component {
  state = {
   isLoading : true,
  };
  ComponentDidMount(){
    setTimeout (()=> {
      this.setState({isLoading:false});
    },6000);
  }
  render() {
    const {isLoading} = this.state;
    return<div>{isLoading?'Loading,,,' : 'we are ready'}</div>;
  }
}
  export default App;

  add = () => {
    this.setState(current => ({
      count: current.count +1,
    }));
  };
  minus =() => {
    this.setState(current => ({
      count: current.count -1,
    }));
  };
  render() {
    return (
      <div>
        <h1> The number is :{this.state.count}</h1>
        <button>Add</button>
        <button>Minus</button>
      </div>
    );
  }
}
*/
/*function Food({name, picture, rating}){
  return(
    <div>
  <h1>I like{ name}  </h1>
  <h4>{rating}/5.0 </h4>
  <img src ={picture} alt={name}/>
  </div>
  );
}

}*/
