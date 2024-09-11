import styled from "styled-components";
export const FilterComponentStyled = styled.div`
  .filterBox {
    position: fixed;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: small;
    /* margin-top: 30px; */
    background-color: #ffffff;
    .filterItems {
      img {
        width: 25px;
        height: 25px;
      }
      display: flex; /* Flexbox를 사용하여 내부 요소 정렬 */
      flex-direction: column; /* 세로로 정렬하기 위해 column 방향으로 설정 */
      justify-content: center; /* 수직 중앙 정렬 */
      align-items: center; /* 수평 중앙 정렬 */
      margin: 1%;
      text-align: center;
      width: 120px;
      height: 80px;
      transition: all 0.2s ease;
      border: 1px solid transparent;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      background-color: #ffffff;
      cursor: pointer;
      &:hover {
        font-weight: bold; /* hover 시 텍스트를 굵게 */
        border: 1px solid lightgrey;
      }
      &.active {
        /* active 클래스가 있을 때 스타일 */
        font-weight: bold; /* 글씨를 굵게 */
        border: 1px solid gray;
      }
    }
  }
`;
