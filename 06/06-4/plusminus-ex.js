// 06.자바스크립트로 웹 페이지 제어하기
// 06-4.자바스크립트로 이벤트 연결하기 
// 06-4-4.클릭 이벤트가 발생할 때 숫자를 증가, 감소하기
const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let num = 0; // 제어할 숫잣값을 0으로 초기화

//btnPlus를 클릭할 때마다
btnPlus.addEventListener("click", e => {
    e.preventDefault();
    //num값을 1씩 증가
    num++;
    console.log(num);
});

//btnMinus를 클릭할 때마다
btnMinus.addEventListener("click", e => {
    e.preventDefault();
    //num값을 1씩 감소
    num--;
    console.log(num);
});