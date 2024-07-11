// 06.자바스크립트로 웹 페이지 제어하기
// 06-7.HTML 요소의 속성값 제어하기
// 06-7-1. 속성값 알아내기
// const link = document.querySelector("a");
// const link_href = link.getAttribute("href");
// console.log(link_href);

// 06-7-2. 속성값 변경하기
const link = document.querySelector("a");
const new_href = "https://www.nate.com";
link.setAttribute("href", new_href);