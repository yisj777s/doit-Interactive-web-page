// 06.자바스크립트로 웹 페이지 제어하기
// 06-8.자바스크립트로 사용자 브라우저 판단하기
const ver = navigator.userAgent;
console.log(ver);

const isIE = /rv/i.test(ver);
console.log(isIE);

if(isIE) {
    alert("파이어폭스 브라우저로 접속하셨네요. 이 웹 페이지는 파이어폭스를 지원하지 않습니다. 다른 부라우저로 접속해 주세요.")
}