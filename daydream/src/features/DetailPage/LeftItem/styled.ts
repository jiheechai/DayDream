import styled from "styled-components";

export const LeftItemStyledComponent = styled.div`
  .left-container {
    width: 100%;
    /* margin: 0 80px 80px 0; */
    .region-container {
      margin-bottom: 3px;
      font-size: 24px;
      font-weight: bold;
    }
    .peopleLimit-container {
      text-align: left;
      /* width: 100%; */
      font-size: medium;
    }

    .hash-container-box {
      margin-top: 20px;
      .hash-container {
        display: flex;
        gap: 10px;
        .hash {
          background-color: #f0f0f0;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: small;
          color: #555;
        }
      }
    }
    .describe-container {
      margin-top: 30px;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis; /* 텍스트가 잘릴 경우 줄임표(...) 표시 */
      white-space: pre-wrap; /* 줄바꿈과 공백을 그대로 유지 */
      word-wrap: break-word; /* 긴 단어도 자동으로 줄바꿈되도록 설정 */
    }
    .describe-container.expanded {
      -webkit-line-clamp: unset; /* 확장 시 모든 텍스트 표시 */
      overflow: visible;
    }
    .mobileDescibe-container {
      display: none;
    }
  }
  /* 테블릿 사이즈 */
  @media (max-width: 1024px) {
    .left-container {
      /* justify-content: space-around !important; */
      margin: 0;
      .desktopDescribe-container {
        display: none;
      }
      .mobileDescibe-container {
        display: block;
        .mobileDescribe {
          margin-top: 30px;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis; /* 텍스트가 잘릴 경우 줄임표(...) 표시 */
          white-space: pre-wrap; /* 줄바꿈과 공백을 그대로 유지 */
          word-wrap: break-word; /* 긴 단어도 자동으로 줄바꿈되도록 설정 */
        }
      }
    }
  }
  /* 모바일 사이즈에서 적용될 스타일 */
  @media (max-width: 768px) {
  }
`;
