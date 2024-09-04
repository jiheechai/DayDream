import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: lightgrey;
  .wrap1 {
    font-size: small;
    margin: 0 8% 0 7%;
    padding: 1%;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    .Inc {
      text-align: center;
    }
    .modalBox {
      margin-top: 1%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      .gaeinJeongbo,
      .cookie,
      .yeeyong {
        cursor: pointer;
      }
    }
  }
  .wrap2 {
    text-align: center;
    font-size: x-small;
    padding: 1%;
  }
`;
