// 06.자바스크립트로 웹 페이지 제어하기
// 06-2.자바스크립트로 HTML 요소 선택하기
// practice-06-2-1.부모, 자식, 형제 요소 선택하기
/* 자식 요소 선택하기 */
// const list = document.querySelector(".list");
// const items = list.children;

// console.log(items);
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// console.log(items[3]);

/* 부모 요소 선택하기 */
// const item2 = document.querySelector(".item2");
// console.log(item2.parentElement);

/* 제일 가까운 상위 부모 요소 선택하기 */
// const li = document.querySelector("li");
// console.log(li.closest("main"));

/* 형제 요소 선택하기 */
const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling);
console.log(item3.nextElementSibling);