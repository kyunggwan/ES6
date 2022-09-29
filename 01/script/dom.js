//랜덤수
let randNum;

//사용자가 선택한 수
let userNum;

//화면 보기 함수
const didspDom = (msgP, inNump, bt1p, bt2p) => {

//DOM 제어
document.getElementById("msg").style.display = "msgP";
document.getElementById("inNum").style.display = "inNump";
document.getElementById("bt1").style.display = "bt1P";
document.getElementById("bt2").style.display = "bt2P";


}

//주사위
const showDice ()=>{ 
  console.log("주사위");

  //주사위 버튼 누르면 랜덤 수 생성
  randNum = Math.floor(Math.random()*6)+1;
  console.log(`주사위 랜덤수 => ${randNum}`);

  //DOM 제어
  didspDom("none", "none", "block", "none");
}  

//확인
const showOk () => {
  
  userNum = form1.num.value;
  /*
  let ox;
  if (randNum == userNum) ox = "o";
  else ox = "x";
  */
  const didspDom = ("block", "none", "block", "none");


  let tag = `<img src ="./images/${randNum}.png">`;
  if (randNum == userNum){
    tag = tag + `${tag}<img src ="./images/o.png">`;
  } else {
    tag = tag + `${tag}<img src ="./images/x.png">`;
  }

  console.log(`사용자 선택수 확인 => ${userNum}`);
}

//DOM 생성되면
document.addEventListener("DOMContentLoaded", ()=>{
   //폼 숨기기
   const formSection = document.querySelector('#formSection');
   formSection.style.display = "none" ;
 
  //주사위 버튼만 보여야함
  document.getElementById("msg").style.display = "none";
  document.getElementById("inNum").style.display = "none";
  document.getElementById("bt2").style.display = "none";


});
  */