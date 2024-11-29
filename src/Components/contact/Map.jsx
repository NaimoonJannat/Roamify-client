import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "#2095ae",
      padding: "5px 10px",
      borderRadius: "50%",
      textAlign: "center",
    }}
  >
    {text}
  </div>
);

const Map = ({ center = { lat: 23.8103, lng: 90.4125 }, zoom = 11, markers = [] }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }} className=" lg:px-16 md:px-8 px-4 max-w-[1400px] mx-auto">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // Add your Google Maps API key here
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            text={marker.text}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
