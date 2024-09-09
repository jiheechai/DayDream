import styled from "styled-components";

export const MNavStyled = styled.div`
  width: 100%;

  .backGround {
    display: none;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .backOpen {
    display: block;
  }

  .MnavBox.open {
    transform: translateY(0);
    top: 0;
  }

  .MnavBox {
    width: 100%;
    z-index: 999;
    position: fixed;
    top: -450px;
    height: 400px;
    border: 1px solid #e0e0e0;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    transition: top 0.6s ease-in-out;

    .placeBox,
    .dateBox,
    .peopleBox {
      font-size: small;
      flex: 1;
      padding: 10px;
      text-align: center;
      border-right: 1px solid #e0e0e0;

      &:last-child {
        border-right: none;
      }
    }
    .placeBox {
      .place {
        text-align: center;
        border: none;
        &:hover {
          cursor: pointer;
        }
      }
      .placeRefBox {
        ul {
          position: absolute;
          background-color: #ffffff;
          border-radius: 12px; /* 둥근 모서리 */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
          padding: 20px;
          width: 300px;
          z-index: 10;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          li {
            border: 1px solid #e0e0e0;
            width: 50px;
            padding: 10px 15px;
            margin: 5px;
            border-radius: 20px;
            list-style: none;
            text-align: center;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease; /* 호버 시 배경색 전환 효과 */
          }

          li:hover {
            background-color: #f0f0f0; /* 호버 시 배경색 변경 */
          }
        }
      }
    }

    .peopleBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* text-align: center; */
      border-right: none;
      .peoplenum {
        width: 100%;
        text-align: center;
        /* border: none; */
        &:hover {
          cursor: pointer;
        }
      }
    }
    .wrapBox {
      .checkInOutBox {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .checkIn {
          /* margin: 0 2%; */
        }
        .checkOut {
          /* margin-left: -7%; */
        }
      }
      .selectDate {
        /* width: 10%; */
      }
      /* RangePicker 달력 크기 조정 */
      .ant-picker-dropdown {
        width: 10px !important;
        height: auto !important;
      }

      /* 날짜 선택 영역의 크기를 줄임 */
      .ant-picker-panel-container {
        width: 30px !important;
      }

      /* 달력 내부 셀 크기 조정 (너무 작으면 클릭이 어려울 수 있음) */
      .ant-picker-cell-inner {
        width: 30px;
        height: 30px;
        line-height: 30px;
      }

      /* 달력 상단 네비게이션 바 크기 조정 */
      .ant-picker-header {
        padding: 8px;
        font-size: 12px;
      }
    }

    .btnBox {
      width: 100%;
      .searchButton {
        width: 100%;
        border-radius: 50px;
        background-color: #ff5a5f;
        color: #ffffff;
        cursor: pointer;

        &:hover {
          background-color: #e04e53;
        }
      }
    }
  }
`;
