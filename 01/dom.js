//function 키워드로 함수 만들기
/*
function show() {
  console.log("안녕")
}
*/

//이제는 다르게 만듦. ES6 부터는 화살표 함수로 만든다.
const show = () => {
 //1. 태그만들기
  let tag = "";
  //for(let i = 1 ; i <= 6; i++){
  //tag = tag + '<div class="divMsg">'+i+'</div>';
  //템플릿 문자열
  let i = Math.floor(Math.random()*6)+1;
  tag = tag + `<div class="divMsg"><img src ="./images/${i}.png" id ="msgImg"></div>`

  console.log(tag);
  //2.DOM에서 태그를 넣을 요소 선택
  const msgDiv = document.querySelector('#msg'); //id가 msg인 section 선택
  //3. 선택된 요소의 HTML 변경
  msgDiv.innerHTML = tag; //id가 msg인 section은 msgDiv라 했고, 여기의 innerHTML에 tag를 넣음
  //4. 동적으로 생성된 HTML요소도 스타일 변경
  let msgImg = document.querySelector('#msgImg')
  msgImg.style.maxWidth = "100px";
  msgImg.style.maxheight = "100px";
  
  let formSection = document.querySelector('#formSection')
  formSection.style.display = "none";
}

