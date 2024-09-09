import Place from "./place";
import Date from "./date";
import People from "./people";
import { Dayjs } from "dayjs";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
}
const Navbar = ({
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
}: dataProps) => {
  return (
    <>
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
    </>
  );
};
export default Navbar;
