const pws = document.querySelectorAll('.pw');
const id = document.querySelector('#id_input');
const signup = document.querySelector('#Sign-Up');
const pwValidExp = /^[a-zA-z0-9]{8,16}$/;

var t_id = setInterval(function () { IDCheck(id.value) }, 500);
function IDCheck(ID) {
    if (ID != '') {
        document.getElementById('idCheck').innerHTML = '';
        return true;
    } else {
        document.getElementById('idCheck').innerHTML = 'ID를 입력해주세요.';
        return false;
    }
}

var t_pw = setInterval(function () { pwCheck(pws[0].value, pws[1].value) }, 500);
function pwCheck(pw1, pw2) {
    if (pw1 == '' && pw2 == '') {
        document.getElementById('pwCheck').innerHTML = '';
        return 0;
    }
    else if (pw1 != pw2) {
        document.getElementById('pwCheck').innerHTML = 'PW 불일치'
        document.getElementById('pwCheck').style.color = 'red';
        return 1;
    } else {
        document.getElementById('pwCheck').innerHTML = 'PW 일치'
        document.getElementById('pwCheck').style.color = 'white';
        return 2;
    }
}

signup.addEventListener('click', function () {
    var resID = IDCheck(id.value);
    var resPW = pwCheck(pws[0].value, pws[1].value);

    if (resID == true) {
        if (resPW == 0) {
            alert('PW를 입력해주세요.');
        } else if (resPW == 1) {
            alert('PW가 일치하지 않습니다.');
            pws[0].value = '';
            pws[1].value = '';
        } else if (resPW == 2) {
            if (!pwValidExp.test(pws[0].value)) {
                alert('패스워드는 영어와 숫자의 조합으로 8~16자리로 입력해주세요.');
            } else {
                completeSignUp();
            }
        }
    } else {
        alert('ID를 입력해주세요.');
    }
});

function completeSignUp() {
    alert('회원가입이 완료되었습니다.');
    location.href = 'index.html';
}