import DateComponent from "@/components/DateComponent";
import PeopleComponent from "@/components/PeopleComponent";
import { Button, Modal } from "antd";
import { RightItemStyledComponent } from "./styled";
import React, { useState } from "react";

interface dataProps {
  select: any;
  setDates: (dates: any) => void;
  setCheckInDate: any;
  setCheckOutDate: any;
  rangePickerRef: React.RefObject<HTMLInputElement>;
  dates: any;
  setSelectedDays: (days: number) => void;
  defaultRangeValue: any;
  setIsGuestSelectorVisible: (visible: boolean) => void;
  isGuestSelectorVisible: boolean;
  peopleNum: number;
  selectedDays: number;
  infantCount: number;
  petCount: number;
  adultCount: number;
  decrementCount: (type: string) => void;
  incrementCount: (type: string) => void;
  childCount: number;
  calculateOnedayPrice: () => number;
  calculateTotalPrice: () => number;
}
const RightItem = ({
  select,
  setDates,
  setCheckInDate,
  setCheckOutDate,
  rangePickerRef,
  dates,
  setSelectedDays,
  defaultRangeValue,
  setIsGuestSelectorVisible,
  isGuestSelectorVisible,
  peopleNum,
  selectedDays,
  infantCount,
  petCount,
  adultCount,
  decrementCount,
  incrementCount,
  childCount,
  calculateOnedayPrice,
  calculateTotalPrice,
}: dataProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <RightItemStyledComponent>
      <div className="right-container">
        <div className="price-container">
          <div>₩{select.price[0].oneday.toLocaleString()} </div>
          <div className="per">/박</div>
        </div>
        <div>
          <div className="dateBox">
            <DateComponent
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
            <PeopleComponent
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
          <Button className="reservation" onClick={showModal}>
            예약하기
          </Button>
          <Modal
            title="준비중"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>준비중인 기능입니다. ^^</p>
          </Modal>

          <div className="info">예약 확정 전에는 요금이 청구되지 않습니다.</div>
          <div className="price-box">
            <div className="oneday">
              <span>
                ₩{select.price[0].oneday.toLocaleString()} x {selectedDays}박
              </span>
              <span>₩{calculateOnedayPrice().toLocaleString()}</span>
            </div>

            <div className="commission">
              <span>백일몽 서비스 이용 수수료</span>
              <span>₩{select.price[1].commission.toLocaleString()}</span>
            </div>

            <hr />
            <div className="total">
              <span>총 합계</span>
              <span>₩{calculateTotalPrice().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </RightItemStyledComponent>
  );
};
export default RightItem;
