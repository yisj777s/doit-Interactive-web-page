// 06.자바스크립트로 웹 페이지 제어하기
// 06-4.자바스크립트로 이벤트 연결하기 
// practice-06-4-1.클릭하면 좌우로 회전하는 박스 만들기
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const box = document.querySelector("#box");
const deg = 45; // 회전할 각도의 값 저장
let num = 0; // 증가시킬 값을 0으로 초기화

//btnLeft를 클릭할 때마다
btnLeft.addEventListener("click", e => {
    e.preventDefault();
    //num값을 1씩 감소
    num--;
    //45도 각도에 감소된 num값을 deg값과 곱하여 rotate 구문에 삽입
    box.style.transform = `rotate(${num * deg}deg)`;
});

//btnRight를 클릭할 때마다
btnRight.addEventListener("click", e => {
    e.preventDefault();
    //num값을 1씩 증가
    num++;
    //45도 각도에 증가된 num값을 deg값과 곱하여 rotate 구문에 삽입
    box.style.transform = `rotate(${num*deg}deg)`;
});