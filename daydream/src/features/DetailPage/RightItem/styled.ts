import styled from "styled-components";

export const RightItemStyledComponent = styled.div`
  width: 50%;
  .right-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
    .peopleBox,
    .dateBox {
      margin: 20px;
    }

    .reservation {
      background-color: #ff5a5f;
      color: white;
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
      }

      .oneday,
      .commission {
        font-size: 16px;
        font-weight: normal;
      }
      hr {
        border: none;
        border-top: 1px solid #ddd;
        margin: 15px 0;
      }
      .total {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`;
