import { seoul, busan, jeju, jeonju } from "@/utill/data";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import { DetailStyledComponent } from "./styled";
import { Button } from "antd";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import Date from "@/features/Header/date";
import People from "@/features/Header/people";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";

const DetailPage = () => {
  const router = useRouter();
  const {
    clickCheckIn,
    clickCheckOut,
    clickPeopleNum,
    clickAdultCount,
    clickChildCount,
    clickInfantNum,
    clickPetCount,
    id,
  } = router.query;
  const allData = [...seoul, ...busan, ...jeju, ...jeonju];
  const [select, setSelect] = useState<any>();
  const [selectedDays, setSelectedDays] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const describeRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  //오른쪽 예약박스 : date, people
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);
  const rangePickerRef = useRef<any>(null); // RangePicker의 ref 생성
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);
  //people 컴포넌트. 인원설정
  const [isGuestSelectorVisible, setIsGuestSelectorVisible] = useState(false);
  const [peopleNum, setPeopleNum] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [petCount, setPetCount] = useState(0);
  const [defaultRangeValue, setDefaultRangeValue] = useState<any>([null, null]);

  useEffect(() => {
    const filter = allData.filter((x) => x.id === Number(id));
    setSelect(filter[0]);
  }, [id]);
  // router.query 값들을 상태에 업데이트하는 useEffect
  useEffect(() => {
    // 날짜 업데이트
    if (clickCheckIn && clickCheckOut) {
      setCheckInDate(clickCheckIn as string);
      setCheckOutDate(clickCheckOut as string);
      setDefaultRangeValue([
        dayjs(clickCheckIn as string, "YYYY-MM-DD"),
        dayjs(clickCheckOut as string, "YYYY-MM-DD"),
      ]);
    }
    // 인원 정보 업데이트
    if (clickPeopleNum) setPeopleNum(Number(clickPeopleNum));
    if (clickAdultCount) setAdultCount(Number(clickAdultCount));
    if (clickChildCount) setChildCount(Number(clickChildCount));
    if (clickInfantNum) setInfantCount(Number(clickInfantNum));
    if (clickPetCount) setPetCount(Number(clickPetCount));
  }, [
    clickCheckIn,
    clickCheckOut,
    clickPeopleNum,
    clickAdultCount,
    clickChildCount,
    clickInfantNum,
    clickPetCount,
  ]);

  // 더 보기 버튼 클릭.
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  // 스크롤 이동 함수(더보기를 눌렀을 때)
  const scrollToDescribe = () => {
    if (describeRef.current) {
      const describeElement = describeRef.current;
      const offsetTop =
        describeElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  // 스크롤 이동 함수 (간략히 보기를 눌렀을 때)
  const scrollToBottomOfButton = () => {
    if (buttonRef.current) {
      const buttonElement = buttonRef.current;
      const offsetBottom =
        buttonElement.getBoundingClientRect().bottom + window.pageYOffset;
      window.scrollTo({
        top: offsetBottom - window.innerHeight,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    if (isExpanded) {
      scrollToDescribe(); //더보기일때 스크롤
    } else if (!isExpanded) {
      scrollToBottomOfButton(); // 간략히 보기일 때 스크롤
    }
  }, [isExpanded]);

  //구글 맵
  const [map, setMap] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyARzbftw25anRK82_C4ynoH7_T8xX-BRyY",
  });
  const containerStyle = {
    width: "800px",
    height: "500px",
  };
  const onLoad = useCallback((mapInstance: any) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);
  const myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

  // people 인원 조절 핸들러
  const incrementCount = (type: string) => {
    if (type === "adult") {
      setPeopleNum(peopleNum + 1);
      setAdultCount(adultCount + 1);
    } else if (type === "child") {
      setPeopleNum(peopleNum + 1);
      setChildCount(childCount + 1);
    } else if (type === "infant") setInfantCount(infantCount + 1);
    else if (type === "pet") setPetCount(petCount + 1);
  };
  const decrementCount = (type: string) => {
    if (type === "adult" && adultCount > 1) {
      setAdultCount(adultCount - 1);
      setPeopleNum(peopleNum - 1);
    } else if (type === "child" && childCount > 0) {
      setChildCount(childCount - 1);
      setPeopleNum(peopleNum - 1);
    } else if (type === "infant" && infantCount > 0)
      setInfantCount(infantCount - 1);
    else if (type === "pet" && petCount > 0) setPetCount(petCount - 1);
  };

  //금액 계산
  const calculateOnedayPrice = () => {
    if (!select || selectedDays === 0) return 0;
    const totalRoomPrice = select.price[0].oneday * selectedDays;
    return totalRoomPrice;
  };
  const calculateTotalPrice = () => {
    if (!select || selectedDays === 0) return 0;
    const totalRoomPrice = select.price[0].oneday * selectedDays;
    const serviceFee = select.price[1].commission;
    // 총합 계산
    return totalRoomPrice + serviceFee;
  };

  return (
    <DetailStyledComponent>
      <div className="wrap-container">
        {select ? (
          <>
            <div className="item-container">
              <div className="name-container">{select.name}</div>
              <div className="image-container">
                <img className="bigImage" src={select.src[0].src} alt="image" />
                <div className="smallImage-container">
                  <img
                    className="smallImage"
                    src={select.src[1].src}
                    alt="image"
                  />
                  <img
                    className="smallImage"
                    src={select.src[2].src}
                    alt="image"
                  />
                  <img
                    className="smallImage"
                    src={select.src[3].src}
                    alt="image"
                  />
                  <img
                    className="smallImage"
                    src={select.src[4].src}
                    alt="image"
                  />
                </div>
              </div>

              {/*내용 */}
              <div className="middle-text-container">
                {/* 왼쪽 */}
                <div className="left-container">
                  <div className="region-container">
                    {select.region}, {select.address}
                  </div>
                  <div className="peopleLimit-container">
                    최대인원 {select.peopleLimit}명
                  </div>
                  <div className="hash-container-box">
                    {select.hash ? (
                      <div className="hash-container">
                        {select.hash.map((a: any, b: number) => {
                          return (
                            <div className="hash" key={b}>
                              #{a.tag}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  {/* 설명 */}
                  <div
                    ref={describeRef}
                    className={`describe-container ${
                      isExpanded ? "expanded" : ""
                    }`}
                  >
                    <div className="describeTitle">숙소 소개 </div>
                    {select.describe}
                  </div>
                  <Button ref={buttonRef} onClick={toggleExpand}>
                    {isExpanded ? "간략히 보기" : "더 보기"}
                  </Button>
                </div>

                {/* 오른쪽 */}
                <div className="right-container">
                  <div className="price-container">
                    <div>₩{select.price[0].oneday.toLocaleString()} </div>
                    <div className="per">/박</div>
                  </div>
                  <div>
                    <div className="dateBox">
                      <Date
                        setDates={setDates}
                        setCheckInDate={setCheckInDate}
                        setCheckOutDate={setCheckOutDate}
                        rangePickerRef={rangePickerRef}
                        dates={dates}
                        setSelectedDays={setSelectedDays}
                        defaultRangeValue={defaultRangeValue}
                      />
                    </div>
                    <div className="peopleBox">
                      <People
                        setIsGuestSelectorVisible={setIsGuestSelectorVisible}
                        isGuestSelectorVisible={isGuestSelectorVisible}
                        peopleNum={peopleNum}
                        infantCount={infantCount}
                        petCount={petCount}
                        adultCount={adultCount}
                        decrementCount={decrementCount}
                        incrementCount={incrementCount}
                        childCount={childCount}
                      />
                    </div>
                    <Button className="reservation">예약하기</Button>
                    <div className="info">
                      예약 확정 전에는 요금이 청구되지 않습니다.
                    </div>
                    <div className="price-box">
                      <div className="oneday">
                        <span>
                          ₩{select.price[0].oneday.toLocaleString()} x{" "}
                          {selectedDays}박
                        </span>
                        <span>₩{calculateOnedayPrice().toLocaleString()}</span>
                      </div>

                      <div className="commission">
                        <span>백일몽 서비스 이용 수수료</span>
                        <span>
                          ₩{select.price[1].commission.toLocaleString()}
                        </span>
                      </div>

                      <hr />
                      <div className="total">
                        <span>총 합계</span>
                        <span>₩{calculateTotalPrice().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 구글맵 */}
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
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </DetailStyledComponent>
  );
};
export default DetailPage;
