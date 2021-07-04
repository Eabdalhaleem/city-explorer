import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Weather from './components/Weather';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      latitude: '',
      longitude: '',
      show: false,
      error: '',
      localData: []
    }

  }

  cityNameChange = (e) => {
    this.setState({
      displayName: e.target.value
    })

  }
  submitData = async (e) => {
    e.preventDefault()
    try {
      let axiosResposne = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.ea18e02e564491ab24720e046283f45f&city=${this.state.displayName}&format=json`)
      let axiosApi = await axios.get(`https://localhost:${process.env.REACT_APP_BACKEND_API}/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&searchQuery==${this.state.displayName}`)
      this.setState({
        displayName: axiosResposne.data[0].displayName,
        latitude: axiosResposne.data[0].lat,
        longitude: axiosResposne.data[0].lon,
        show: !!!this.state.show,
        error: '',
        weatherData: axiosApi
      })
    }
    catch {
      this.setState({
        error: 'oops !!'
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitData}>
          <input type='text' placeholder='city explorer' onChange={(e) => { this.cityNameChange(e) }} />
          <button onClick>Explor city</button>
        </form>
        <h1>{this.state.displayName}</h1>
        <h3>{this.state.latitude}</h3>
        <h3>{this.state.longitude}</h3>

        <Card className="text-center">
          <Card.Header>city Explorere</Card.Header>
          <Card.Body>
            <Card.Title>{this.state.displayName}</Card.Title>
            <Card.Text>
              {this.state.latitude}
              {this.state.longitude}
            </Card.Text>
            <Card.Img variant="top" src={`https://maps.locationiq.com/#zoom=10.57&lat=31.983808&lon=35.908411&style=Streets=${this.state.latitude},${this.state.longitude}&zoom=20&format=png`} width='400px' height='400px ' />
          </Card.Body>
        </Card>

        {
          this.state.weatherData.map(weatherData => {
            return <weather description={weatherData.description} valid_date={weatherData.valid_date} />

          })
        }
      </div>


    )
  }


} export default App
