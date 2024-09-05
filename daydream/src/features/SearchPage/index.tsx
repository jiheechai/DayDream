import React, { useState, useCallback } from "react";
import { seoul, busan, jeju, jeonju } from "@/utill/data";
import ShowRoom from "@/components/ShowRoom";
import { MainPageShowRoomStyled } from "@/components/ShowRoom/styled";
import { useRouter } from "next/router";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
const SearchPage = () => {
  const router = useRouter();
  const { place, checkInDate, checkOutDate, peopleNum } = router.query;
  const allData = [...seoul, ...busan, ...jeju, ...jeonju];

  const containerStyle = {
    width: "50%",
    height: "800px",
  };

  const center =
    place === "서울"
      ? { lat: 37.5665, lng: 126.978 } // 서울의 좌표
      : place === "부산"
      ? { lat: 35.1796, lng: 129.0756 } // 부산의 좌표
      : place === "제주"
      ? { lat: 33.4996, lng: 126.5312 } // 제주의 좌표
      : place === "전주"
      ? { lat: 35.8219, lng: 127.148 } // 전주의 좌표
      : { lat: 37.5665, lng: 126.978 }; // 기본값 (서울의 좌표)

  // 필터링 조건에 맞는 데이터 추출
  const filteredData = allData.filter(
    (item) => item.region === place && Number(peopleNum) <= item.peopleLimit
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyARzbftw25anRK82_C4ynoH7_T8xX-BRyY",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoadMap = useCallback((map: google.maps.Map) => {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
    map.setCenter(center);
    map.setZoom(13);
  }, []);

  const onUnmountMap = useCallback(() => {
    setMap(null);
  }, []);

  // Marker의 onLoad 콜백 함수
  const onLoadMarker = useCallback((marker: google.maps.Marker) => {
    console.log("Marker loaded:", marker);
  }, []);
  const myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

  const markers = allData.map((item) => ({
    id: item.id,
    position: { lat: item.latitude, lng: item.longitude },
  }));
  console.log(markers);

  return (
    <div>
      {/* 테스트 데이터 */}
      <h1>Search Results</h1>
      <p>Place: {place}</p>
      <p>Check-in Date: {checkInDate}</p>
      <p>Check-out Date: {checkOutDate}</p>
      <p>Number of People: {peopleNum}</p>

      {/* 지도 */}
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={9}
          onLoad={onLoadMap}
          onUnmount={onUnmountMap}
          options={{ disableDefaultUI: true, styles: myStyles }}
        >
          {/* 마커 컴포넌트 */}
          {markers.map((marker) => (
            <MarkerF
              key={marker.id}
              onLoad={onLoadMarker}
              position={marker.position}
              // icon={{
              //   url: "../../assets/any/mark.png",
              //   scaledSize: new window.google.maps.Size(32, 32),
              // }}
            />
          ))}
        </GoogleMap>
      ) : (
        <p>Loading map...</p>
      )}

      {/* 검색결과 데이터 */}
      <h2>Filtered Results:</h2>
      {filteredData.length > 0 ? (
        <MainPageShowRoomStyled>
          <div className="wrapBox">
            {filteredData.map((x: any, i: number) => {
              return <ShowRoom data={x} key={i} />;
            })}
          </div>
        </MainPageShowRoomStyled>
      ) : (
        <p>No matching results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
