import styled from "styled-components";

export const DateComponentStyled = styled.div`
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
    .selectDate {
      width: 100%;
      /* border: none; */
      height: 34px;
    }
  }
`;
