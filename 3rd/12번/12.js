// 다음 할 일의 완료여부를 true로 바꿔보세요.
// 단, 기존의 변수 “투두”의 값은 변경되면 안됩니다.
// (hint: spread operator)

const 투두 = {
  id: 1,
  할일: "8시기상",
  완료여부: false,
};

// 여기에 코드를 작성해주세요.
const newTodo = { ...투두, 완료여부: true };

console.log(투두);
console.log(newTodo);
// 결과
// { id: 1, '할일': '8시기상', '완료여부': false }
// { id: 1, '할일': '8시기상', '완료여부': true }
