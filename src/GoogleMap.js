import MapAPI from 'google-map-react';
import React, { Component } from 'react';

class GoogleMap extends Component {
  render() {
  console.log("you loaded maps");
  return (
    <MapAPI
      bootstrapURLKeys={{
          key: 'AIzaSyDFNPWio4wskENclNYvxbluPAu_IBpS9sY',
          language: 'en',
          }}
      defaultCenter={{
          lat: 28.602734,
          lng: -81.200049
          }}
      zoom={10}
      size={ {width: 200, height: 200} }
    ></MapAPI>
  );
 }
}

export default GoogleMap;
