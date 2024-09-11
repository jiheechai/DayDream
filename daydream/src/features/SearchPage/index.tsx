import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { seoul, busan, jeju, jeonju } from "@/utill/data";
import MarkerComponent from "@/components/MarkerComponent";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { SearchStyled } from "./styled";
import { SearchPageShowRoomStyled } from "./SearchShowItems/styled";
import ShowItems from "@/components/ShowItems";
import { MainPageShowItemsStyled } from "@/features/MainPage/ShowItems/styled";
const SearchPage = () => {
  // detail page로 라우팅
  // const handleSearch = (id: number) => {
  //   // URL의 쿼리 파라미터로 필요한 데이터 전달
  //   router.push({
  //     pathname: "/details",
  //     query: {
  //       clickCheckIn: checkInDate || "",
  //       clickCheckOut: checkOutDate || "",
  //       clickPeopleNum: peopleNum || "",
  //       clickAdultCount: adultCount || "",
  //       clickChildCount: childCount || "",
  //       clickInfantNum: infantCount || "",
  //       clickPetCount: petCount || "",
  //       id: id,
  //     },
  //   });
  // };

  const router = useRouter();
  const {
    place,
    checkInDate,
    checkOutDate,
    peopleNum,
    adultCount,
    childCount,
    infantCount,
    petCount,
  } = router.query;

  const allData = [...seoul, ...busan, ...jeju, ...jeonju];
  const filteredData = allData.filter(
    (item) => item.region === place && Number(peopleNum) <= item.peopleLimit
  );

  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyARzbftw25anRK82_C4ynoH7_T8xX-BRyY",
  });
  const [center, setCenter] = useState<any>();
  const [map, setMap] = React.useState(null);
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null); // hover된 marker id 저장
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

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

  useEffect(() => {
    if (selectedMarker) {
      setCenter(selectedMarker.position);
    }
  }, [selectedMarker]);

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
                    <ShowItems data={x} />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="noResult-box">
                  검색 조건에 맞는 숙소가 없습니다.
                  <br />
                  인원수를 줄이거나 다른 지역으로 검색해보세요!
                </div>
              </>
            )}
          </SearchPageShowRoomStyled>
        </div>
      </div>
    </SearchStyled>
  );
};

export default SearchPage;
