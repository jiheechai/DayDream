import { InfoWindowF } from "@react-google-maps/api";
// import { SelectedMarkerStyled } from "./styled";

interface dataProps {
  selectedMarker: any;
  marker: any;
  map: any;
}

const SelectedMarkerComponent = ({
  selectedMarker,
  marker,
  map,
}: dataProps) => {
  // useEffect는 컴포넌트 최상위에서 호출
  // useEffect(() => {
  // 선택된 마커가 있고, 지도 객체가 있을 때 지도 중심을 설정
  //   if (map && selectedMarker) {
  //     map.setCenter(selectedMarker.position);
  //   }
  // }, [selectedMarker]);

  // InfoWindowF 닫힘 처리
  const handleCloseClick = () => {
    // setSelectedMarker(null); // 마커 선택 해제만 처리
  };

  return (
    selectedMarker &&
    selectedMarker.id === marker.id && (
      <InfoWindowF
        position={selectedMarker.position}
        options={{
          pixelOffset: new window.google.maps.Size(0, -25),
        }}
        onCloseClick={handleCloseClick} // 마커 해제를 처리하는 핸들러
      >
        {/* <SelectedMarkerStyled> */}
        <div className="infoWindow-content">
          <img src={selectedMarker.src.src} alt={selectedMarker.name} />
          <div>{selectedMarker.region}</div>
          <div>{selectedMarker.name}</div>
          <div>{selectedMarker.price}/박</div>
        </div>
        {/* </SelectedMarkerStyled> */}
      </InfoWindowF>
    )
  );
};

export default SelectedMarkerComponent;
