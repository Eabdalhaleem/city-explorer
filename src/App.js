import React, { Component } from 'react';
import axios from 'axios';

export class App extends Component {

  constructor(props){
    super(props)
    this.state={
      displayName:'',
      latitude:'',
      longitude:'',
      show: false,
      error: ''

    }

  }

  cityNameChange=(e)=>{
    this.setState({
      displayName:e.target.value
    })


  }
  submitData=(e)=>{
    e.preventDefault()
    this.setState({

    })
  }
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='city explorer' onChange={(e)=>{this.cityNameChange(e)}}/>
          <button onClick>Explor</button>
        </form>
        <h1>{this.state.displayName}</h1>
        <h3>{this.state.latitude}</h3>
        <h3>{this.state.longitude}</h3>
      </div>
    )
  }
}

export default App
