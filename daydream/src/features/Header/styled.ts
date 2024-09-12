import styled from "styled-components";

export const HeaderStyled = styled.div`
  position: fixed;
  z-index: 150;
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  /* height: 100%; */
  .wrapBox {
    background-color: #ffffff;
    /* margin-bottom: 20px; */
    .topBox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px 0 10px;

      .logoBox {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        color: #ff5a5f;
        cursor: pointer;
        img {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          margin: 10px;
        }
      }
      .mobileDivBox {
        display: none;
      }
      .loginBox {
        font-size: medium;
        color: #ff5a5f;
        cursor: pointer;
        margin: 10px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .desktopNavBox {
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    .wrapBox {
      .topBox {
        .titleBox {
          display: none;
        }
        .mobileDivBox {
          display: flex;
          color: gray;
          width: 58%;
          border: 1px solid lightgray;
          border-radius: 28px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 12px;
          justify-content: space-between;
          &:hover {
            cursor: pointer;
          }
          div {
            flex-grow: 1;
            border-right: 1px solid #e0e0e0;
            text-align: center;
            &:last-child {
              border-right: none;
            }
          }
        }
      }
      .desktopNavBox {
        display: none;
      }
    }
  }

  /* 작은 모바일 기기 */
  @media (max-width: 480px) {
    .loginBox {
      font-size: x-small !important;
      margin: 0 !important;
    }
  }
`;
