import { HeaderStyled } from "./styled";
import { useRouter } from "next/router";
import { Input, DatePicker, Button } from "antd";
import { useState, useRef } from "react";
import dayjs, { Dayjs } from "dayjs";
const { RangePicker } = DatePicker;
const Header = () => {
  const router = useRouter();
  const path = router.asPath;
  // console.log(path);
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);
  const rangePickerRef = useRef<any>(null); // RangePicker의 ref 생성
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);

  //페이지 라우팅
  const routingPage = (type: string) => {
    // const number = type === "Shop1" ? 1 : type === "Shop2" ? 2 : 3;
    // if (type === "Home") {
    //   router.push("/");
    // } else {
    //   router.push(`/shop/${number}`);
    // }
  };

  const onRangeChange = (dates: [Dayjs | null, Dayjs | null]) => {
    setDates(dates);

    if (dates[0] && !dates[1]) {
      // 체크인 날짜만 선택되었을때
      setCheckInDate(dates[0].format("YYYY-MM-DD"));
    } else if (dates[0] && dates[1]) {
      //체크인, 체크아웃 날짜가 선택되었을때
      setCheckInDate(dates[0].format("YYYY-MM-DD"));
      setCheckOutDate(dates[1].format("YYYY-MM-DD"));
    } else {
      //체크인, 체크아웃 모두 선택되지 않았을 때.
      setCheckInDate("");
      setCheckOutDate("");
    }
  };

  return (
    <HeaderStyled>
      <div className="topBox">
        {/* 왼쪽 상단 로고 */}
        <div className="logoBox">로고</div>
        {/* 우측 상단 로그인, 회원가입 */}
        <div className="loginBox">로그인</div>
      </div>
      <div className={`nav ${path === "/login" ? "noneHead" : ""}`}>
        <div className="navBox">
          <div
            onClick={() => {
              //   routingPage("Home");
            }}
          >
            여행지
            <Input />
          </div>
          <div>
            <div>체크인 : {checkInDate}</div>
            <div>체크아웃 : {checkOutDate}</div>
            <div>
              <RangePicker
                className="selectDate"
                ref={rangePickerRef} // RangePicker의 ref 추가
                onCalendarChange={onRangeChange}
                value={dates}
              />
            </div>
          </div>
          <div
            onClick={() => {
              //   routingPage("Shop3");
            }}
          >
            여행자
            <Input />
            <div
              onClick={() => {
                //   routingPage("Search");
              }}
            >
              <Button>검색</Button>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};
export default Header;
