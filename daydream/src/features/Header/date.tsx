import { DatePicker } from "antd";
import { Dayjs } from "dayjs";
const { RangePicker } = DatePicker;
const Date = (props: any) => {
  //체크인, 체크아웃
  const { setDates, setCheckInDate, setCheckOutDate, rangePickerRef, dates } =
    props;
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
    <div>
      <div className="wrapBox">
        <div className="checkInOutBox">
          <div className="checkIn">체크인</div>
          <div className="checkOut">체크아웃</div>
        </div>

        <div>
          <RangePicker
            className="selectDate"
            ref={rangePickerRef} // RangePicker의 ref 추가
            onCalendarChange={onRangeChange}
            value={dates}
          />
        </div>
      </div>
    </div>
  );
};
export default Date;
