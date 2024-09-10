import styled from "styled-components";

export const NavStyled = styled.div`
  .navBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e0e0e0;
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
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
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
            transition: background-color 0.3s ease;
          }

          li:hover {
            background-color: #f0f0f0;
          }
        }
      }
    }

    .dateBox {
      .wrapBox {
        .checkInOutBox {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
    }

    .peopleBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-right: none;
      .peoplenum {
        width: 100%;
        text-align: center;
        &:hover {
          cursor: pointer;
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
        /* z-index: 10; 팝업이 다른 요소들 위에 오도록 설정 */
        display: flex;
        flex-direction: column;

        .guestRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #e0e0e0;
          &:last-child {
            border-bottom: none; /* 마지막 행 구분선 제거 */
          }
          Button {
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
            &:hover {
              background-color: #f0f0f0;
            }
          }
        }
      }
      .okBox {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid lightgray;
        color: black;
        border-radius: 8px;
        height: 40px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        &:hover {
          background-color: #f0f0f0;
        }
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

  @media (max-width: 1024px) {
    .navBox {
      width: 90%;
      padding: 10px;
    }
  }
  @media (max-width: 768px) {
    .navBox {
      display: none !important;
    }
  }
`;
