import React, {Component} from 'react';
var {Link} = require('react-router');
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
import { typography } from 'material-ui/styles';

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
              address={'22 S. Texas Avenue'}
              hours={'Mon-Fri 9am-11:45am & 1pm-3pm'}
              phone={'609-344-0660'}
              website={'https://www.salvationarmy.org'}
              position={{lat: 39.3549, lng: -74.4429}} />

            <Marker onClick={this.onMarkerClick}
              title={'The marker`s title will appear as a tooltip.'}
              name={'Turning Point'}
              tag={'Day Center for Homeless'}
              address={'1717 Bishop Richard Allen Avenue'}
              hours={'Mon-Sat 8am-10pm & 2pm-1pm'}
              phone={'609-428-6163'}
              website={'https://www.facebook.com/TurningPointDayCenter'}
              position={{lat: 39.3656463, lng: -74.43630430000002}} />

            <Marker onClick={this.onMarkerClick}
              title={'The marker`s title will appear as a tooltip.'}
              name={'Zion Redevelopment'}
              address={'525 Atlantic Avenue'}
              hours={'Wed 11am-1pm'}
              phone={'609-348-9304'}
              position={{lat: 39.366664, lng: -74.41770839999998}} />

            <Marker onClick={this.onMarkerClick}
              title={'The marker`s title will appear as a tooltip.'}
              name={'AC Rescue Mission'}
              address={'2009 Bacharach Boulevard'}
              hours={'Mon-Sun 10-11:30am'}
              phone={'609-345-5517'}
              website={'https://www.acrescuemission.org'}
              position={{lat: 39.3650061, lng: -74.44001409999998}} />

              <InfoWindow
                style={style.window}
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    <h5>{this.state.selectedPlace.tag}</h5>
                    <h5>{this.state.selectedPlace.hours}</h5>
                    <h5>{this.state.selectedPlace.address}</h5>
                    <p><a href={this.state.selectedPlace.website} className="enter">{this.state.selectedPlace.website}</a></p>
                  </div>
              </InfoWindow>
          </Map>
      </div>
    )
  }
}

const WrappedMap = GoogleApiWrapper({
  apiKey: '_API_Key_'
})(Container);

module.exports = WrappedMap;
