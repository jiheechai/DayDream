import styled from "styled-components";

export const PlaceStyledComponent = styled.div`
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
      z-index: 300;
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
`;
