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
      color: lightcoral;
      cursor: pointer;
      &:hover {
        /* text-decoration: underline; */
      }
    }

    .loginBox {
      font-size: 16px;
      color: lightcoral;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .noneHead {
    display: none !important;
  }

  .nav {
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    .titleBox {
      position: absolute;
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
      width: 60%;
      margin: 20px auto;

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
      .place {
        text-align: center;
        border: none;
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
      .peopleBox {
        display: flex;
        justify-content: center;
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
      }
      .searchButton {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 50px;
        border-radius: 60%;
        background-color: #ff5a5f;
        color: #ffffff;
        cursor: pointer;
        margin-left: 10px;

        &:hover {
          background-color: #e04e53;
        }
      }
    }
  }
  .selectPeoplenumBox {
    position: absolute; /* 절대 위치 설정 */
    top: 165px; /* 인풋 필드 아래로 이동 (적절히 조정 필요) */
    right: 20%;
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
`;
