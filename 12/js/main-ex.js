// 12.뮤직 플레이어 제작하기
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; //각각의 article 요소가 회전할 각도;
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에서 1을 뺌
let i = 0;

//article의 개수만큼 반복
for(let el of lists) {
  //각 article 요소를 45도씩 회전하고 아래로 배치
  let pic = el.querySelector(".pic");
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(img/member${i+1}.jpg)`; /* 배경 이미지 추가 */
  i++;
}