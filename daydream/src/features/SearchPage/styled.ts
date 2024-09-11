import styled from "styled-components";

export const SearchStyled = styled.div`
  padding-top: 163px;
  width: 100%;
  height: 100%;
  .wrap-box {
    display: flex;
    flex-direction: row;
    width: 100%;
    .map-box {
      box-sizing: border-box;
      height: 83.5vh;
      width: 100%;
      position: sticky;
      z-index: 30;
      top: 163px;
    }
    .data-box {
      width: 100%;
      box-sizing: border-box;
      .noResult-box {
        font-weight: bold;
        margin: 8%;
      }
    }
  }

  /* 반응형 디자인 */
  @media (max-width: 1200px) {
  }

  @media (max-width: 768px) {
    padding-top: 80px;
    .wrap-box {
      display: block;
      .map-box {
        position: static;
        width: 100%;
        height: 500px;
        /* padding-top만큼 지도 높이 고정 */
        top: 80px;
      }
      .data-box {
        margin-left: 0;
        margin-top: 20px;
        width: 100%;
      }
    }
  }
`;
