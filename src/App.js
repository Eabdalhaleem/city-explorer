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
    let axiosResposne= axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.ea18e02e564491ab24720e046283f45f&city=Amman&format=json`)
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
