import styled from "styled-components";

export const MainPageShowRoomStyled = styled.div`
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
    /* display: flex;
    flex-direction: column; 
    justify-content: space-between; */
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

    div > div {
      margin: 8px;
    }
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
  }
`;
