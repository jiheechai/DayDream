import styled from "styled-components";
export const ShowImagesStyledComponent = styled.div`
  .image-container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 첫 번째 열은 큰 이미지, 두 번째 열은 작은 이미지들 */
    gap: 10px; /* 이미지 간의 간격 */
    justify-content: center;
    box-sizing: border-box;
    .bigImage {
      width: 100%;
      height: 100%;
      max-width: 600px;
      max-height: 600px;
      object-fit: cover;
      /* grid-row: span 2; 큰 이미지는 두 행을 차지 */
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
    }

    .smallImage-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(2, 1fr);
      gap: 10px;
      .smallImage {
        width: 100%;
        height: 100%;
        max-width: 300px;
        max-height: 300px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    }
  }
  .mobileVersionImage {
    display: none;
  }

  /* 테블릿 사이즈에서 적용될 스타일 */
  @media (max-width: 1024px) {
    .bigImage {
      max-width: 510px !important;
      max-height: 510px !important;
    }
    .smallImage {
      max-width: 250px !important;
      max-height: 250px !important;
    }
  }
  /* 모바일 사이즈에서 적용될 스타일 */
  @media (max-width: 768px) {
    .image-container {
      display: none;
    }
    .mobileVersionImage {
      display: block;
    }
    img {
      width: 100%;
      height: 400px;
    }
    /* 이전 버튼 (왼쪽 화살표) */
    .swiper-button-prev {
      display: none;
    }
    /* 다음 버튼 (오른쪽 화살표) */
    .swiper-button-next {
      display: none;
    }
    .swiper-pagination-bullet {
      background-color: blue; /* 기본 색상 */
    }
    .swiper-pagination-bullet-active {
      background-color: red; /* 활성화된 bullet 색상 */
    }
  }
`;
