import { Button, Modal } from "antd";
import { LeftItemStyledComponent } from "./styled";
import React, { useState } from "react";
interface dataProps {
  select: any;
  describeRef: any;
  isExpanded: any;
  buttonRef: any;
  toggleExpand: any;
}
const LeftItem = ({
  select,
  describeRef,
  isExpanded,
  buttonRef,
  toggleExpand,
}: dataProps) => {
  const [open, setOpen] = useState(false);

  return (
    <LeftItemStyledComponent>
      <div className="left-container">
        <div className="region-container">
          {select.region}, {select.address}
        </div>
        <div className="peopleLimit-container">
          최대인원 {select.peopleLimit}명
        </div>
        <div className="hash-container-box">
          {select.hash ? (
            <div className="hash-container">
              {select.hash.map((a: any, b: number) => {
                return (
                  <div className="hash" key={b}>
                    #{a.tag}
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* 데스크탑 버전 설명 : 스크롤이 늘어나며 화면에 전체내용 뿌려준다. */}
        <div className="desktopDescribe-container">
          <div
            ref={describeRef}
            className={`describe-container ${isExpanded ? "expanded" : ""}`}
          >
            {/* <div className="describeTitle">숙소 소개 </div> */}
            {select.describe}
          </div>
          <Button type="link" ref={buttonRef} onClick={toggleExpand}>
            {isExpanded ? "간략히 보기" : "더 보기"}
          </Button>
        </div>

        {/* 테블릿, 모바일 버전 설명 : 모달 */}
        <div className="mobileDescibe-container">
          <div className="mobileDescribe">{select.describe}</div>
          <Button type="link" onClick={() => setOpen(true)}>
            더보기
          </Button>
          <Modal
            title="숙소 소개"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
          >
            <div
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontSize: "18px",
              }}
            >
              {select.describe}
            </div>
          </Modal>
        </div>
      </div>
    </LeftItemStyledComponent>
  );
};
export default LeftItem;
