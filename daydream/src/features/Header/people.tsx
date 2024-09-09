import { Button, Input } from "antd";
import React, { useState } from "react";
interface dataProps {
  setIsGuestSelectorVisible: any;
  isGuestSelectorVisible: any;
  peopleNum: any;
  infantCount: any;
  petCount: any;
  adultCount: any;
  decrementCount: any;
  incrementCount: any;
  childCount: any;
}
const People = ({
  setIsGuestSelectorVisible,
  isGuestSelectorVisible,
  peopleNum,
  infantCount,
  petCount,
  adultCount,
  decrementCount,
  incrementCount,
  childCount,
}: dataProps) => {
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
    <>
      <div className="people">여행자</div>
      <Input
        defaultValue="게스트 추가"
        className="peoplenum"
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
    </>
  );
};
export default People;
