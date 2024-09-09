import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { Input } from "antd";
import type { InputRef } from "antd";
interface dataProps {
  setPlace: any;
  setAutoComplete: any;
  place: any;
  autoComplete: any;
}
const Place = ({
  setPlace,
  setAutoComplete,
  place,
  autoComplete,
}: dataProps) => {
  //여행지
  const placeData = [
    "서울",
    "부산",
    "속초",
    "강릉",
    "강원도",
    "전주",
    "대구",
    "경주",
    "여수",
    "제주",
    "대전",
    "인천",
  ];
  const inputRef = useRef<InputRef>(null);
  const autoCompleteRef = useRef<HTMLDivElement | null>(null);
  // 초성 검색을 위한 함수 추가
  const getChosung = (str: string) => {
    const cho = [
      "ㄱ",
      "ㄲ",
      "ㄴ",
      "ㄷ",
      "ㄸ",
      "ㄹ",
      "ㅁ",
      "ㅂ",
      "ㅃ",
      "ㅅ",
      "ㅆ",
      "ㅇ",
      "ㅈ",
      "ㅉ",
      "ㅊ",
      "ㅋ",
      "ㅌ",
      "ㅍ",
      "ㅎ",
    ];
    let result = "";

    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i) - 44032;
      if (code > -1 && code < 11172) {
        result += cho[Math.floor(code / 588)];
      } else {
        result += str.charAt(i);
      }
    }
    return result;
  };
  // 초성을 포함하는지 체크하는 함수
  const includesChosung = (target: string, search: string) => {
    return getChosung(target).includes(search);
  };
  // 장소를 찾는 함수
  const findPlace = (e: ChangeEvent<HTMLInputElement>) => {
    const newPlace = e.target.value;
    setPlace(newPlace);

    if (newPlace.length > 0) {
      // 입력값이 비어 있지 않을 때
      const newData = placeData.filter(
        (x) => x.includes(newPlace) || includesChosung(x, newPlace) // 초성 검색 조건 추가
      );
      setAutoComplete(newData);
    } else {
      // 입력값이 비어 있으면 모든 장소를 자동 완성 목록에 표시
      setAutoComplete(placeData);
    }
  };
  // 자동완성참조값. 아래 함수로 수정.
  // const handleFocus = () => {
  //   if (place.length > 0) {
  //     // place에 값이 있을 때 초성 검색을 통해 자동 완성 목록 업데이트
  //     const newData = placeData.filter(
  //       (x) => x.includes(place) || includesChosung(x, place)
  //     );
  //     setAutoComplete(newData);
  //   } else {
  //     setAutoComplete(placeData); // place가 빈 문자열일 경우 모든 장소 데이터로 자동 완성 목록 업데이트
  //   }
  // };
  // 처음 열릴 때는 무조건 전체 목록으로 초기화
  const handleFocus = () => {
    setAutoComplete(placeData); // 값에 상관없이 전체 목록으로 초기화
  };

  const handleItemClick = (item: string) => {
    setPlace(item); // 클릭한 항목으로 place 상태 업데이트
    setAutoComplete([]); // 클릭 후 자동 완성 목록을 비웁니다
  };
  // input 또는 자동 완성 창 밖을 클릭하면 자동 완성 목록을 닫는 함수
  const handleClickOutside = (event: MouseEvent) => {
    // Input 컴포넌트의 실제 DOM 요소에 접근하기 위해 inputRef.current?.input 사용
    if (
      inputRef.current?.input && // InputRef 인스턴스의 input 프로퍼티를 통해 접근
      !inputRef.current.input.contains(event.target as Node) &&
      autoCompleteRef.current &&
      !autoCompleteRef.current.contains(event.target as Node)
    ) {
      setAutoComplete([]);
    }
  };
  // 컴포넌트가 마운트될 때 이벤트 리스너 추가, 언마운트될 때 제거
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      여행지
      <Input
        placeholder="여행지를 입력하세요."
        className="place"
        value={place}
        onChange={findPlace}
        onFocus={handleFocus}
        ref={inputRef} // 인풋 박스 참조 설정
      />
      <div className="placeRefBox" ref={autoCompleteRef}>
        {/* 자동 완성 창 참조 설정 */}
        {autoComplete.length > 0 && (
          <ul>
            {autoComplete.map((item: any, index: number) => (
              <li key={index} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Place;
