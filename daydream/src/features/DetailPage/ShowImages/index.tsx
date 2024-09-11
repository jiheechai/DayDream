import { Image } from "antd";
import { ShowImagesStyledComponent } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

interface dataProps {
  select: any;
}
const ShowImages = ({ select }: dataProps) => {
  return (
    <>
      <ShowImagesStyledComponent>
        <div className="image-container">
          <Image className="bigImage" src={select.src[0].src} alt="image" />
          <div className="smallImage-container">
            <Image className="smallImage" src={select.src[1].src} alt="image" />
            <Image className="smallImage" src={select.src[2].src} alt="image" />
            <Image className="smallImage" src={select.src[3].src} alt="image" />
            <Image className="smallImage" src={select.src[4].src} alt="image" />
          </div>
        </div>

        {/* 모바일 반응형에서의 사진 swiper */}
        <div className="mobileVersionImage">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]} // 필요한 모듈 추가
            spaceBetween={50} // 슬라이드 간의 간격
            slidesPerView={1} // 한 번에 보여줄 슬라이드 수
            navigation // 네비게이션 버튼
            pagination={{ clickable: true }} // 페이지 네비게이션 활성화
            scrollbar={{ draggable: true }} // 스크롤바 활성화
            onSlideChange={() => console.log("slide change")} // 슬라이드 변경 시 이벤트
            onSwiper={(swiper) => console.log(swiper)} // Swiper 인스턴스
          >
            <SwiperSlide>
              <img src={select.src[0].src} alt="image1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={select.src[1].src} alt="image2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={select.src[2].src} alt="image3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={select.src[3].src} alt="image4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={select.src[4].src} alt="image5" />
            </SwiperSlide>
          </Swiper>
        </div>
      </ShowImagesStyledComponent>
    </>
  );
};
export default ShowImages;
