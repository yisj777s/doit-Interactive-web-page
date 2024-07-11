// 06.자바스크립트로 웹 페이지 제어하기
// 06-6.함수를 활용하여 코드 패키징하기
// practice-06-6-1.활성화 기능 함수 정의하고 사용하기
const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

// 버튼의 개수만큼 반복하며 클릭 이벤트 연결
for(let i = 0; i < btns.length; i++) {
    // 각 버튼을 클릭할 때마다
    btns[i].addEventListener("click", () => {
        // 각 인수로 순섯값과 버튼, 박스 그룹을 넣어서
        // activation 함수 호출
        activation(i, btns);
        activation(i, boxs);
    })
}

// 1번째 인수로 순섯값, 2번째 인수로 그룹을 전달받아
function activation(index, list) {
    // 인수로 받은 요소의 개수만큼 반복하여 비활성화
    for(let el of list) {
        el.classList.remove("on");
    }
    // 1번째 인수로 받은 순서에 해당하는 그룹의 요소만 찿아서 활성화
    list[index].classList.add("on");
}