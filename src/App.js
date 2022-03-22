import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
   const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
   fetch(url)
    .then(response => response.json())
    .then(data => {
    this.setState({
      flats: data
    });
    })
  }

  render() {
    const center = {
      lat: 48.8566,
      lng: 2.3522
    }
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />
            })}
          </div>
        </div>
        <div className="map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={center}
        zoom={9}>
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
