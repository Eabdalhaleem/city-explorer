import React, { Component } from 'react'
import Weather from './components/Weather';
import Cities from './components/Cities';

export class App extends Component {
  render() {
    return (
      <div>
        <Weather/>
        <Cities/>
      </div>
    )
  }
}

export default App

