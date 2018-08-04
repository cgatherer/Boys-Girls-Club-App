import React, {Component} from 'react';
var {Link} = require('react-router');
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
import { typography } from 'material-ui/styles';

var PropTypes = require('prop-types');

const style = {
  width: '100vw',
  height: '90vh'
}

// Create Map
export class Container extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div style={style}>
        <Map
          item
          xs = { 12 }
          google={this.props.google}
          onClick={this.onMapClick}
          zoom={13}
          initialCenter={{ lat: 39.3643, lng: -74.4229 }}>

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear as a tooltip.'}
              name={'Salvation Army'}
              address={'2009 Bacharach Boulevard'}
              hours={'Mon-Sun 10-11:30am'}
              website={'https://www.acrescuemission.org'}
              position={{lat: 39.3549, lng: -74.4429}} />

            <Marker onClick={this.onMarkerClick}
              title={'The marker`s title will appear as a tooltip.'}
              name={'Turning Point Day Center for Homeless'}
              address={'2009 Bacharach Boulevard'}
              hours={'Mon-Sat 8am-10pm & 2pm-1pm'}
              phone={'609-428-6163'}
              website={'https://www.facebook.com/TurningPointDayCenter'}
              position={{lat: 39.3656463, lng: -74.43630430000002}} />

            <Marker onClick={this.onMarkerClick}
              title={'The marker`s title will appear as a tooltip.'}
              name={'Zion Redevelopment'}
              address={'2009 Bacharach Boulevard'}
              hours={'Mon-Sun 10-11:30am'}
              website={'https://www.acrescuemission.org'}
              position={{lat: 39.366664, lng: -74.41770839999998}} />

            <Marker onClick={this.onMarkerClick}
              title={'The marker`s title will appear as a tooltip.'}
              name={'AC Rescue Mission'}
              address={'2009 Bacharach Boulevard'}
              hours={'Mon-Sun 10-11:30am'}
              website={'https://www.acrescuemission.org'}
              position={{lat: 39.3650061, lng: -74.44001409999998}} />

              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    <h4>{this.state.selectedPlace.hours}</h4>
                    <h4>{this.state.selectedPlace.address}</h4>
                    <h4><a href={this.state.selectedPlace.website} className="enter">{this.state.selectedPlace.website}</a></h4>
                  </div>
              </InfoWindow>
          </Map>
      </div>
    )
  }
}

const WrappedMap = GoogleApiWrapper({
  apiKey: 'AIzaSyAIEVY_I_PCQD8mGdWo4IzYaoFDaCN3kCI'
})(Container);

module.exports = WrappedMap;
