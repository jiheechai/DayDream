import Place from "./Place/place";
import Date from "./Date/date";
import People from "./People/people";
import { Dayjs } from "dayjs";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavStyled } from "./styled";
import { useState } from "react";
interface dataProps {
  place: any;
  setPlace: any;
  autoComplete: string[];
  setAutoComplete: any;
  dates: [Dayjs | null, Dayjs | null];
  setDates: any;
  setCheckInDate: any;
  setCheckOutDate: any;
  setSelectedDays: any;
  rangePickerRef: any;
  defaultRangeValue: any;
  peopleNum: number;
  adultCount: number;
  childCount: number;
  infantCount: number;
  petCount: number;
  decrementCount: any;
  incrementCount: any;
  handleSearch: any;
}
const Nav = ({
  place,
  setPlace,
  autoComplete,
  setAutoComplete,
  dates,
  setDates,
  setCheckInDate,
  setCheckOutDate,
  setSelectedDays,
  rangePickerRef,
  defaultRangeValue,
  peopleNum,
  adultCount,
  childCount,
  infantCount,
  petCount,
  decrementCount,
  incrementCount,
  handleSearch,
}: dataProps) => {
  const [isGuestSelectorVisible, setIsGuestSelectorVisible] = useState(false);
  return (
    <NavStyled>
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
        <div onClick={handleSearch}>
          <Button className="searchButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </div>
      </div>
    </NavStyled>
  );
};
export default Nav;
