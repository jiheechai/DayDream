import { DatePicker } from "antd";
import { Dayjs } from "dayjs";
import { useEffect } from "react";
import { DateStyledComponent } from "./styled";
const { RangePicker } = DatePicker;

interface dataProps {
  setDates: any;
  setCheckInDate: any;
  setCheckOutDate: any;
  rangePickerRef: any;
  dates: any;
  setSelectedDays: any;
  defaultRangeValue: any;
}

const Date = ({
  setDates,
  setCheckInDate,
  setCheckOutDate,
  rangePickerRef,
  dates,
  setSelectedDays,
  defaultRangeValue,
}: dataProps) => {
  const moment = require("moment");
  // 날짜 변경 시 호출되는 함수
  const onRangeChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    setDates(dates);
    console.log(dates);

    if (dates && dates[0] && !dates[1]) {
      // 체크인 날짜만 선택되었을 때
      setCheckInDate(dates[0].format("YYYY-MM-DD"));
    } else if (dates && dates[0] && dates[1]) {
      // 체크인, 체크아웃 날짜가 선택되었을 때
      setCheckInDate(dates[0].format("YYYY-MM-DD"));
      setCheckOutDate(dates[1].format("YYYY-MM-DD"));

      // 날짜 차이를 계산하여 선택된 일 수를 저장
      const diffDays = dates[1].diff(dates[0], "day"); // dayjs의 diff 함수를 사용해 일수 계산
      setSelectedDays(diffDays);
    } else {
      // 체크인, 체크아웃 모두 선택되지 않았을 때
      setCheckInDate("");
      setCheckOutDate("");
      setSelectedDays(0); // 선택된 일 수 초기화
    }
  };
  //detailpage 위한것.
  useEffect(() => {
    if (defaultRangeValue[0] != null && defaultRangeValue[1] != null) {
      setDates(defaultRangeValue);
      setCheckInDate(defaultRangeValue[0]?.format("YYYY-MM-DD"));
      setCheckOutDate(defaultRangeValue[1]?.format("YYYY-MM-DD"));
      const diffDays = defaultRangeValue[1]?.diff(defaultRangeValue[0], "day");
      setSelectedDays(diffDays);
    }
  }, [
    defaultRangeValue,
    setDates,
    setCheckInDate,
    setCheckOutDate,
    setSelectedDays,
  ]);

  return (
    <DateStyledComponent>
      <div className="wrapBox">
        <div className="checkInOutBox">
          <div className="checkIn">체크인</div>
          <div className="checkOut">체크아웃</div>
        </div>
        <div>
          <RangePicker
            className="selectDate"
            ref={rangePickerRef} // RangePicker의 ref 추가
            onChange={onRangeChange} // 날짜 변경 시 호출
            value={dates}
            disabledDate={(current) =>
              current.isBefore(moment().subtract(1, "day"))
            }
          />
        </div>
      </div>
    </DateStyledComponent>
  );
};

export default Date;
