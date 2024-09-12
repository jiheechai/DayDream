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
  const findRoad = (lat: number, lng: number) => {
    let url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&hl=ko`;

    // 새 창에서 길찾기 열기
    window.open(url, "_blank");
  };
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
            onClick={() => {
              findRoad(select.latitude, select.longitude);
            }}
          />
        </GoogleMap>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};
export default Googlemap;
