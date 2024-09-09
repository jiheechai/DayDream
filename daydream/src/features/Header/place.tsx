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

  const handleFocus = () => {
    setAutoComplete(placeData);
  };

  const handleItemClick = (item: string) => {
    setPlace(item);
    console.log("아이템:::", item);

    // 클릭된 후에 autoComplete 창을 닫습니다.
    setTimeout(() => {
      setAutoComplete([]);
    }, 100); // 약간의 지연을 추가하여 mousedown 이벤트 후에 창을 닫습니다.
  };

  const handleClickOutside = (event: MouseEvent) => {
    // "Input 영역" 또는 "autoComplete 영역" 내부를 클릭한 경우 창을 닫지 않음
    if (
      inputRef.current?.input?.contains(event.target as Node) || // Input 내부 클릭
      autoCompleteRef.current?.contains(event.target as Node) // autoComplete 내부 클릭
    ) {
      return; // 아무런 동작도 하지 않음
    }

    // "Input"과 "autoComplete" 이외의 영역을 클릭한 경우 창을 닫음
    setAutoComplete([]);
  };

  useEffect(() => {
    // mousedown 이벤트를 사용하여 클릭 전에 처리
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
        onFocus={handleFocus} // Input에 포커스가 가면 자동 완성 창 표시
        ref={inputRef} // 인풋 박스 참조 설정
      />
      <div className="placeRefBox" ref={autoCompleteRef}>
        {/* 자동 완성 창 */}
        {autoComplete.length > 0 && (
          <ul>
            {autoComplete.map((item: any, index: number) => (
              <li
                key={index}
                onClick={() => {
                  console.log("클릭된 아이템:", item);
                  handleItemClick(item);
                }}
              >
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

// import React, { useState, ChangeEvent, useEffect, useRef } from "react";
// import { Input } from "antd";
// import type { InputRef } from "antd";
// interface dataProps {
//   setPlace: any;
//   setAutoComplete: any;
//   place: any;
//   autoComplete: any;
// }
// const Place = ({
//   setPlace,
//   setAutoComplete,
//   place,
//   autoComplete,
// }: dataProps) => {
//   //여행지
//   const placeData = [
//     "서울",
//     "부산",
//     "속초",
//     "강릉",
//     "강원도",
//     "전주",
//     "대구",
//     "경주",
//     "여수",
//     "제주",
//     "대전",
//     "인천",
//   ];
//   const inputRef = useRef<InputRef>(null);
//   const autoCompleteRef = useRef<HTMLDivElement | null>(null);
//   // 초성 검색을 위한 함수 추가
//   const getChosung = (str: string) => {
//     const cho = [
//       "ㄱ",
//       "ㄲ",
//       "ㄴ",
//       "ㄷ",
//       "ㄸ",
//       "ㄹ",
//       "ㅁ",
//       "ㅂ",
//       "ㅃ",
//       "ㅅ",
//       "ㅆ",
//       "ㅇ",
//       "ㅈ",
//       "ㅉ",
//       "ㅊ",
//       "ㅋ",
//       "ㅌ",
//       "ㅍ",
//       "ㅎ",
//     ];
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//       const code = str.charCodeAt(i) - 44032;
//       if (code > -1 && code < 11172) {
//         result += cho[Math.floor(code / 588)];
//       } else {
//         result += str.charAt(i);
//       }
//     }
//     return result;
//   };
//   // 초성을 포함하는지 체크하는 함수
//   const includesChosung = (target: string, search: string) => {
//     return getChosung(target).includes(search);
//   };
//   // 장소를 찾는 함수
//   const findPlace = (e: ChangeEvent<HTMLInputElement>) => {
//     const newPlace = e.target.value;
//     setPlace(newPlace);

//     if (newPlace.length > 0) {
//       // 입력값이 비어 있지 않을 때
//       const newData = placeData.filter(
//         (x) => x.includes(newPlace) || includesChosung(x, newPlace) // 초성 검색 조건 추가
//       );
//       setAutoComplete(newData);
//     } else {
//       // 입력값이 비어 있으면 모든 장소를 자동 완성 목록에 표시
//       setAutoComplete(placeData);
//     }
//   };

//   // 처음 열릴 때는 무조건 전체 목록으로 초기화
//   const handleFocus = () => {
//     setAutoComplete(placeData); // 값에 상관없이 전체 목록으로 초기화
//   };

//   const handleItemClick = (item: string) => {
//     setPlace(item); // 클릭한 항목으로 place 상태 업데이트
//     console.log("아이템:::", item);

//     setTimeout(() => {
//       setAutoComplete([]);
//     }, 0);
//   };
//   const handleClickOutside = (event: MouseEvent) => {
//     console.log("handleClickOutside 호출");
//     if (
//       inputRef.current?.input &&
//       inputRef.current.input.contains(event.target as Node) &&
//       autoCompleteRef.current &&
//       autoCompleteRef.current.contains(event.target as Node)
//     ) {
//       return;
//     }
//     setAutoComplete([]);
//   };
//   // 컴포넌트가 마운트될 때 이벤트 리스너 추가, 언마운트될 때 제거
//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       여행지
//       <Input
//         placeholder="여행지를 입력하세요."
//         className="place"
//         value={place}
//         onChange={findPlace}
//         onFocus={handleFocus}
//         ref={inputRef} // 인풋 박스 참조 설정
//       />
//       <div className="placeRefBox" ref={autoCompleteRef}>
//         {/* 자동 완성 창 참조 설정 */}
//         {autoComplete.length > 0 && (
//           <ul>
//             {autoComplete.map((item: any, index: number) => (
//               <li
//                 key={index}
//                 onClick={() => {
//                   // e.stopPropagation();
//                   console.log("클릭된 아이템:", item);
//                   handleItemClick(item);
//                 }}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// };
// export default Place;
