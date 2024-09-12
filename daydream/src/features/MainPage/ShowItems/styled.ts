import styled from "styled-components";

export const MainPageShowItemsStyled = styled.div`
  padding-top: 90px;
  .itemBox {
    margin: 2% 4% 15% 4%;
    display: grid;
    gap: 30px; /* 아이템 간 간격 */

    /* 화면 크기에 따라 한 줄에 표시되는 카드의 개수 조정 */
    grid-template-columns: repeat(
      auto-fill,
      minmax(265px, 1fr)
    ); /* 최소 너비 250px, 가용 공간에 따라 자동으로 열 생성 */
  }

  .items-Box {
    width: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    height: 100%; /* 높이를 부모 grid와 맞춤 */
    &:hover {
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 265px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 8px;
    }
    .contentBox {
      padding: 0 20px 20px 20px;
      .title {
        white-space: nowrap; /* 텍스트를 한 줄로 */
        overflow: hidden; /* 넘치는 텍스트를 숨김 */
        text-overflow: ellipsis; /* 넘치는 텍스트에 '...' 표시 */
      }
    }
  }

  /* swiper */
  /* 이전 버튼 (왼쪽 화살표) */
  .swiper-button-prev {
    background-color: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    font-size: 20px;
  }
  /* 다음 버튼 (오른쪽 화살표) */
  .swiper-button-next {
    background-color: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    font-size: 20px;
  }
  /* 버튼에 hover 효과 */
  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  /* 화살표 자체 스타일 변경 */
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 24px;
    font-weight: bold;
  }

  .swiper-pagination-bullet {
    background-color: blue; /* 기본 색상 */
  }
  .swiper-pagination-bullet-active {
    background-color: red; /* 활성화된 bullet 색상 */
  }

  /* 반응형 미디어 쿼리 */
  //태블릿
  @media (max-width: 1024px) {
    .itemBox {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  //모바일
  @media (max-width: 768px) {
    .itemBox {
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    }
    .items-Box {
      img {
        height: 250px; /* 모바일에서 이미지 높이 조정 */
      }
    }
    .swiper-button-prev {
      display: none;
    }
    /* 다음 버튼 (오른쪽 화살표) */
    .swiper-button-next {
      display: none;
    }
  }

  /* 작은 모바일 기기 */
  @media (max-width: 480px) {
  }
`;
