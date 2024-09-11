interface dataProps {
  data: any;
}
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React, { useRef } from "react";
import SwiperCore from "swiper";

const ShowItems = ({ data }: dataProps) => {
  const router = useRouter();
  // detail로 이동
  const handleSearch = (id: number, e: any) => {
    const target = e.target as HTMLElement;

    // Swiper의 기본 내비게이션 버튼인 경우 이벤트를 무시
    if (
      target.classList.contains("swiper-button-prev") ||
      target.classList.contains("swiper-button-next")
    ) {
      return;
    }
    // URL의 쿼리 파라미터로 필요한 데이터 전달
    router.push({
      pathname: "/details",
      query: {
        clickCheckIn: "", // 체크인 날짜
        clickCheckOut: "", // 체크아웃 날짜
        clickPeopleNum: "", // 인원 수
        clickAdultCount: "",
        clickChildCount: "",
        clickInfantNum: "",
        clickPetCount: "",
        id: id,
      },
    });
  };
  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <div
      className="items-Box"
      onClick={(e) => {
        handleSearch(data.id, e);
      }}
    >
      {/* 이미지 swiper로 보여주기 */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]} // 필요한 모듈 추가
        spaceBetween={50} // 슬라이드 간의 간격
        slidesPerView={1} // 한 번에 보여줄 슬라이드 수
        navigation // 네비게이션 버튼
        pagination={{ clickable: true }} // 페이지 네비게이션 활성화
        scrollbar={{ draggable: true }} // 스크롤바 활성화
      >
        <SwiperSlide>
          <img src={data.src[0].src} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={data.src[1].src} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={data.src[2].src} alt="image3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={data.src[3].src} alt="image4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={data.src[4].src} alt="image5" />
        </SwiperSlide>
      </Swiper>
      {/* <img src={data.src[0].src} /> */}
      <div className="contentBox">
        <div className="title">{data.name}</div>
        <div>[{data.region}]</div>
        <div className="price">₩{data.price[2].total.toLocaleString()}/박</div>
      </div>
    </div>
  );
};
export default ShowItems;
