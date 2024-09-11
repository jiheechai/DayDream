import { seoul, busan, jeju, jeonju } from "@/utill/data";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import { DetailStyledComponent } from "./styled";
import { useJsApiLoader } from "@react-google-maps/api";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import Googlemap from "./Googlemap";
import ShowImages from "../DetailPage/ShowImages";
import LeftItem from "../DetailPage/LeftItem";
import RightItem from "./RightItem";
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
  //select는 SearchPage에서 클릭한 item
  useEffect(() => {
    const filter = allData.filter((x) => x.id === Number(id));
    setSelect(filter[0]);
  }, [id]);
  // SearchPage에서 클릭한 값들을 상태에 업데이트하는 useEffect
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

  // 좌측 내용 컴포넌트
  const [isExpanded, setIsExpanded] = useState(false);
  const describeRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  // 더 보기 버튼 클릭이벤트 함수.
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  // 스크롤 이동 함수 (더보기 클릭)
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
  // 스크롤 이동 함수 (간략히 보기 클릭)
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

  // 우측 내용 컴포넌트
  // date 컴포넌트
  const [selectedDays, setSelectedDays] = useState<number>(0);
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);
  const rangePickerRef = useRef<any>(null); // RangePicker의 ref 생성
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);
  //people 컴포넌트.
  const [isGuestSelectorVisible, setIsGuestSelectorVisible] = useState(false);
  const [peopleNum, setPeopleNum] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [petCount, setPetCount] = useState(0);
  const [defaultRangeValue, setDefaultRangeValue] = useState<any>([null, null]);
  // people 인원 조절 핸들러
  const incrementCount = (type: string) => {
    if (type === "adult" && peopleNum < select.peopleLimit) {
      setPeopleNum(peopleNum + 1);
      setAdultCount(adultCount + 1);
    } else if (type === "child" && peopleNum < select.peopleLimit) {
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
  //금액 계산 함수
  const calculateOnedayPrice = () => {
    if (!select || selectedDays === 0) return 0;
    const totalRoomPrice = select.price[0].oneday * selectedDays;
    return totalRoomPrice;
  };
  const calculateTotalPrice = () => {
    if (!select || selectedDays === 0) return 0;
    const totalRoomPrice = select.price[0].oneday * selectedDays;
    const serviceFee = select.price[1].commission;
    return totalRoomPrice + serviceFee;
  };

  //구글 맵
  const [map, setMap] = React.useState(null);
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
  const onLoad = useCallback((mapInstance: any) => {
    setMap(mapInstance);
  }, []);
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <DetailStyledComponent>
      {/* <div className="wrap-container"> */}
      {select ? (
        <>
          <div className="wrap-container">
            {/* 타이틀 */}
            <div className="name-container">{select.name}</div>

            {/* 이미지 컴포넌트 */}
            <ShowImages select={select} />

            {/*내용 */}
            <div className="middle-text-container">
              {/* 왼쪽 내용 컴포넌트 */}
              <LeftItem
                select={select}
                describeRef={describeRef}
                isExpanded={isExpanded}
                buttonRef={buttonRef}
                toggleExpand={toggleExpand}
              />

              {/* 오른쪽 내용 컴포넌트 */}
              <RightItem
                select={select}
                setDates={setDates}
                setCheckInDate={setCheckInDate}
                setCheckOutDate={setCheckOutDate}
                rangePickerRef={rangePickerRef}
                dates={dates}
                setSelectedDays={setSelectedDays}
                defaultRangeValue={defaultRangeValue}
                setIsGuestSelectorVisible={setIsGuestSelectorVisible}
                isGuestSelectorVisible={isGuestSelectorVisible}
                peopleNum={peopleNum}
                selectedDays={selectedDays}
                infantCount={infantCount}
                petCount={petCount}
                adultCount={adultCount}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                childCount={childCount}
                calculateOnedayPrice={calculateOnedayPrice}
                calculateTotalPrice={calculateTotalPrice}
              />
            </div>

            {/* 구글맵 컴포넌트 */}
            <div className="map-box">
              <Googlemap
                isLoaded={isLoaded}
                onLoad={onLoad}
                containerStyle={containerStyle}
                select={select}
                onUnmount={onUnmount}
                myStyles={myStyles}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {/* </div> */}
    </DetailStyledComponent>
  );
};
export default DetailPage;
