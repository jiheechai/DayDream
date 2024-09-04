import React, { useEffect } from "react";
import { seoul, busan, jeju, jeonju } from "@/utill/data";
import ShowRoom from "@/components/ShowRoom";
import { MainPageShowRoomStyled } from "@/components/ShowRoom/styled";
import Script from "next/script";
import { useRouter } from "next/router";

declare global {
  interface Window {
    kakao: any;
  }
}

const SearchPage = () => {
  const router = useRouter();
  const { place, checkInDate, checkOutDate, peopleNum } = router.query;
  const allData = [...seoul, ...busan, ...jeju, ...jeonju];

  // 필터링 조건에 맞는 데이터 추출
  const filteredData = allData.filter(
    (item) => item.region === place && Number(peopleNum) <= item.peopleLimit
  );

  //카카오 지도 api
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(37.564214, 127.001699),
          level: 8,
        };
        var map = new window.kakao.maps.Map(container, options);
        console.log(map);
      });
    };
    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);
  return (
    <div>
      <h1>Search Results</h1>
      <p>Place: {place}</p>
      <p>Check-in Date: {checkInDate}</p>
      <p>Check-out Date: {checkOutDate}</p>
      <p>Number of People: {peopleNum}</p>

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
      <div id="map" style={{ width: 500, height: 400 }}></div>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=34234234234234&autoload=false"
      />
    </div>
  );
};

export default SearchPage;
