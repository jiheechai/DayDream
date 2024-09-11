import styled from "styled-components";
import React, { ReactNode } from "react";
import mark from "../../assets/any/mark.png";
interface dataProps {
  lat: number;
  lng: number;
  info: any;
}

const RoomMarkerComponent = ({ lat, lng, info }: dataProps) => (
  <RoomMarkerBox>
    <img src={mark.src} alt="" />
  </RoomMarkerBox>
);

const RoomMarker = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  padding: 0 35px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #2f2f2f;
    span {
      color: white;
    }
  }
  span {
    color: black;
    font-size: 13px;
    font-weight: 700;
    pointer-events: none;
  }
`;

// RoomMarkerBox 컴포넌트 정의
interface RoomMarkerBoxProps {
  children: ReactNode; // 오류 수정: 'children'의 타입을 'ReactNode'로 명시적으로 정의
  [key: string]: any; // 다른 모든 props 타입을 명시적으로 허용
}
const RoomMarkerBox = ({ children, ...rest }: RoomMarkerBoxProps) => {
  return <RoomMarker {...rest}>{children}</RoomMarker>;
};

export default RoomMarkerComponent;
