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
    margin: 0 auto;
    /* margin-bottom: 40px; */
    position: relative;
    z-index: 200;
    background-color: #ffffff;
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
  }
`;
