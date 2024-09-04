import styled from "styled-components";
export const MainPageShowRoomStyled = styled.div`
  .wrapBox {
    margin: 2% 0 15% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
  .itemBox {
    width: 300px; /* 카드의 너비를 고정 */
    padding: 16px; /* 카드 내부 여백 */
    background-color: white; /* 카드 배경색 */
    border-radius: 16px; /* 카드 모서리 둥글게 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 카드 그림자 효과 */
    text-align: center; /* 텍스트 중앙 정렬 */
    img {
      width: 100%; /* 이미지가 카드 너비를 가득 채우도록 설정 */
      height: 300px; /* 이미지 높이를 고정하여 정사각형 모양 유지 */
      object-fit: cover; /* 이미지 비율을 유지하면서 카드 영역에 꽉 채우기 */
      border-radius: 16px; /* 이미지 모서리 둥글게 */
      margin-bottom: 8px; /* 이미지와 텍스트 간의 간격 */
    }

    div > div {
      margin: 8px 0;
    }
  }
`;
