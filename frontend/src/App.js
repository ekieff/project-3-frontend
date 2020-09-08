import React, {Component} from 'react';
import './App.css';
import HomePage from './Components/Homepage';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
require('dotenv').config()
var fetch = require('node-fetch');
const API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_HIKE_ID = process.env.REACT_APP_HIKE_ID;

const REACT_APP_LAT = process.env.REACT_APP_LAT;
const REACT_APP_LONG = process.env.REACT_APP_LONG;
let fetchAllHTML = 'https://www.hikingproject.com/data/get-trails?lat=' + REACT_APP_LAT +'&lon=' + REACT_APP_LONG +'&maxDistance=10&key=' +API_KEY
let fetchOneHTML = 'https://www.hikingproject.com/data/get-trails-by-id?ids='+REACT_APP_HIKE_ID +'&key='+ API_KEY


class  App extends Component {
  

  getHikeId = () => {

    fetch(fetchOneHTML)
    .then(res => res.json())
    .then(data => this.setState({hikes: data.trails}))
    .catch(err =>{
      console.log('Error while fetching trails', err)
    })
  }

  render(){

  return (

    <div>
      <div className="App">
        <main>
          <Switch>
        <Route path = "/hike" component={ HomePage } />
        </Switch>
        </main>
  
      </div>
      
    </div>

  );
  }
  
}

export default App;
