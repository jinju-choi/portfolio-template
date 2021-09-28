
sideMenu();
nav_act();
ch_header();
moveAbout();
scrollTopBtn();
ch_color();

//메뉴 클릭 스크롤
let gnbA = document.getElementsByClassName("gnb")[0].getElementsByTagName("a");
let section = document.getElementsByTagName("section");

Array.from(gnbA).forEach(function(element,index){
  element.removeAttribute("href");//a태그 비활성화
  element.addEventListener("click",function(){
    let sec_top = section[index].offsetTop;
    window.scrollTo({top:sec_top, behavior:"smooth" }); 
  });
});

//스트롤이벤트
window.onscroll = function(){
  win_y = Math.floor(window.scrollY || document.documentElement.scrollTop);
  ch_header(win_y);
  nav_act(win_y);
  scrollTopBtn(win_y);
}

//타이틀 글자 타이핑
const target = document.getElementsByClassName("typing-text")[0];

function randomString() {
  let stringArr = ["I'm designer.", "I'm front and developer.", "I'm choi jin ju."];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}
//타이핑 리셋
function resetTyping() {
  target.textContent = "";
  typing(randomString());
}

//한글자씩 텍스트 출력
function typing (randomArr) {
  if(randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      typing (randomArr);
    },200);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
typing(randomString());


//work 클릭 이벤트
let workList = document.getElementById("portfolio").getElementsByClassName("list")[0].getElementsByTagName("li");
Array.from(workList).forEach(element => {
  element.addEventListener("click",function(){
    var work_key = this.textContent;
    reset(workList,"work--click");
    this.classList.add("work--click");
    portfolio_pop(work_key);
  });
});


//top버튼 클릭스크롤, 위치
function scrollTopBtn(win1){
  let topBtn = document.getElementsByClassName('scroll-top')[0];
  let ch_point = document.getElementById("title").offsetHeight;
  topBtn.addEventListener('click',function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  }); 
  if(win1 <= ch_point){
    topBtn.style.display= "none";
  }else{
    topBtn.style.display= "block";
  }
}

//헤더스타일 변경
function ch_header(win){
  let header = document.getElementsByTagName("header")[0];
  let ch_point = document.getElementById("title").offsetHeight;
  
  if(win >= ch_point/2){
    header.classList.add("header-bg");
  }else{
    header.classList.remove("header-bg");
  }
}

//마우스 모양 클릭시 about 이동
function moveAbout(){
  let down_btn = document.getElementsByClassName("down")[0];
  let about_T = document.getElementById("about").offsetTop;
  down_btn.addEventListener("click",function(){
    window.scrollTo({top: about_T , behavior: "smooth" });
  });
}

//섹션 진입시 메뉴 색 변경
function nav_act(winy) {
  let gnbA = document.getElementsByClassName("gnb")[0].getElementsByTagName("a");
  let section = document.getElementsByTagName("section");

  let ac_point = new Array;
  Array.from(section).forEach(function(element,index){
    ac_point[index]= Math.floor(element.offsetTop-65);
  });

  Array.from(ac_point).forEach(function(element,index){
    if(element <= winy){
      reset(gnbA ,"gnb--click");
      gnbA[index].classList.add("gnb--click");
    }
  });
}

//slide menu 열기 닫기
function sideMenu(win2){
  let aside = document.getElementsByTagName('aside')[0];
  let ch_point = document.getElementById("title").offsetHeight;
  aside.children[0].addEventListener("click", function(){
    aside.classList.toggle("side-menu-click");
  });
}

//work 위치이동
function portfolio_pop(key) {
  let work_img = document.getElementsByClassName("list--detail")[0].children;
  Array.from(work_img).forEach(element => {
    let work_class = element.getAttribute("class");
    if(key == "all"){
      pop_in (element);
    }else if(work_class.indexOf(key) != -1 ){
      pop_in (element);
      console.log(work_class.indexOf(key));
    }else{
      pop_out(element);
    }
  });
}
//work 나타나기
function pop_in(el) {
  el.style.width = "";
  el.style.height = "";
  el.style.margin = "";
  el.style.opacity = "";
  el.style.transform = "scale(1)";
}

//work 사라지기
function pop_out(el) {
  el.style.opacity = "0";
  el.style.transform = "scale(0)";
  setTimeout(function(){
    el.style.width = "0";
    el.style.height = "0";
    el.style.margin = "0";
  },400);
}
//포인트컬러 바꾸기
function ch_color(){
  let aside = document.getElementsByTagName("aside")[0];
  let colorList = aside.getElementsByTagName("li");

  Array.from(colorList).forEach(element =>{
    element.addEventListener("click",function(){
      let color = element.style.backgroundColor;

      reset(colorList,"point_ch");
      this.classList.add("point_ch");
      document.documentElement.style.setProperty("--point", color);
    });
  });
}

//hambuger click
const hamBtn = document.getElementsByClassName("hambuger")[0];
const gnb = document.getElementsByClassName("gnb")[0];

hamBtn.addEventListener('click',()=> {
  gnb.classList.toggle("active");
  gnb.addEventListener('click',()=> {
    gnb.classList.remove("active");
  });
});


//나머지 요소 리무브 클래스 함수
function reset(content,className){
  Array.from(content).forEach(element => {
    element.classList.remove(className);
  });
}