import Place from "../place";

import Date from "../date";
import People from "../people";
import { MNavStyled } from "./styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Dayjs } from "dayjs";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  isGuestSelectorVisible: boolean;
  setIsGuestSelectorVisible: any;
  peopleNum: number;
  adultCount: number;
  childCount: number;
  infantCount: number;
  petCount: number;
  decrementCount: any;
  incrementCount: any;
  handleSearch: any;
  open: boolean;
  isOpen: any;
}

const MNav = ({
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
  isGuestSelectorVisible,
  setIsGuestSelectorVisible,
  peopleNum,
  adultCount,
  childCount,
  infantCount,
  petCount,
  decrementCount,
  incrementCount,
  handleSearch,
  open,
  isOpen,
}: dataProps) => {
  return (
    <MNavStyled>
      <div className={`MnavBox ${open ? "open" : ""}`}>
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
        <div className="btnBox" onClick={handleSearch}>
          <Button className="searchButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </div>
      </div>
      <div
        onClick={() => {
          isOpen(false);
        }}
        className={`backGround ${open ? "backOpen" : ""}`}
      ></div>
    </MNavStyled>
  );
};
export default MNav;
