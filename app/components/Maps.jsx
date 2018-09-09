import React, {Component} from 'react';
var {Link} = require('react-router');
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '100vw',
  height: '90vh'
}

// Create Map
export class Container extends React.Component {

  constructor(props) {
    super(props)
    this.state = { show : false };

    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });

  onMarkerClick = (props, marker, e) => {
    const { show } = this.state;
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      show : !show
    })
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  // constructor( props ){
  //       super( props )
  //       this.state = { show : false };
  //
  //       this.toggleDiv = this.toggleDiv.bind(this)
  //   }
  //
  //   toggleDiv = () => {
  //       const { show } = this.state;
  //       this.setState( { show : !show } )
  //   }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (

      <div style={style}>
        {/* <button className="toggle" onClick={this.toggleDiv}>Toggle div</button>
        <br /><br />
        { this.state.show && <div>Toggle This</div> } */}

        { this.state.show &&
          <div className="profile-container">
            <div className="marker-image">
              <img className="marker-img" src={this.state.selectedPlace.img} alt={this.state.selectedPlace.name} />
              <h1>{this.state.selectedPlace.name}</h1></div>
            <div className="marker-profile">
              <h1><i className="fas fa-map-marker map-icon-marker"></i>{this.state.selectedPlace.address}</h1>
              <div className="maker-profile-body">
                <h5 className="one"><i className="fas fa-phone map-icon-marker"></i>{this.state.selectedPlace.phone}</h5>
                <h5 className="two"><i className="fas fa-globe map-icon-marker"></i><a href={this.state.selectedPlace.website} className="enter">Website</a></h5>
                <h5 className="third"><i className="fas fa-door-open map-icon-marker"></i>{this.state.selectedPlace.hours}</h5>
              </div>
            </div>
          </div> }

        <Map
          item
          xs={12}
          google={this.props.google}
          onClick={this.onMapClick}
          zoom={15}
          initialCenter={{ lat: 39.3643, lng: -74.4229 }}>

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/salvation-army.jpg'}
              name={'Salvation Army'}
              address={'22 S. Texas Avenue'}
              hours={'Mon-Fri 9am-11:45am & 1pm-3pm'}
              phone={'609-344-0660'}
              website={'https://www.salvationarmy.org'}
              position={{lat: 39.3549, lng: -74.4429}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/turning-pont-day-center-for-the-homeless.jpg'}
              name={'Turning Point'}
              tag={'Day Center for Homeless'}
              address={'1717 Bishop Richard Allen Avenue'}
              hours={'Mon-Sat 8am-10pm & 2pm-1pm'}
              phone={'609-428-6163'}
              website={'https://www.facebook.com/TurningPointDayCenter'}
              position={{lat: 39.3656463, lng: -74.43630430000002}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/zion-developlment.jpg'}
              name={'Zion Redevelopment'}
              address={'525 Atlantic Avenue'}
              hours={'Wed 11am-1pm'}
              phone={'609-348-9304'}
              position={{lat: 39.366664, lng: -74.41770839999998}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/ac-rescue-mission.jpg'}
              name={'AC Rescue Mission'}
              address={'2009 Bacharach Boulevard'}
              hours={'Mon-Sun 10-11:30am'}
              phone={'609-345-5517'}
              website={'https://www.acrescuemission.org'}
              position={{lat: 39.3650061, lng: -74.44001409999998}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                  url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                  anchor: new google.maps.Point(32,32),
                  scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/atlanticare-food-pantry.jpg'}
              name={'Atlanticare Food Pantry'}
              address={'2009 Bacharach Boulevard'}
              hours={'Mon-Fri  9am-5am:by appt.'}
              phone={'609-204-0922'}
              position={{lat: 39.3635493, lng: -74.4255867}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                  url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                  anchor: new google.maps.Point(32,32),
                  scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/venice-park-food-pantry.jpg'}
              name={'Venice Park Food Pantry'}
              address={'2009 Bacharach Boulevard'}
              hours={'Every 3rd Thursday. 10-1pm'}
              phone={'609-335-7713'}
              position={{lat: 39.3729956, lng: -74.44753479999997}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/meals-on-wheels.jpg'}
              name={'Meals on Wheels'}
              address={'1102 Atlantic Avenue'}
              hours={'Mon-Sun 1-4pm (tues. 1-3)'}
              phone={'609-347-5445'}
              website={'http://atlantic-county.org/intergenerational-services/meals-on-wheels.asp'}
              position={{lat: 39.3631743, lng: -74.424579}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/barlinivis-apartments.jpg'}
              name={'Barlinvis Apartments'}
              address={'2006 Beach Avenue'}
              hours={'3rd & 4th Wednesday & 1st & 2nd Monday'}
              phone={'609-344-7424'}
              position={{lat: 39.37322, lng: -74.45641899999998}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/catholic-charities.jpg'}
              name={'Catholic Charities'}
              address={'9 North Georgia Avenue'}
              hours={'Monday - Friday 10am- 3pm'}
              phone={'609-345-3448'}
              website={'http://catholiccharitiescamden.org/?staff=atlantic-county'}
              position={{lat: 39.35752919999999, lng: -74.44072399999999}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/connecting-the-dots.jpg'}
              name={'Connecting the Dots'}
              address={'343 Rosemont Place'}
              hours={'Last Weds. & Thurs. of the Month 1-3pm'}
              phone={'609-705-2454'}
              website={'https://www.facebook.com/Connecting-The-Dots-Inc-117063864986349/'}
              position={{lat: 39.365843, lng: -74.43438400000002}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/grace-assembly-of-god.jpg'}
              name={'Grace Assembly of God'}
              address={'201-205 Atlantic Avenue'}
              hours={'Last Tues. of each month 10-12am'}
              phone={'609-839-2986'}
              website={'http://www.graceaog.org'}
              position={{lat: 39.367989, lng: -74.41351199999997}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/new-jerusalem-food-pantry.jpg'}
              name={'New Jerusalem Food Pantry'}
              address={'201-205 Atlantic Avenue'}
              hours={'Monday - Friday 9am - 5pm'}
              phone={'609-839-2986'}
              position={{lat: 39.3620157, lng: -74.4338998}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/st-andrews-church.jpg'}
              name={'St. Andrews'}
              address={'936 Baltic Ave'}
              hours={'Last 2 Thursday. 10am - 2am'}
              phone={'609-344-7333'}
              website={'https://www.standrewatlanticcity.org'}
              position={{lat: 39.3668979, lng: -74.42439790000003}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/st-james-church.jpg'}
              name={'St. James Church'}
              address={'101 North New York Avenue'}
              hours={'Monday - Friday 9am - 5pm'}
              phone={'609-345-0179'}
              website={'http://www.stjamesamechurchac.org'}
              position={{lat: 39.3634634, lng: -74.43016690000002}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/our-lady-of-star-of-the-sea.jpg'}
              name={'Our Lady Star of the Sea'}
              address={'2651 Atlantic Avenue'}
              hours={'3rd Monday 8:30 - 11:30am'}
              phone={'609-345-1878'}
              website={'http://www.accatholic.org'}
              position={{lat: 39.35613499999999, lng: -74.44427339999999}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/asbury-united-methodist-church.jpg'}
              name={'Asbury United Methodist Church'}
              address={'1213 Pacific Avenue'}
              hours={'Every Sat from 11am - 1pm'}
              phone={'609-348-1941'}
              website={'http://asburyumcac.org'}
              position={{lat: 39.3614678, lng: -74.42540350000002}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/the-church-of-jesus-christ-of-latter-day-saints.jpg'}
              name={'Union Baptist Temple'}
              address={'335 North Pennsylvania Avenue'}
              hours={'2nd Thursday of each month 3-5pm'}
              phone={'301-346-4776'}
              website={'https://www.facebook.com/pages/Union-Baptist-Temple/162482370442557'}
              position={{lat: 39.3689155, lng: -74.42723560000002}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/the-church-of-jesus-christ-of-latter-day-saints.jpg'}
              name={'St. Michael Church'}
              address={'2651 Atlantic Avenue'}
              hours={'3rd Monday 8:30 - 11:30am'}
              phone={'609-345-1878'}
              website={'http://www.accatholic.org'}
              position={{lat: 39.35613499999999, lng: -74.44427339999999}} />

            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear in the profile.'}
              icon={{
                url: "http://nightowlmedia.co/images/cd-icon-location-green.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
              img={'http://nightowlmedia.co/images/the-church-of-jesus-christ-of-latter-day-saints.jpg'}
              name={'The Church of Jesus Christ of Latter-Day Saints'}
              address={'139 N Iowa Avenue'}
              hours={'Monday - Friday 8:30 - 11:30am'}
              phone={'609-340-8535'}
              website={'http://www.accatholic.org'}
              position={{lat: 39.3575384, lng: -74.44702130000002}} />

              {/* <InfoWindow
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
              </InfoWindow> */}
          </Map>
      </div>
    )
  }
}

const WrappedMap = GoogleApiWrapper({
  apiKey: 'AIzaSyAIEVY_I_PCQD8mGdWo4IzYaoFDaCN3kCI'
})(Container);

module.exports = WrappedMap;
