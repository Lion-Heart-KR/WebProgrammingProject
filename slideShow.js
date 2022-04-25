const slides = document.querySelector('.slides');
const slidetxt = document.querySelectorAll('.slides li');
let currentIdx = 0;
const slideCount = slidetxt.length;
const prev = document.querySelector('.prev'); //이전 버튼 
const next = document.querySelector('.next'); //다음 버튼 

const slideWidth = document.querySelector('.slideShow').offsetWidth; //한개의 슬라이드 넓이 
const slideMargin = 0; //슬라이드간의 margin 값


slides.style.width = (slideWidth + slideMargin) * slideCount + 5 + 'px';

function moveSlide(num) {
    slides.style.left = -num * slideWidth + 'px';
    currentIdx = num;
}

prev.addEventListener('click', function () {
    if (currentIdx !== 0) moveSlide(currentIdx - 1);
})

next.addEventListener('click', function () {
    if (currentIdx !== slideCount - 1) {
        moveSlide(currentIdx + 1);
    }
})

const IdAndPw = document.querySelectorAll('.login');
const login = document.querySelector('#login_submit');

function loginCheck(){
    login_info = document.getElementById('login_fault');
    if(IdAndPw[0].value == 'abcd' && IdAndPw[1].value == '1234'){
        location.href='index.html';
    }
    else{
        login_info.innerHTML = "아이디 또는 패스워드가 올바르지 않습니다";
        IdAndPw[0].value='';
        IdAndPw[1].value='';
    }
}
login.addEventListener('click', function(){
    loginCheck();
})