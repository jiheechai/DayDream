# React project. 온라인 숙박 공유 플랫폼. 백일몽
![main](https://github.com/user-attachments/assets/c089f83c-60c9-4a72-bd15-58bad7e29dd5)


이번 React 개인 프로젝트에서는 사용자 중심의 UI/UX 구현을 목표로 하였습니다.
또한, 프로젝트를 통해 프론트엔드의 다양한 기술을 학습하고, 실제 서비스에 가까운 환경을 구축함으로써 웹 개발의 실질적인 기술력을 향상하는 데 목적을 두었습니다.

- 서버 주소 : http://43.203.247.141:3000/
- 사용 기술 : React.js, next.js, node.js, Javascript, Typescript
- 개발 기간 : 2024.09.02.월 ~ 2024.09.12.목
- 참여 인원 : 1인. 개인 프로젝트

#[주요 기능]
1. 메인페이지 필터링 : 해시태그 기반 검색
2. 검색 : 여행지, 날짜, 인원 선택  
3. 지도 : React google maps api. 위치 표시 및 길찾기


#[페이지 설명]
1. 메인페이지 : 카테고리별로 필터링. /swiper로 사진 여러장 볼 수 있음.
![main](https://github.com/user-attachments/assets/4e11c63f-c506-4607-b1d4-472e00cd1b7e)


2. 검색페이지 : 
- 헤더 검색창을 통해 “여행지, 날짜, 인원” 검색한 결과가 보여짐. 
- googlemap api 지도 : 우측 데이터에 hover하면 지도에 검정 마커 표시 / 마커 클릭시 데이터 보여줌 / position:sticky 지도 고정
![search](https://github.com/user-attachments/assets/6360bcf1-0484-4357-ba98-a54da2ec420b)


3. 상세페이지 :
- antd Image사용. 이미지 클릭시 크게 보여줌.
- 좌측 내용 : 팝업으로 열어서 자세히 보기. 스크롤 이벤트로 자연스럽게 열리는듯한 효과.
- 우측 가격표 : 선택한 박수에 따른 가격을 보여줌 / 인원수 선택은 숙소별 최대인원까지만 선택가능. / position:sticky로 내용을 읽으며 스크롤할때 가격표가 따라옴 / 결제페이지는 현재 구현중. 사용자들이 준비중인 기능임을 명시적으로 알 수 있도록 antd Modal로 띄워주고 있음.

![detail1](https://github.com/user-attachments/assets/41142179-5a39-4c37-9c2d-4d1837e1131e)

- 지도 마커 : 클릭시 구글맵 길찾기 연동
  
![detailmap](https://github.com/user-attachments/assets/3c35c33e-cd34-434b-919a-2cde89171ad3)


[반응형] 
- 반응형 헤더: 검색창 터치하면 위에서 아래로 내려오게 변경.
- 반응형 상세페이지 : 사진을 swiper로 변경. 더보기는 팝업 대신 모달로 변경
  
![반응형](https://github.com/user-attachments/assets/7ff1242a-3f2c-4864-9875-1366f675cece)
