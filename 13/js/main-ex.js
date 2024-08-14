// 13.핀터레스트 스타일의 반응형 웹 갤러리 제작하기
// 페이지 로드 이벤트
window.addEventListener("load", () => {
  const grid = new Isotope("section", { // 배치할 요소를 감싸고 있는 부모 요소명
    itemSelector: "article", // 배치할 요소명 
    columnWidth: "article", // 너빗값을 구할 요소명
    transitionDuration: "0.5s" // 화면 재배치 시 요소가 움직이는 속도
  });
  // my code start
  // 모든 홀수 article 요소 저장
  const oddArticle = document.querySelectorAll("main section article:nth-child(odd)")
  console.log(oddArticle);
  // 모든 짝수 article 요소 저장
  const evenArticle = document.querySelectorAll("main section article:nth-child(even)");
  // oddArticle 요소 개수 만큼 반복
  for(let el of oddArticle) {
    // 모든 홀수 article에 클래스 odd 추가
    el.classList.add("odd");
  }
  // evenArticle 요소 개수 만큼 반복
  for(let el of evenArticle) {
    // 모든 짝수 article에 클래스 even 추가
    el.classList.add("even");
  }
  // my code finish
  
  // 모든 분류 버튼 변수에 저장 
  const btns = document.querySelectorAll("main ul li");

  // 버튼의 개수만큼 반복해서
  for(let el of btns) {
    
    // 각 버튼에 클릭 이벤트 연결
    el.addEventListener("click", e => {
      e.preventDefault();

      // 변수 sort에 클릭한 대상의 자식인 a 요소의 href 속성값 저장
      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      // grid에 저장된 결괏값을 불러와 재정렬 기능 연결
      grid.arrange({
        // 옵션값으로 sort 변숫값 지정
        filter : sort
      });

      // 다시 모든 버튼의 개수만큼 반복해서 
      for(let el of btns) {
        // 각 버튼의 클래스명 "on"을 제거해 비활성화
        el.classList.remove("on");
      }

      // 클릭한 대상만 선택해서 클래스명 on을 추가해 활성화
      e.currentTarget.classList.add("on");
    });
  }
});
