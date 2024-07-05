// 06.자바스크립트로 웹 페이지 제어하기
// 06-2.자바스크립트로 HTML 요소 선택하기
// 06-2-2.document.querySelectorAll() ─ 요소를 모두 선택하기

/* 요소를 1개 선택하기 */
// const item = document.querySelector("#wrap article");
// console.log(item);

/* 요소를 여러 개 선택하기 */
// const items = document.querySelectorAll("#wrap article");
// console.log(items);

/* 요소를 여러 개 선택하기 - for of문 사용 */
// const items = document.querySelectorAll("#wrap article");

// for(let item of items) {
//   console.log(item);
// }

/* 요소를 여러 개 선택하기 - for문 사용  */
const items = document.querySelectorAll("#wrap article");

for(let i=0; i<items.length; i++) {
  console.log(items[i]);
}