// 06.자바스크립트로 웹 페이지 제어하기
// 06-4.자바스크립트로 이벤트 연결하기 
// 06-4-2.호버 이벤트 연결하기
const box = document.querySelector("#box");

// box.addEventListener("mouseenter", ()=>{
//   box.style.backgroundColor = "hotpink";
// });

// box.addEventListener("mouseleave", ()=>{
//   box.style.backgroundColor = "aqua";
// });

// ES5 이벤트 연결
// box.addEventListener("mouseenter", function(){
//   this.style.backgroundColor = "hotpink";
// });

// box.addEventListener("mouseleave", function(){
//   this.style.backgroundColor = "aqua";
// }); 

//ES6 인수 괄호 생략 버전 이벤트 연결
box.addEventListener("mouseenter", e => {
  e.currentTarget.style.backgroundColor = "hotpink";
});

box.addEventListener("mouseleave", e => {

  e.currentTarget.style.backgroundColor = "aqua";
})