import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.8375,
      lng: -66.1174
    },
    zoom: 14
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%', paddingtop: '300px'}}>
        <GoogleMapReact

          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={43.8375}
            lng={-66.1174}
            markernpm="Aerial Ridge"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;