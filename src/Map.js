import React from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "800px"
};

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center:  [-22.77967233927881,-45.74321776537374],
      zoom: 14,
      minZoom: 14,
      maxZoom:14,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    // add layer
    this.layer = L.layerGroup().addTo(this.map);

    //Map marker
    this.props.point.map((item) => {
      L.marker([item.lat, item.log]).addTo(this.map);
      
    });

     L.polygon([
       [-22.784484604676322, -45.74552404099999],
     [-22.77967233927881,-45.74321776537374],
     [-22.802172022823836, -45.748416432186744]
       
     ]).addTo(this.map);
    
  L.circle([-22.784484604676322, -45.74552404099999], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(this.map);

 
    
    
    
   
    




    

  }
  componentDidUpdate({ markersData }) {
    // check if data has changed
    if (this.props.markersData !== markersData) {
      this.updateMarkers(this.props.markersData);
    }
  }
  updateMarkers(markersData) {
    this.layer.clearLayers();
    markersData.forEach(marker => {
      L.marker(marker.latLng, { title: marker.title }).addTo(this.layer);
    });
  }
  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
