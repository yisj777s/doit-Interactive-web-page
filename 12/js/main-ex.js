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

  //각 article 요소 안쪽의 재생, 정지, 처음부터 재생 버튼을 변수에 저장
  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  //play 버튼 클릭 시
  play.addEventListener("click", e => {
    //play 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    //play 버튼부터 audio 요소까지 탐색한 뒤 음악 재생
    e.currentTarget.closest("article").querySelector("audio").play();
  });

  //pause 버튼 클릭 시 
  pause.addEventListener("click", e => {
    //pause 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 제거하여 비활성화
    e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
    //pause 버튼부터 audio 요소까지 탐색한 뒤 음악 정지
    e.currentTarget.closest("article").querySelector("audio").pause();
  });

  //load 버튼 클릭시
  load.addEventListener("click", e => {
    //load 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    //load 버튼부터 audio 요소까지 탁색한 뒤 음악 다시 로드하고 재생
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
}
