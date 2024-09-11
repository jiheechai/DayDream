import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React, { useRef, useState } from "react";
import SwiperCore from "swiper";

interface dataProps {
  data: any;
}

const ShowItems = ({ data }: dataProps) => {
  const router = useRouter();
  const swiperRef = useRef<SwiperCore | null>(null);

  // 상태값으로 첫 슬라이드인지 마지막 슬라이드인지 체크
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning); // 첫 슬라이드 여부 업데이트
          setIsEnd(swiper.isEnd); // 마지막 슬라이드 여부 업데이트
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]} // 필요한 모듈 추가
        spaceBetween={50} // 슬라이드 간의 간격
        slidesPerView={1} // 한 번에 보여줄 슬라이드 수
        pagination={{
          clickable: true, // 페이지네이션 점을 클릭할 수 있음
          dynamicBullets: true, // 동적 페이지네이션
        }}
        scrollbar={{ draggable: true }} // 스크롤바 추가
        navigation
      >
        {data.src.map((image: any, index: number) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={`image${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 콘텐츠 박스 */}
      <div className="contentBox">
        <div className="title">{data.name}</div>
        <div>[{data.region}]</div>
        <div className="price">₩{data.price[2].total.toLocaleString()}/박</div>
      </div>
    </div>
  );
};

export default ShowItems;
