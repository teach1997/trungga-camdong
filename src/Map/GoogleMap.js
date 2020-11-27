import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 20.918049544840777,
      lng: 106.221390995632,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={20.918049544840777}
            lng={106.221390995632}
            text="Thuân Vải"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
