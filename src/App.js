import React,{Component} from 'react';
import fire from './components/firebase';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import './App.css';
import {BrowserRouter as Router,Switch,Route}from'react-router-dom';
import MovieDetails from './components/MovieDetails';


class App extends Component{

  constructor(){
    super();
    this.state ={
      user:null
    }
  }

  componentDidMount(){
    this.authListener();
  }

authListener() {
  fire.auth().onAuthStateChanged((user)=>{
  console.log(user);
  if(user){
    this.setState({user});
    
  }else{
    this.setState({user:null});
    }
  } );
}

render(){
  return(
    
    <div >
      {/* {this.state.user?(<Home />):(<LoginRegister/>)} */}
    <Router>
    
    
    {this.state.user?(<Route path='/home' component={Home}></Route>):(<Route exact path ='/' component={LoginRegister}></Route>)}
    
    <Route path='/MovieDetails' component={MovieDetails}></Route>

    </Router>
    </div>
    
  );
}
}

export default App;
