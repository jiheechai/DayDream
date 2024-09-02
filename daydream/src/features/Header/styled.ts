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
      color: #333;
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
    /* padding: 30px; */
    /* margin: 30px; */

    /* position: fixed; */
    /* top: 30px; */
    border-bottom: 1px solid #e0e0e0;
    .navBox {
      display: flex;
      justify-content: center;
      border: 1px solid gray;
      border-radius: 50px;
      margin: 2% 10% 5% 10%;
      padding: 2%;
      div {
        margin: 0px 30px;
        color: black;
        /* cursor: pointer; */
      }
      .selectDate {
        width: 400px;
      }
      /* div:hover {
        color: orange;
      } */
    }
  }
`;
