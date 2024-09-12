import styled from "styled-components";

export const DetailStyledComponent = styled.div`
  padding-top: 180px;
  padding-bottom: 100px;
  width: 100%;
  .wrap-container {
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    /* 타이틀 */
    .name-container {
      font-size: 2em;
      font-weight: bold;
    }

    /* 내용 */
    .middle-text-container {
      margin: 30px 0px;
      display: flex;
      position: relative;
      .rightContainer {
        height: 500px;
        position: sticky;
        top: 180px;
      }
    }

    /* 구글맵 */
    .map-box {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 600px;
    }
  }

  /* 테블릿 사이즈 */
  @media (max-width: 1024px) {
    .name-container {
      font-size: 1.7em !important;
      padding: 15px;
    }
    .middle-text-container {
      flex-direction: column;
      margin: 7px 15px !important;
    }
  }
  /* 모바일 사이즈에서 적용될 스타일 */
  @media (max-width: 768px) {
    padding-top: 90px;
    .name-container {
      font-size: 1.5em !important;
    }
  }

  /* 작은 모바일 기기 */
  @media (max-width: 480px) {
    /* width: 100%; */
  }
`;
