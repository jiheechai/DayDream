import { Button, Input } from "antd";
import React, { useState } from "react";
const People = (props: any) => {
  const {
    setIsGuestSelectorVisible,
    isGuestSelectorVisible,
    peopleNum,
    infantCount,
    petCount,
    adultCount,
    decrementCount,
    incrementCount,
    childCount,
  } = props;
  //여행자
  // const [peopleNum, setPeopleNum] = useState(0);
  // const [isGuestSelectorVisible, setIsGuestSelectorVisible] = useState(false);
  // const [adultCount, setAdultCount] = useState(0);
  // const [childCount, setChildCount] = useState(0);
  // const [infantCount, setInfantCount] = useState(0);
  // const [petCount, setPetCount] = useState(0);
  // // 인원 조절 핸들러
  // const incrementCount = (type: string) => {
  //   if (type === "adult") {
  //     setPeopleNum(peopleNum + 1);
  //     setAdultCount(adultCount + 1);
  //   } else if (type === "child") {
  //     setPeopleNum(peopleNum + 1);
  //     setChildCount(childCount + 1);
  //   } else if (type === "infant") setInfantCount(infantCount + 1);
  //   else if (type === "pet") setPetCount(petCount + 1);
  // };
  // const decrementCount = (type: string) => {
  //   if (type === "adult" && adultCount > 0) {
  //     setAdultCount(adultCount - 1);
  //     setPeopleNum(peopleNum - 1);
  //   } else if (type === "child" && childCount > 0) {
  //     setChildCount(childCount - 1);
  //     setPeopleNum(peopleNum - 1);
  //   } else if (type === "infant" && infantCount > 0)
  //     setInfantCount(infantCount - 1);
  //   else if (type === "pet" && petCount > 0) setPetCount(petCount - 1);
  // };

  // 팝업 열기/닫기 핸들러
  const toggleGuestSelector = () => {
    setIsGuestSelectorVisible(!isGuestSelectorVisible);
  };
  // 팝업 외부 클릭 시 닫기
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      !target.closest(".selectPeoplenumBox") &&
      !target.closest(".peoplenum")
    ) {
      setIsGuestSelectorVisible(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      여행자
      <Input
        className="peoplenum"
        placeholder="여행자 추가"
        onClick={toggleGuestSelector}
        value={`게스트${peopleNum}, 유아 ${infantCount}, 반려동물 ${petCount}`}
        readOnly
      />
      {/* 인원 조절 팝업  */}
      {isGuestSelectorVisible && (
        <div className="selectPeoplenumBox">
          <div className="guestRow">
            성인 (13세 이상)
            <Button onClick={() => decrementCount("adult")}>-</Button>
            {adultCount}
            <Button onClick={() => incrementCount("adult")}>+</Button>
          </div>
          <div className="guestRow">
            어린이 (2~12세)
            <Button onClick={() => decrementCount("child")}>-</Button>
            {childCount}
            <Button onClick={() => incrementCount("child")}>+</Button>
          </div>
          <div className="guestRow">
            유아 (2세 미만)
            <Button onClick={() => decrementCount("infant")}>-</Button>
            {infantCount}
            <Button onClick={() => incrementCount("infant")}>+</Button>
          </div>
          <div className="guestRow">
            반려동물
            <Button onClick={() => decrementCount("pet")}>-</Button>
            {petCount}
            <Button onClick={() => incrementCount("pet")}>+</Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default People;
