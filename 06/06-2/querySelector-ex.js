// 06.자바스크립트로 웹 페이지 제어하기
// 06-2.자바스크립트로 HTML 요소 선택하기
// 06-2-1.document.querySelector() ─ 요소 선택하기

/* 요소를 1개만 선택하기 */
document.querySelector("#wrap");


/* 변수를 만들어서 요소 선택하기 */
// const frame = document.querySelector("#wrap");
// console.log(frame);

/* 클래스명이 box1인 요소 선택하기 */
const box1 = document.querySelector("#wrap .box1");
console.log(box1);