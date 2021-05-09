// 声明
var panda = document.querySelectorAll('.panda');
var login_inp = document.querySelector('.login_inp');
var login_inp_2 = document.querySelector('.login_inp_2');
var login_inp_3 = document.querySelector('.login_inp_3');
var login_inp_4 = document.querySelector('.login_inp_4');
var login_code = document.querySelector('.login_code');
var login_password = document.querySelector('.login_password');
var login_password_2 = document.querySelector('.login_password_2');
var login_main = document.querySelectorAll('.login_main');
var panda = document.querySelectorAll('.panda');
var exit = document.querySelectorAll('.exit');
var login_skip_1 = document.querySelector('.login_skip_1');
var login_skip_2 = document.querySelector('.login_skip_2');
var login_skip_3 = document.querySelector('.login_skip_3');
var login_skip_4 = document.querySelector('.login_skip_4');
var login_skip_5 = document.querySelector('.login_skip_5');
var login_skip_6 = document.querySelector('.login_skip_6');
var login_skip_7 = document.querySelector('.login_skip_7');


var login = document.querySelector('.login');
var head_btn = document.querySelector('.head_btn');
head_btn.onclick = function() {
    login.style.display = 'block';
}



// 文本点击事件函数
function onclickText(targetText, k, n) {
    targetText.onfocus = function() {
        this.style.borderColor = '#007fff';
        for (var i = 0; i < panda.length; i++) {
            panda[i].style.display = 'none';
            if (k == 0 || k == 1 || k == 2) { panda[k].style.display = 'block' }
        }
    }
    targetText.onblur = function() {
        this.style.borderColor = '#d9d9d9';
        for (var i = 0; i < panda.length; i++) {
            panda[i].style.display = 'none';
            if (n == 0 || n == 1 || n == 2) { panda[n].style.display = 'block' }
        }
    }
}

onclickText(login_inp, 1, 0);
onclickText(login_inp_2, 1, 0);
onclickText(login_inp_3, 1, 0);
onclickText(login_inp_4, 1, 0);
onclickText(login_password, 2, 0);
onclickText(login_password_2, 2, 0);
onclickText(login_code, 0, 0)


// 跳转函数
function changePage(nameData, k, t) {
    nameData.onclick = function() {
        for (var i = 0; i < login_main.length; i++) {
            login_main[i].style.display = 'none';
            login_main[k].style.display = 'block';
        }
    }
}
changePage(login_skip_1, 1);
changePage(login_skip_2, 0);
changePage(login_skip_3, 2);
changePage(login_skip_4, 3);
changePage(login_skip_5, 1);
changePage(login_skip_6, 2);
changePage(login_skip_7, 1);


// 退出函数

for (var i = 0; i < exit.length; i++) {
    exit[i].onclick = function() {
        this.parentNode.parentNode.style.display = 'none';
        login_main[0].style.display = 'block';
        this.parentNode.parentNode.parentNode.style.display = 'none';
    }
}