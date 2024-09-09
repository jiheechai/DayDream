import styled from "styled-components";

export const HeaderStyled = styled.div`
  .topBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #ffffff;
    /* border-bottom: 1px solid #e0e0e0; */

    .logoBox {
      font-size: 24px;
      font-weight: bold;
      color: #ff5a5f;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 8px;
        margin: 10px;
      }
      &:hover {
        /* color: #e04e53; */
        /* text-decoration: underline; */
      }
    }
    .mobileDivBox {
      display: none;
    }

    .loginBox {
      font-size: 16px;
      color: #ff5a5f;
      cursor: pointer;
      margin: 10px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .noneHead {
    display: none !important;
  }

  .navBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e0e0e0;
    border-radius: 50px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    width: 70%;
    margin: 20px auto;
    position: relative;
    .placeBox,
    .dateBox,
    .peopleBox {
      font-size: small;
      flex: 1;
      padding: 0 15px;
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
    .searchButton {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background-color: #ff5a5f;
      color: #ffffff;
      cursor: pointer;

      &:hover {
        background-color: #e04e53;
      }
    }
  }

  .selectPeoplenumBox {
    font-size: medium;
    position: absolute; /* 절대 위치 설정 */
    top: 75px; /* 인풋 필드 아래로 이동 (적절히 조정 필요) */
    right: 0%;
    background-color: #ffffff; /* 흰색 배경 */
    border-radius: 12px; /* 둥근 모서리 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    padding: 20px;
    width: 300px; /* 너비 설정 */
    z-index: 10; /* 팝업이 다른 요소들 위에 오도록 설정 */
    display: flex;
    flex-direction: column;
  }

  .guestRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #e0e0e0; /* 각 행 사이의 구분선 */
  }

  .guestRow:last-child {
    border-bottom: none; /* 마지막 행 구분선 제거 */
  }

  .guestRow div {
    display: flex;
    align-items: center;
  }

  .guestRow button {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    margin: 0 10px; /* 버튼 간 간격 */
  }

  .guestRow button:hover {
    background-color: #f0f0f0;
  }

  .guestRow span {
    font-size: 16px;
    font-weight: bold;
  }
  @media (max-width: 1024px) {
    .navBox {
      width: 90%; /* 화면이 작아졌을 때 width 증가 */
      padding: 10px; /* 패딩 조정으로 요소들 간격 조정 */
    }
  }
  @media (max-width: 768px) {
    /* height: auto; */
    .topBox {
      .titleBox {
        display: none;
      }
      .mobileDivBox {
        display: flex;
        color: gray;
        &:hover {
          cursor: pointer;
        }
        width: 58%;
        border: 1px solid lightgray;
        border-radius: 28px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 12px;
        gap: 5px;
        justify-content: space-between;
        div {
          flex-grow: 1;
          border-right: 1px solid #e0e0e0;
          text-align: center;
          /* padding: 0 8px; */
          &:last-child {
            border-right: none;
          }
        }
        .question {
          /* color: lightgray !important; */
        }
      }
    }
    .navBox {
      display: none !important;
      width: 100%; /* 모바일 화면에서 더 넓게 보이도록 설정 */
      padding: 5px; /* 패딩을 줄여서 화면에 내용이 꽉 차게 */
      flex-direction: column; /* 세로 정렬로 변경 */
      gap: 10px; /* 요소들 간격을 더 넓게 */
    }

    .placeBox,
    .dateBox,
    .peopleBox {
      flex: none; /* 세로 정렬에서 각 요소가 전체 너비를 차지하도록 */
      width: 80%; /* 각 요소를 100% 너비로 설정 */
      padding: 10px 0; /* 세로 정렬 시 상하 간격 조정 */
      border-right: none !important; /* 모바일에서는 테두리 제거 */
      border-bottom: 1px solid #e0e0e0; /* 대신 하단에 테두리 추가 */
    }
    .placeBox {
      .place {
        /* text-align: center;
          border: none; */
      }
      .placeRefBox {
        ul {
          padding: 10px !important;
          width: 210px !important;
          gap: 5px !important;
          li {
            font-size: 14px !important;
            width: 40px !important;
            padding: 7px 7px !important;
          }

          li:hover {
          }
        }
      }
    }

    .searchButton {
      width: 100%; /* 검색 버튼도 100% 너비로 설정 */
      margin-top: 10px; /* 검색 버튼과 다른 요소 간격 설정 */
    }
    .selectPeoplenumBox {
      font-size: 14px;
      top: 70%;
      width: 78%;
      right: 5%;
    }
  }
`;
