// 06.자바스크립트로 웹 페이지 제어하기
// 06-4.자바스크립트로 이벤트 연결하기 
// 06-4-1.클릭 이벤트 연결하기
const link = document.querySelector("a");

link.addEventListener("click", (e)=>{
  e.preventDefault();
  console.log("링크를 클릭했습니다.");
})