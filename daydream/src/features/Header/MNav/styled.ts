import styled from "styled-components";

export const MNavStyled = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 999;
      position: fixed;
      top: -450px;
      height: 400px;
      background-color: #ffffff;
      transition: top 0.6s ease-in-out;
      .closeMnavBox {
        align-self: flex-end;
        margin-right: 20px;
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
          justify-content: flex-end;
          border: 1px solid transparent;
          border-radius: 10px;
          transition: border-color 0.2s ease-in-out;
          &:hover {
            border-color: lightcoral;
          }
        }
      }
      .placeBox,
      .dateBox,
      .peopleBox {
        width: 80%;
        font-size: large;
        /* flex: 1; */
        padding: 6px;
        text-align: center;
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 15px;
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
            padding: 6px;
            width: 77%;
            z-index: 10;
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            li {
              border: 1px solid #e0e0e0;
              width: 45px;
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
          .selectDate {
            width: 100%;
            border: none;
          }
        }
      }

      .peopleBox {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-right: none;
        border: none;
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
          z-index: 10;
          top: 75px; /* 인풋 필드 아래로 이동 (적절히 조정 필요) */
          /* right: 0px; */
          left: -20px;
          background-color: #ffffff; /* 흰색 배경 */
          border-radius: 12px; /* 둥근 모서리 */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
          padding: 20px;
          width: 100%; /* 너비 설정 */
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
      }

      .btnBox {
        width: 80%;
        .searchButton {
          width: 100%;
          height: 45px;
          /* border-radius: none !important; */
          background-color: #ff5a5f;
          color: #ffffff;
          cursor: pointer;

          &:hover {
            background-color: #e04e53;
          }
        }
      }
    }
  }
`;
