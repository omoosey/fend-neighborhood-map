
import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';

class App extends Component {
  state = {
    locations: []
  }


  render() {
    return (
      <div className="App">
        <MapContainer locations={this.state.locations}/>
      </div>
    );
  }
}

export default App;
