// // 여기에 1번 문제의 답을 작성하세요.
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then(console.log);

const getProduct = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();
  return result;
};
getProduct().then(console.log);

// 여기에 2번 문제의 답을 작성하세요.

// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     /* other product data */
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log);

const post = async () => {
  res = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "BMW Pencil",
    }),
  });
  data = await res.json();
  return data;
};
