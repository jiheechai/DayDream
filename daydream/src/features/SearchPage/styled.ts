import styled from "styled-components";

export const SearchStyled = styled.div`
  .wrap-box {
    display: flex;
    flex-direction: row;
    height: 84.5vh;
    margin: 0;
    padding: 0;
  }

  .map-box {
    flex: 2.3;
    position: relative;
    height: 100%;
  }

  .data-box {
    flex: 3.7;
    overflow-y: auto;
    padding: 10px;
    height: auto;
    max-height: 100vh;
    box-sizing: border-box; /* 패딩 포함 높이 계산 */
  }

  /* 반응형 디자인 */
  @media (max-width: 1200px) {
    .wrap-box {
      flex: 1;
      /* flex-direction: column; */
      /* height: 120vh; */
      /* height: auto;  */
    }

    .map-box {
      /* height: 300px !important; 1200px 이하일 때 지도의 높이를 줄임 */
    }
    .data-box {
      flex: 2;
    }
  }

  @media (max-width: 768px) {
    .map-box {
      /* height: 300px; 768px 이하일 때 지도의 높이를 줄임 */
      flex: 2.3;
    }

    .wrap-box {
      flex-direction: column;
    }

    .data-box {
      flex: 3.7;
    }
  }

  @media (max-width: 480px) {
    .map-box {
      height: 250px; /* 480px 이하일 때 지도의 높이를 더 줄임 */
    }
  }
`;
// import styled from "styled-components";

// export const SearchStyled = styled.div`
//   .wrap-box {
//     display: flex;
//     flex-direction: row;
//     height: 84.5vh;
//     margin: 0;
//     padding: 0;
//   }

//   .map-box {
//     flex: 2.3;
//     position: relative;
//     height: 100%;
//   }

//   .data-box {
//     flex: 3.7;
//     overflow-y: auto;
//     padding: 10px;
//     height: auto;
//     max-height: 100vh;
//     box-sizing: border-box; /* 패딩 포함 높이 계산 */
//   }

//   /* 반응형 디자인 */
//   @media (max-width: 1200px) {
//     .wrap-box {
//       flex-direction: column; /* 지도를 위로, 사진을 아래로 배치 */
//       height: auto; /* 높이를 자동으로 맞추기 */
//     }

//     .map-box {
//       height: 400px; /* 1200px 이하일 때 지도의 높이를 줄임 */
//     }
//   }

//   @media (max-width: 768px) {
//     .map-box {
//       height: 300px; /* 768px 이하일 때 지도의 높이를 더 줄임 */
//     }

//     .wrap-box {
//       flex-direction: column;
//     }

//     .data-box {
//       height: auto; /* 모바일에서는 자동 높이 */
//     }
//   }

//   @media (max-width: 480px) {
//     .map-box {
//       height: 250px; /* 480px 이하일 때 지도의 높이를 더 줄임 */
//     }
//   }
// `;
