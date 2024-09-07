import { MarkerF, InfoWindowF } from "@react-google-maps/api";
import { SelectedMarkerStyled } from "@/components/MarkerComponent/styled";
import { useEffect } from "react";
import hoverMarker from "@/assets/image/hoverMarker-removebg.png"; // 올바른 경로로 이미지 import
import blueMarker from "@/assets/image/blueMarker-removebg.png";
import redMarker from "@/assets/image/redMarker-removebg-preview.png";
import blackMarker from "@/assets/image/blackMarker-removebg-preview.png";

interface dataProps {
  marker: any;
  onLoad: any;
  selectedMarker: any;
  setSelectedMarker: any;
  map: any;
  center: any;
  setCenter: any;
  isHovered: boolean; // hover 여부를 전달받음
}

const MarkerComponent = ({
  marker,
  onLoad,
  selectedMarker,
  setSelectedMarker,
  map,
  center,
  setCenter,
  isHovered, // hover 상태 추가
}: dataProps) => {
  useEffect(() => {
    console.log("map.center updated: ", center);
  }, [center]);

  const handleCloseClick = () => {
    setSelectedMarker();
  };

  return (
    <>
      {/* 마커 찍기 */}
      <MarkerF
        key={marker.id}
        onLoad={onLoad}
        position={marker.position}
        icon={{
          url: isHovered
            ? blackMarker.src // hover 상태일 때 아이콘 (변수를 사용)
            : redMarker.src, // 기본 아이콘 (변수를 사용)
          scaledSize: isHovered
            ? new window.google.maps.Size(70, 70) // hover 시 크기 변경
            : new window.google.maps.Size(50, 50), // 기본 크기
        }}
        onClick={() => {
          setSelectedMarker(marker);
          setCenter(marker.position);
        }}
      />

      {selectedMarker && selectedMarker.id === marker.id && (
        <InfoWindowF
          position={selectedMarker.position}
          options={{
            pixelOffset: new window.google.maps.Size(0, -25),
          }}
          onCloseClick={handleCloseClick}
        >
          <SelectedMarkerStyled>
            <div className="infoWindow-content">
              <img src={selectedMarker.src.src} alt={selectedMarker.name} />
              <div>{selectedMarker.region}</div>
              <div>{selectedMarker.name}</div>
              <div>{selectedMarker.price}/박</div>
            </div>
          </SelectedMarkerStyled>
        </InfoWindowF>
      )}
    </>
  );
};

export default MarkerComponent;

// import { MarkerF, InfoWindowF } from "@react-google-maps/api";
// import { SelectedMarkerStyled } from "@/components/MarkerComponent/styled";
// import { useEffect } from "react";
// interface dataProps {
//   marker: any;
//   onLoad: any;
//   selectedMarker: any;
//   setSelectedMarker: any;
//   map: any;
//   center: any;
//   setCenter: any;
// }
// const MarkerComponent = ({
//   marker,
//   onLoad,
//   selectedMarker,
//   setSelectedMarker,
//   map,
//   center,
//   setCenter,
// }: dataProps) => {
//   useEffect(() => {
//     console.log("map.center updated: ", center);
//   }, [center]);
//   // InfoWindowF 닫힘 처리
//   const handleCloseClick = () => {
//     setSelectedMarker(); // 마커 선택 해제만 처리
//   };
//   return (
//     <>
//       {/* 마커찍기 */}
//       <MarkerF
//         key={marker.id}
//         onLoad={onLoad}
//         position={marker.position}
//         // icon={{
//         //   url: "../../assets/any/mark.png",
//         //   scaledSize: new window.google.maps.Size(32, 32),
//         // }}
//         onClick={() => {
//           setSelectedMarker(marker);
//           setCenter(marker.position);
//           console.log("selectedMarker :::: ", selectedMarker);
//         }}
//       />
//       {/* 마커클릭 */}
//       {selectedMarker && selectedMarker.id === marker.id && (
//         <InfoWindowF
//           position={selectedMarker.position}
//           options={{
//             pixelOffset: new window.google.maps.Size(0, -25),
//           }}
//           onCloseClick={handleCloseClick} // 마커 해제를 처리하는 핸들러
//         >
//           <SelectedMarkerStyled>
//             <div className="infoWindow-content">
//               <img src={selectedMarker.src.src} alt={selectedMarker.name} />
//               <div>{selectedMarker.region}</div>
//               <div>{selectedMarker.name}</div>
//               <div>{selectedMarker.price}/박</div>
//             </div>
//           </SelectedMarkerStyled>
//         </InfoWindowF>
//       )}
//     </>
//   );
// };
// export default MarkerComponent;
