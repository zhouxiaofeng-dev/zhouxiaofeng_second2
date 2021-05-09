// --------------------------------
var login_login_2 = document.querySelector('.login_login_2');
var login_inp_2 = document.querySelector('.login_inp_2');
var login_password = document.querySelector('.login_password');
var login = document.querySelector('.login');
var userImf = document.querySelector('.userImf');
var head_ring = document.querySelector('.head_ring')
var userHead = document.querySelector('.userHead')
var userSetting = document.querySelector('.userSetting')
var userSetting_li = userSetting.querySelectorAll('li');
var set_img = document.querySelectorAll('.set_img');
var userImformation = document.querySelector('.userImformation');
var exitLogin = document.querySelector('.exitLogin');
var change_img = document.querySelectorAll('.change_img')
var userHead = document.querySelector('.userHead');
var settingList_inp = document.querySelectorAll('.settingList_inp');
let userId = localStorage.userId;
var list_main = document.querySelector('.list_main')
var main = document.querySelector('.main')



// 接收用户信息的对象
var userdata = {};
// 接收文章内容的对象
var userarticle = []
console.log(userarticle);

var article_arr = []
    //接收作者id
var articleUserId = []
var loginData = document.querySelectorAll('.loginData')

loginData.forEach(item => {
    item.onclick = function() {
        if (userId == undefined && userId == 'undefined') {
            login.style.display = 'block';
        }
    }
})


login_login_2.onclick = function() {
    var info = {
        username: login_inp_2.value,
        password: login_password.value
    }
    postAxios('/user/login', info)
        .then(result => {
            userId = result.userId;
            console.log(userId);
            localStorage.userId = userId;
            if (userId == "undefined") {
                alert("账号或密码错误")
            } else {
                alert("登录成功");
                head_btn.style.display = 'none';
                userImf.style.display = 'block';
                login.style.display = 'none';
            }
        })
}
var page = 1;

const userIdObj = {
    'userId': userId
}
getAxios("/user/getUserInfo", userIdObj)
    .then(result => {
        userdata.headImg = netName.concat('/' + result.data.avatar);
        userdata.nickname = result.data.nickname;
        userdata.introduction = result.data.introduction;
        change_img[0].src = userdata.headImg;

        userHead.src = userdata.headImg;
        settingList_inp[0].value = userdata.nickname;
        settingList_inp[3].value = userdata.introduction;
    })

var articleObj = {
    'userId': userId,
    'page': page
}
getAxios('/article/getArticle', articleObj)
    .then(result => {
        console.log(result);
        userarticle.length = result.data.length;
        for (var i = 0; i < userarticle.length; i++) {
            userarticle[i] = result.data[i]
            articleUserId[i] = result.data[i].authorId

        }
        editarticle();
        Dianzan();
        enter_fanhui();
        getComment();
        postComment();
        GuanZhu();
        GetLIKE()
        GETWRITEARITECLE()
    })





head_ring.onmouseover = function() {
    this.src = 'images/10.png';
}
head_ring.onclick = function() {
    this.src = 'images/10.png';
}
head_ring.onmouseout = function() {
    this.src = 'images/9.png';
}
var nod = 1;
userHead.onclick = function() {
    if (nod % 2 == 1) {
        userSetting.style.display = 'block';
        nod++;
    } else if (nod % 2 == 0) {
        userSetting.style.display = 'none';
        nod++;
    }
}





// 退出登录
exitLogin.onclick = function() {
    var con = confirm('是否退出？');
    if (con == true) {
        if (userId != undefined && userId != 'undefined') {
            alert('退出登录成功！');
            userId = undefined;
            localStorage.userId = userId;
            head_btn.style.display = 'block';
            userImf.style.display = 'none';
            login.style.display = 'none';
            userSetting.style.display = 'none';
        }
    }
}