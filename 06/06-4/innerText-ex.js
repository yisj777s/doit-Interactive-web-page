// 06.자바스크립트로 웹 페이지 제어하기
// 06-4.자바스크립트로 이벤트 연결하기 
// 06-4-3.반복되는 요소에 이벤트 한꺼번에 연결하기
const list = document.querySelectorAll(".list li");

for(let el of list) {
  el.addEventListener("click", e => {
    e.preventDefault();  
    console.log(e.currentTarget.innerText);
  })
}