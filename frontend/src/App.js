import React, {Component} from 'react';
import './App.css';
import HomePage from './Components/Homepage';
import HikeShow from './Components/HikeShow'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
var fetch = require('node-fetch');
const api = process.env.API_KEY;
let lat = '40.0274';
let long = '-105.2519';

class  App extends Component {
  state = {
    hikes: []
  }
  componentDidMount() {
    this.getHikes()
  }
  getHikes = () => {
    fetch(`https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200901349-cde9c435c511e1aff377e76663cda4c5`)
    .then(res => res.json())
    .then(data => this.setState({hikes: data.trails}))
    .catch(err =>{
      console.log('Error while fetching trails', err)
    })
  }


  render(){
    let hikes = this.state.hikes.map((hike, i) =>{
      return <HomePage key={i} hike={hike} />
    })

  return (

    <div>
      <div className="App">
        <main>

        {hikes}

        </main>
  
      </div>
      
    </div>

  );
  }
  
}

export default App;
