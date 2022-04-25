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