import { HeaderStyled } from "./styled";
import { useRouter } from "next/router";
import { Modal } from "antd";
import React, { useState, useRef } from "react";
import { Dayjs } from "dayjs";

import imageLogo from "@/assets/image/imageLogo.jpg";
import Nav from "./Nav";
import MNav from "./MNav";
const Header = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const showModal = () => {
    setLoginModalOpen(true);
  };
  const handleOk = () => {
    setLoginModalOpen(false);
  };
  const handleCancel = () => {
    setLoginModalOpen(false);
  };

  const router = useRouter();

  //place 컴포넌트.
  const [place, setPlace] = useState("");
  const [autoComplete, setAutoComplete] = useState<string[]>([]);

  //date 컴포넌트.
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);
  const rangePickerRef = useRef<any>(null); // RangePicker의 ref 생성
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);
  const [selectedDays, setSelectedDays] = useState<number>(0);

  //people 컴포넌트.

  const [peopleNum, setPeopleNum] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [petCount, setPetCount] = useState(0);
  // 인원 조절 핸들러
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
  const defaultRangeValue = [null, null];

  // pc 헤더 검색 버튼 클릭 핸들러
  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        place: place || "",
        checkInDate: checkInDate || "",
        checkOutDate: checkOutDate || "",
        peopleNum: peopleNum || "",
        adultCount: adultCount || "",
        childCount: childCount || "",
        infantCount: infantCount || "",
        petCount: petCount || "",
      },
    });
  };
  // 모바일 헤더 검색 버튼 클릭 핸들러
  const MhandleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        place: place || "",
        checkInDate: checkInDate || "",
        checkOutDate: checkOutDate || "",
        peopleNum: peopleNum || "",
        adultCount: adultCount || "",
        childCount: childCount || "",
        infantCount: infantCount || "",
        petCount: petCount || "",
      },
    });
    setIsMoved(false);
  };

  // 상태 초기화 핸들러
  const resetStates = () => {
    setPlace("");
    setAutoComplete([]);
    setDates([null, null]);
    setCheckInDate(null);
    setCheckOutDate(null);
    setPeopleNum(1);
    setAdultCount(1);
    setChildCount(0);
    setInfantCount(0);
    setPetCount(0);
  };

  // 모바일 navbar 핸들러
  const [isMoved, setIsMoved] = useState(false);
  const toggleMove = () => {
    setIsMoved(!isMoved);
  };
  // console.log("장소:", place);
  // console.log("날짜:", dates);

  return (
    <>
      <HeaderStyled>
        <div className="wrapBox">
          <div className="topBox">
            {/* 로고 */}
            <div
              className="logoBox"
              onClick={() => {
                // resetStates(); // 상태 초기화
                // router.push("/");
                // 메인 페이지로 리디렉션하면서 페이지 새로고침
                window.location.href = "/";
              }}
            >
              <img src={imageLogo.src} alt="로고" />
              <div className="titleBox">백일몽</div>
            </div>
            {/* 모바일 div */}
            <div className="mobileDivBox" onClick={toggleMove}>
              {place == "" ? (
                <div className="question">어디로 여행가세요?</div>
              ) : (
                <>
                  {place && <div>{place} </div>}
                  {dates[0] && dates[1] && (
                    <div>
                      {dates[0].format("MM.DD")} ~ {dates[1].format("MM.DD")}
                    </div>
                  )}
                  {peopleNum && <div> 게스트 {peopleNum}명</div>}
                </>
              )}
            </div>
            {/* 로그인 */}
            <div className="loginBox" onClick={showModal}>
              로그인
            </div>
            <Modal
              title="준비중..."
              open={loginModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>아직 개발중인 기능입니다 *^___^*</p>
            </Modal>
          </div>

          {/* pc navbar 컴포넌트 */}
          {/* <div className="desktopNavBox"> */}
          <Nav
            place={place}
            setPlace={setPlace}
            autoComplete={autoComplete}
            setAutoComplete={setAutoComplete}
            dates={dates}
            setDates={setDates}
            setCheckInDate={setCheckInDate}
            setCheckOutDate={setCheckOutDate}
            setSelectedDays={setSelectedDays}
            rangePickerRef={rangePickerRef}
            defaultRangeValue={defaultRangeValue}
            peopleNum={peopleNum}
            adultCount={adultCount}
            childCount={childCount}
            infantCount={infantCount}
            petCount={petCount}
            decrementCount={decrementCount}
            incrementCount={incrementCount}
            handleSearch={handleSearch}
          />
        </div>
        {/* </div> */}
      </HeaderStyled>

      {/* filter */}

      {/* mobile navbar 컴포넌트 */}
      <MNav
        place={place}
        setPlace={setPlace}
        autoComplete={autoComplete}
        setAutoComplete={setAutoComplete}
        dates={dates}
        setDates={setDates}
        setCheckInDate={setCheckInDate}
        setCheckOutDate={setCheckOutDate}
        setSelectedDays={setSelectedDays}
        rangePickerRef={rangePickerRef}
        defaultRangeValue={defaultRangeValue}
        peopleNum={peopleNum}
        adultCount={adultCount}
        childCount={childCount}
        infantCount={infantCount}
        petCount={petCount}
        decrementCount={decrementCount}
        incrementCount={incrementCount}
        open={isMoved}
        isOpen={setIsMoved}
        MhandleSearch={MhandleSearch}
      />
    </>
  );
};
export default Header;
