import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { seoul, busan, jeju, jeonju } from "@/utill/data";
import ShowRoom from "@/components/ShowRoom";
import MarkerComponent from "@/components/MarkerComponent";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { SearchStyled } from "./styled";
import { SearchPageShowRoomStyled } from "@/components/ShowRoom/searchpageStyled";

const SearchPage = () => {
  const router = useRouter();
  const { place, checkInDate, checkOutDate, peopleNum } = router.query;
  const allData = [...seoul, ...busan, ...jeju, ...jeonju];
  const filteredData = allData.filter(
    (item) => item.region === place && Number(peopleNum) <= item.peopleLimit
  );

  const containerStyle = {
    width: "700px",
    height: "800px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyARzbftw25anRK82_C4ynoH7_T8xX-BRyY", // 올바른 API 키를 입력하세요
  });

  const [center, setCenter] = useState<any>();
  const [map, setMap] = React.useState(null);
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null); // hover된 marker id 저장
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  useEffect(() => {
    const newCenter =
      place === "서울"
        ? { lat: 37.5665, lng: 126.978 }
        : place === "부산"
        ? { lat: 35.1796, lng: 129.0756 }
        : place === "제주"
        ? { lat: 33.4996, lng: 126.5312 }
        : place === "전주"
        ? { lat: 35.8219, lng: 127.148 }
        : place === "속초"
        ? { lat: 38.207, lng: 128.591 }
        : place === "강릉"
        ? { lat: 37.7519, lng: 128.8761 }
        : place === "강원도"
        ? { lat: 37.8228, lng: 128.1555 }
        : place === "대구"
        ? { lat: 35.8714, lng: 128.6014 }
        : place === "경주"
        ? { lat: 35.8562, lng: 129.2246 }
        : place === "여수"
        ? { lat: 34.7604, lng: 127.6622 }
        : place === "대전"
        ? { lat: 36.3504, lng: 127.3845 }
        : place === "인천"
        ? { lat: 37.4563, lng: 126.7052 }
        : { lat: 37.5665, lng: 126.978 }; // 기본값 (서울의 좌표)
    setCenter(newCenter);
  }, [place]);
  const onLoad = useCallback((mapInstance: any) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const markers = allData.map((item) => ({
    id: item.id,
    src: item.src[0],
    region: item.region,
    name: item.name,
    price: Number(item.price[2].total).toLocaleString(),
    position: { lat: item.latitude, lng: item.longitude },
  }));

  useEffect(() => {
    if (selectedMarker) {
      setCenter(selectedMarker.position);
    }
  }, [selectedMarker]);

  const myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

  return (
    <SearchStyled>
      <div className="wrap-box">
        <div className="map-box">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={11}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{ disableDefaultUI: true, styles: myStyles }}
            >
              {markers.map((marker, i) => (
                <div key={i}>
                  <MarkerComponent
                    marker={marker}
                    selectedMarker={selectedMarker}
                    setSelectedMarker={setSelectedMarker}
                    map={map}
                    center={center}
                    setCenter={setCenter}
                    onLoad={onLoad}
                    isHovered={Number(hoveredMarkerId) === marker.id} // hover 상태 전달
                  />
                </div>
              ))}
            </GoogleMap>
          ) : (
            <p>Loading map...</p>
          )}
        </div>
        <div className="data-box">
          <SearchPageShowRoomStyled>
            {filteredData.length > 0 ? (
              <div className="itemBox">
                {filteredData.map((x: any, i: number) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredMarkerId(x.id)} // hover 시작
                    onMouseLeave={() => setHoveredMarkerId(null)} // hover 종료
                  >
                    <ShowRoom data={x} />
                  </div>
                ))}
              </div>
            ) : (
              <p>No matching results found.</p>
            )}
          </SearchPageShowRoomStyled>
        </div>
      </div>
    </SearchStyled>
  );
};

export default SearchPage;

// import React, { useState, useCallback, useEffect } from "react";
// import { useRouter } from "next/router";
// import { seoul, busan, jeju, jeonju } from "@/utill/data";
// import ShowRoom from "@/components/ShowRoom";
// import MarkerComponent from "@/components/MarkerComponent";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import { SearchStyled } from "./styled";
// import { SearchPageShowRoomStyled } from "@/components/ShowRoom/searchpageStyled";

// const SearchPage = () => {
//   // console.log("화면이 재랜더링 되는지 확인!!!!!!!!!!!");
//   const router = useRouter();
//   const { place, checkInDate, checkOutDate, peopleNum } = router.query;
//   const allData = [...seoul, ...busan, ...jeju, ...jeonju];
//   const filteredData = allData.filter(
//     (item) => item.region === place && Number(peopleNum) <= item.peopleLimit
//   );

//   const containerStyle = {
//     width: "700px",
//     height: "800px",
//   };

//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyARzbftw25anRK82_C4ynoH7_T8xX-BRyY", // 여기에 올바른 API 키를 입력하세요
//   });

//   const [center, setCenter] = useState<any>();
//   const [map, setMap] = React.useState(null);

//   // 장소에 따른 center 값 업데이트
//   useEffect(() => {
//     const newCenter =
//       place === "서울"
//         ? { lat: 37.5665, lng: 126.978 }
//         : place === "부산"
//         ? { lat: 35.1796, lng: 129.0756 }
//         : place === "제주"
//         ? { lat: 33.4996, lng: 126.5312 }
//         : place === "전주"
//         ? { lat: 35.8219, lng: 127.148 }
//         : place === "속초"
//         ? { lat: 38.207, lng: 128.591 }
//         : place === "강릉"
//         ? { lat: 37.7519, lng: 128.8761 }
//         : place === "강원도"
//         ? { lat: 37.8228, lng: 128.1555 }
//         : place === "대구"
//         ? { lat: 35.8714, lng: 128.6014 }
//         : place === "경주"
//         ? { lat: 35.8562, lng: 129.2246 }
//         : place === "여수"
//         ? { lat: 34.7604, lng: 127.6622 }
//         : place === "대전"
//         ? { lat: 36.3504, lng: 127.3845 }
//         : place === "인천"
//         ? { lat: 37.4563, lng: 126.7052 }
//         : { lat: 37.5665, lng: 126.978 }; // 기본값 (서울의 좌표)
//     setCenter(newCenter);
//   }, [place]);

//   const onLoad = useCallback(
//     (mapInstance: any) => {
//       // setMap(mapInstance);
//       setMap(mapInstance); // center로 초기 설정
//       console.log("map이 여러번 로딩되는건가???????");
//     },
//     [center]
//   );

//   const onUnmount = useCallback(() => {
//     setMap(null);
//   }, []);

//   const markers = allData.map((item) => ({
//     id: item.id,
//     src: item.src[0],
//     region: item.region,
//     name: item.name,
//     price: Number(item.price[2].total).toLocaleString(),
//     position: { lat: item.latitude, lng: item.longitude },
//   }));

//   const [selectedMarker, setSelectedMarker] = useState<any>(null);
//   // selectedMarker가 변경될 때만 center를 업데이트
//   useEffect(() => {
//     if (selectedMarker) {
//       setCenter(selectedMarker.position); // center를 한 번만 업데이트
//     }
//   }, [selectedMarker]);

//   const myStyles = [
//     {
//       featureType: "poi",
//       elementType: "labels",
//       stylers: [{ visibility: "off" }],
//     },
//   ];
//   return (
//     <SearchStyled>
//       <div className="wrap-box">
//         {/* 좌측 지도 */}
//         <div className="map-box">
//           {isLoaded ? (
//             <GoogleMap
//               mapContainerStyle={containerStyle}
//               center={center}
//               zoom={11}
//               onLoad={onLoad}
//               onUnmount={onUnmount}
//               options={{ disableDefaultUI: true, styles: myStyles }}
//             >
//               {markers.map((marker, i) => (
//                 <div key={i}>
//                   <MarkerComponent
//                     marker={marker}
//                     selectedMarker={selectedMarker}
//                     setSelectedMarker={setSelectedMarker}
//                     map={map}
//                     center={center}
//                     setCenter={setCenter}
//                     onLoad={onLoad}
//                   />
//                 </div>
//               ))}
//             </GoogleMap>
//           ) : (
//             <p>Loading map...</p>
//           )}
//         </div>
//         {/* 우측 데이터 */}
//         <div className="data-box">
//           <SearchPageShowRoomStyled>
//             {filteredData.length > 0 ? (
//               <div className="itemBox">
//                 {filteredData.map((x: any, i: number) => (
//                   <ShowRoom data={x} key={i} />
//                 ))}
//               </div>
//             ) : (
//               <p>No matching results found.</p>
//             )}
//           </SearchPageShowRoomStyled>
//         </div>
//       </div>
//     </SearchStyled>
//   );
// };

// export default SearchPage;
