import ShowRoom from "@/components/ShowRoom";
import { seoul, busan, jeju, jeonju } from "@/utill/data";
import { MainPageShowRoomStyled } from "@/components/ShowRoom/styled";
import { FilterComponentStyled } from "@/components/FilterComponent/styled";
import bag from "@/assets/image/bag.jpg";
import beach from "@/assets/image/beach.jpg";
import bestView from "@/assets/image/bestView.jpg";
import country from "@/assets/image/country.jpg";
import easyCheckin from "@/assets/image/easyCheckin.jpg";
import goodLocation from "@/assets/image/goodLocation.jpg";
import landmark from "@/assets/image/landmark.jpg";
import superHost from "@/assets/image/superHost.webp";
import { useState } from "react";
import FilterComponent from "@/components/FilterComponent";
import { useRouter } from "next/router";

const MainPage = () => {
  const router = useRouter();
  const allData = [...seoul, ...busan, ...jeju, ...jeonju];
  const filterData = [
    { title: "최고의 전망", src: bestView },
    { title: "슈퍼호스트", src: superHost },
    { title: "한적한 시골", src: country },
    { title: "간편한 체크인", src: easyCheckin },
    { title: "해수욕장", src: beach },
    { title: "훌륭한 숙소 위치", src: goodLocation },
    { title: "여행 가방 보관 가능", src: bag },
    { title: "상징적 도시", src: landmark },
  ];
  //초기필터값 저장. 처음 화면 랜더링될때 보여줄 데이터.
  const initialFilterData = allData.filter((item) =>
    item.hash.some((hashItem) => hashItem.tag === "최고의 전망")
  );
  const [newFilterData, setNewFilterData] = useState<any>(initialFilterData);
  const [clickFilter, setClickFilter] = useState("최고의 전망");
  const clickFilterItem = (title: string) => {
    setClickFilter(title);
    const newData = allData.filter((item) =>
      item.hash.some((hashItem) => hashItem.tag === title)
    );
    setNewFilterData(newData);
  };
  // detail로 이동
  const handleSearch = (id: number) => {
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
    <>
      {/* 메인화면 위 필터. */}
      <FilterComponentStyled>
        <div className="filterBox">
          {filterData.map((x: { title: string; src: any }, i: number) => {
            return (
              <FilterComponent
                clickFilter={clickFilter}
                clickFilterItem={clickFilterItem}
                data={x}
                key={i}
              />
            );
          })}
        </div>
      </FilterComponentStyled>

      {/* 메인화면. 방 목록 보여주기 */}
      <MainPageShowRoomStyled>
        <div className="itemBox">
          {newFilterData?.map((x: any, i: number) => (
            <div
              className="itemOnClick"
              key={i}
              onClick={() => {
                handleSearch(x.id);
              }}
            >
              <ShowRoom data={x} />
            </div>
          ))}
        </div>
      </MainPageShowRoomStyled>
    </>
  );
};
export default MainPage;
