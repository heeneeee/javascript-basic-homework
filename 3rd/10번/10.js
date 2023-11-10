// 다음의 배열을 수정하여 새로운 배열을 만들고 싶습니다.
// 배열 메소드를 활용하여 새로운 배열을 만들어보세요.

const 사람들 = [
  {
    이름: "김철수",
    나이: 18,
    성별: "남",
  },
  {
    이름: "김길동",
    나이: 19,
    성별: "남",
  },
  {
    이름: "김유리",
    나이: 22,
    성별: "여",
  },
  {
    이름: "김맹구",
    나이: 23,
    성별: "남",
  },
];

// 여기에 코드를 작성해주세요.
const 나이10살더먹은사람들 = 사람들.map((item) => {
  return item.나이 + 10;
});

console.log([{ ...사람들, 나이10살더먹은사람들 }]);
// 결과
/*
[
  { '이름': '김철수', '나이': 28, '성별': '남' },
  { '이름': '김길동', '나이': 29, '성별': '남' },
  { '이름': '김유리', '나이': 32, '성별': '여' },
  { '이름': '김맹구', '나이': 33, '성별': '남' }
]
*/
