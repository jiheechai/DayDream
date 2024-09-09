import styled from "styled-components";

export const DetailStyledComponent = styled.div`
  .wrap-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;

    .item-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .name-container {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: left;
        width: 100%;
      }
      .image-container {
        display: grid;
        grid-template-columns: 1fr 1fr; /* 첫 번째 열은 큰 이미지, 두 번째 열은 작은 이미지들 */
        gap: 10px; /* 이미지 간의 간격 */
        justify-content: center;
        box-sizing: border-box;
        .bigImage {
          /* width: 100%;
          height: 100%; */
          width: 600px;
          height: 600px;
          object-fit: cover;
          grid-row: span 2; /* 큰 이미지는 두 행을 차지 */
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
        }

        .smallImage-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(2, 1fr);
          gap: 10px;
          .smallImage {
            /* width: 100%;
            height: 100%; */
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        }
      }
      .middle-text-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        .left-container {
          .region-container {
            /* text-align: left;
            width: 100%; */
            margin: 20px 0 3px 0;
            font-size: 24px;
            font-weight: bold;
          }
          .peopleLimit-container {
            text-align: left;
            width: 100%;
            font-size: medium;
          }

          .hash-container-box {
            /* display: flex; */
            /* text-align: left;
            width: 100%; */
            margin-top: 20px;
            .hash-container {
              display: flex;
              gap: 10px;

              .hash {
                background-color: #f0f0f0;
                padding: 5px 10px;
                border-radius: 20px;
                font-size: 14px;
                color: #555;
              }
            }
          }
          .describe-container {
            margin-top: 30px;
            display: -webkit-box;
            -webkit-line-clamp: 5; /* 최대 3줄만 표시 */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis; /* 텍스트가 잘릴 경우 줄임표(...) 표시 */
            white-space: pre-wrap; /* 줄바꿈과 공백을 그대로 유지 */
            word-wrap: break-word; /* 긴 단어도 자동으로 줄바꿈되도록 설정 */
          }

          .describe-container.expanded {
            -webkit-line-clamp: unset; /* 확장 시 모든 텍스트 표시 */
            overflow: visible;
          }
        }
        .right-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          background-color: #fff; /* 박스 배경색 */
          padding: 20px;
          border-radius: 10px; /* 모서리 둥글게 */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 */
          width: 100%;
          max-width: 300px; /* 적당한 폭 설정 */
          margin: 2% 0 3% 2%;
          height: 500px; /* 고정된 높이 */
          overflow: auto; /* 내부 내용이 넘치면 숨김 */
          .price-container {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            .per {
              font-size: 16px;
              color: #888;
              margin-left: 5px;
            }
          }
          .dateBox,
          .peopleBox {
            margin: 20px 0;
          }
          .dateBox {
            .wrapBox {
              .checkInOutBox {
                display: flex;
                /* align-items: center; */
                justify-content: space-between;
                font-size: small;
                .checkIn {
                  margin: 0 2%;
                }
                .checkOut {
                  margin-right: 28%;
                }
              }
            }
          }
          .peopleBox {
            position: relative;
            .people {
              margin: 0 2%;
              font-size: small;
            }
            .selectPeoplenumBox {
              position: absolute; /* 절대 위치 설정 */
              background-color: #ffffff; /* 흰색 배경 */
              border-radius: 12px; /* 둥근 모서리 */
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
              padding: 20px;
              width: 85%; /* 너비 설정 */
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
          }
          .reservation {
            background-color: #ff5a5f;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
            width: 100%;
            height: 12%;
            margin: 10px 0;
            &:hover {
              background-color: #e04e53;
            }
          }
          .info {
            font-size: 12px;
            color: #888;
            text-align: center;
            margin-bottom: 20px;
          }

          .price-box {
            font-size: 14px;
            color: #333;
            div {
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
              font-weight: bold;
            }

            .oneday {
              font-size: 16px;
              font-weight: normal;
            }

            .commission {
              font-size: 16px;
              font-weight: normal;
              margin-bottom: 10px;
              /* color: #555; */
            }

            hr {
              border: none;
              border-top: 1px solid #ddd;
              margin: 15px 0;
            }

            .total {
              font-size: 18px;
              font-weight: bold;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
  /* 테블릿 사이즈에서 적용될 스타일 */
  @media (max-width: 1024px) {
    .bigImage {
      width: 500px !important;
      height: 500px !important;
    }
    .smallImage {
      width: 250px !important;
      height: 250px !important;
    }
  }
  /* 모바일 사이즈에서 적용될 스타일 */
  @media (max-width: 768px) {
    .image-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      grid-template-columns: 1fr; /* 큰 이미지 하나만 보여주기 */
      .bigImage {
        width: 600px !important;
        height: 400px !important;
        object-fit: cover;
      }

      .smallImage-container {
        display: none !important; /* 작은 이미지 숨기기 */
      }
    }
  }
`;
