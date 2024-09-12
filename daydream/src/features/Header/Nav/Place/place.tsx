import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { Input } from "antd";
import { PlaceStyledComponent } from "./styled";
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
  const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업 열림 상태
  const inputRef = useRef<HTMLDivElement>(null); // Input과 팝업을 감싸는 ref
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
  const includesChosung = (target: string, search: string) => {
    return getChosung(target).includes(search);
  };
  const findPlace = (e: ChangeEvent<HTMLInputElement>) => {
    const newPlace = e.target.value;
    setPlace(newPlace);
    if (newPlace.length > 0) {
      const newData = placeData.filter(
        (x) => x.includes(newPlace) || includesChosung(x, newPlace)
      );
      setAutoComplete(newData);
    } else {
      setAutoComplete(placeData);
    }
  };

  // Input 클릭 시 팝업 열기
  const handleInputClick = () => {
    setIsPopupOpen(true);
    setAutoComplete(placeData);
  };

  // Input 이외의 영역 클릭 시 팝업 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PlaceStyledComponent>
      <div ref={inputRef}>
        여행지
        <Input
          onChange={findPlace}
          onFocus={handleInputClick}
          placeholder="여행지를 입력하세요."
          className="place"
          value={place}
        />
        {/* 자동 완성 창 */}
        <div className="placeRefBox">
          {isPopupOpen && (
            <ul>
              {autoComplete.map((item: any, index: number) => (
                <li
                  key={index}
                  onClick={() => {
                    setPlace(item);
                    setIsPopupOpen(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </PlaceStyledComponent>
  );
};

export default Place;
