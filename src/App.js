import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import './App.css'

const mapApi = 'https://restcountries.eu/rest/v2/region/europe';


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
    center: {
      lat: 53.0000,
      lng: 9.0000
    },
    zoom: 5,
    city: []
  };
}

  componentDidMount() {
    axios.get(mapApi)
    .then(cities => {
      this.setState({
        city: cities.data
      })
    })
  }

  render() {
    return (
      <div className="map">
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyChdzM-7cmmwZ3RzWENLu1Mo1KF0yluJzg'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {this.state.city.map((c, i)=>
        <div key={i}
        lat={c.latlng[0]}
        lng={c.latlng[1]}>
        <h6>{c.name}</h6>
          <img
          className="ala"
          src={c.flag}
          />
        </div>

      )}
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}


export default App;
