// 13.핀터레스트 스타일의 반응형 웹 갤러리 제작하기
// 페이지 로드 이벤트
window.addEventListener("load", () => {
  const grid = new Isotope("section", { // 배치할 요소를 감싸고 있는 부모 요소명
    itemSelector: "article", // 배치할 요소명 
    columnWidth: "article", // 너빗값을 구할 요소명
    transitionDuration: "0.5s" // 화면 재배치 시 요소가 움직이는 속도
  });
});