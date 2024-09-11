import { GoogleMap, MarkerF } from "@react-google-maps/api";
interface dataProps {
  isLoaded: any;
  onLoad: any;
  containerStyle: any;
  select: any;
  onUnmount: any;
  myStyles: any;
}
const Googlemap = ({
  isLoaded,
  onLoad,
  containerStyle,
  select,
  onUnmount,
  myStyles,
}: dataProps) => {
  return (
    <div className="map-box">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: select.latitude, lng: select.longitude }}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{ disableDefaultUI: true, styles: myStyles }}
        >
          <MarkerF
            onLoad={onLoad}
            position={{ lat: select.latitude, lng: select.longitude }}
            // icon={{
            //   url: "icon.svg",
            //   scaledSize: new window.google.maps.Size(32, 32),
            // }}
          />
        </GoogleMap>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};
export default Googlemap;
