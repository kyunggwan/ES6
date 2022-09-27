/* 기존 함수 선언 방식
function funPrint(){
  console.log(n);
  console.log("외부 자바 스크립트");
  console.log("버튼"+1);
}

*/

//ES6 + : 화살표 함수 사용
const funPrint = (n) => {
  //console.log(n);
  //console.log("외부 자바 스크립트");
  console.log(`버튼${n}`);
}

//변수
//console.log(x);
let x = 100;
x = 100 *2;
console.log(x);

//DOM이 생성이 되고 난 후에 요소룰 CRUD해야함.

document.addEventListener("DOMContentLoaded",() =>{
  //console.log(document.getElementById("bt").innerHTML);

  /* 요소생성
 let bt = document.createElement("button")
docunebt.getElementById("bt").append(bt)
*/

  //요소 찾기
  //결과가 HTML Collection
  //const bts1 = document.getElementsByClassName(".bt1");
  //console.log(bts1);
  //결과가 HTML Collection
  //const bts2 = document.getElementsByName("button");
  //console.log(bts2);
  //결과가 문자열
  //const bts3 = document.querySelector(".bt1");
  //console.log(bts3);
  //결과가 NodeList
  const bts4 = document.querySelectorAll(".bt1");
 /*
  console.log(bt4);

  console.log(bts4[0].innerHTML);
  console.log(bts4[0].innerText);
  console.log(bts5[1].textContent);
*/

  /*반복문
  for(let i = 0; i < bts4.length ; i++){
    console.log(typeof(bts4[i]));
    bts4[i].innerHTML = `mybutton${i+1}`
    console.log(bts4[i].innerHTML);
  }
  */
  /*반복문 folr in ==>>>> 키 값만 가지고 온다!!!!!!!
  for(let i in bts4){
    console.log(i)
  }
*/
  /*반복문 foreach
  bts4.forEach((item) => {
console.log(item);

  });

  bts7.forEach((item) => {
    console.log(`${idx} : ${item.innerHTML}`);
  });
*/

  /*반복문 for ...of*/
    for(let item of bts4){
      console.log(item.innerHTML);
      }

    for(let [idx, item] of bts4.entries()) {
      console.log(`${idx} : ${item.innerHTML}`);
      break;
    }



} );
