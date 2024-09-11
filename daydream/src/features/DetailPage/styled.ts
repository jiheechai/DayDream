import styled from "styled-components";

export const DetailStyledComponent = styled.div`
  padding-top: 180px;
  padding-bottom: 100px;
  .wrap-container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    /* 타이틀 */
    .name-container {
      width: 100%;
      font-size: 2em;
      font-weight: bold;
      /* margin: 15px 0; */
    }

    /* 내용 */
    .middle-text-container {
      margin: 30px 0px;
      max-width: 1200px;
      display: flex;
      width: 100%;

      RightItem {
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
    }
    .middle-text-container {
      flex-direction: column;
    }
  }
  /* 모바일 사이즈에서 적용될 스타일 */
  @media (max-width: 768px) {
    padding-top: 90px;
    .name-container {
      font-size: 1.5em !important;
    }
    .map-box {
      height: 400px !important;
    }
  }
`;
