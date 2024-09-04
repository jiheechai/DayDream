import { HeaderStyled } from "./styled";
import { useRouter } from "next/router";
import { Input, Button } from "antd";
import React, { useState, useRef, ChangeEvent } from "react";
import { Dayjs } from "dayjs";
import Place from "./place";
import Date from "./date";
import People from "./people";
const Header = () => {
  const router = useRouter();
  const path = router.asPath;
  //place 컴포넌트. 여행지
  const [place, setPlace] = useState("");
  const [autoComplete, setAutoComplete] = useState<string[]>([]);

  //date 컴포넌트. 체크인, 체크아웃 날짜
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);
  const rangePickerRef = useRef<any>(null); // RangePicker의 ref 생성
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);

  //people 컴포넌트. 인원설정
  const [isGuestSelectorVisible, setIsGuestSelectorVisible] = useState(false);
  const [peopleNum, setPeopleNum] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
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
    if (type === "adult" && adultCount > 0) {
      setAdultCount(adultCount - 1);
      setPeopleNum(peopleNum - 1);
    } else if (type === "child" && childCount > 0) {
      setChildCount(childCount - 1);
      setPeopleNum(peopleNum - 1);
    } else if (type === "infant" && infantCount > 0)
      setInfantCount(infantCount - 1);
    else if (type === "pet" && petCount > 0) setPetCount(petCount - 1);
  };

  // 검색 버튼 클릭 핸들러
  const handleSearch = () => {
    // URL의 쿼리 파라미터로 필요한 데이터 전달
    router.push({
      pathname: "/search",
      query: {
        place: place || "", // 여행지
        checkInDate: checkInDate || "", // 체크인 날짜
        checkOutDate: checkOutDate || "", // 체크아웃 날짜
        peopleNum: peopleNum.toString(), // 인원 수 (문자열로 변환)
      },
    });
  };

  // 상태 초기화 핸들러
  const resetStates = () => {
    setPlace(""); // 여행지 초기화
    setAutoComplete([]); // 자동완성 초기화
    setDates([null, null]); // 날짜 초기화
    setCheckInDate(null); // 체크인 날짜 초기화
    setCheckOutDate(null); // 체크아웃 날짜 초기화
    setPeopleNum(0); // 전체 인원 초기화
    setAdultCount(0); // 성인 수 초기화
    setChildCount(0); // 아동 수 초기화
    setInfantCount(0); // 유아 수 초기화
    setPetCount(0); // 반려동물 수 초기화
  };

  return (
    <HeaderStyled>
      <div className="topBox">
        <div
          className="logoBox"
          onClick={() => {
            resetStates(); // 상태 초기화
            router.push("/"); // 메인 페이지로 이동
          }}
        >
          백일몽
        </div>
        <div className="loginBox">로그인</div>
      </div>
      <div className={`nav ${path === "/login" ? "noneHead" : ""}`}>
        <div className="navBox">
          <div className="placeBox">
            <Place
              setPlace={setPlace}
              setAutoComplete={setAutoComplete}
              place={place}
              autoComplete={autoComplete}
            />
          </div>
          <div className="dateBox">
            <Date
              setDates={setDates}
              setCheckInDate={setCheckInDate}
              setCheckOutDate={setCheckOutDate}
              rangePickerRef={rangePickerRef}
              dates={dates}
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
            <div onClick={handleSearch}>
              <Button className="searchButton">검색</Button>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};
export default Header;
