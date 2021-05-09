var editNav_li = document.querySelectorAll('.editNav-li');
var editImf = document.querySelector('.editImf')
var main_userpage = document.querySelector('.main_userpage')
var settingList_inp = document.querySelectorAll('.settingList_inp');
var changebox = document.querySelector('.changebox');
var change = document.querySelectorAll('.change')
var change_preservatin = document.querySelectorAll('.change_preservatin')
var change_cancel = document.querySelectorAll('.change_cancel');
var change_img = document.querySelectorAll('.change_img')




editNav_li[0].onclick = function() {
    editImf.style.display = 'none'
    main_userpage.style.display = 'block';
    main.style.top = '61px'
    userpage_right.style.top = '81px'
}

editNav_li[1].style.color = '#007fff'

for (var i = 1; i < editNav_li.length; i++) {
    editNav_li[i].onclick = function() {
        for (var i = 1; i < editNav_li.length; i++) {
            editNav_li[i].style.color = '#666'
        }
        this.style.color = '#007fff'
    }
}



function changesdata(i, j) {
    settingList_inp[i].onclick = function() {
        change[i].style.display = 'none'
        change_img[j].style.display = 'none'
        change_preservatin[i].style.display = 'block'
        change_cancel[i].style.display = 'block'

    }
    settingList_inp[i].onblur = function() {
        change[i].style.display = 'block'
        change_img[j].style.display = 'block'
        change_preservatin[i].style.display = 'none'
        change_cancel[i].style.display = 'none'

    }
}
changesdata(0, 1)
changesdata(1, 2);
changesdata(2, 3);
changesdata(3, 4);
changesdata(4, 5);


var n = 1

function changedata(i) {

    change[i].onclick = function() {
        change[i].style.display = 'none'
        change_preservatin[i].style.display = 'block'
        change_cancel[i].style.display = 'block'
        change_img[i + 1].style.display = 'none'
    }
    change_cancel[i].onclick = function() {
        change[i].style.display = 'block'
        change_preservatin[i].style.display = 'none'
        change_cancel[i].style.display = 'none'
        change_img[i + 1].style.display = 'block'
    }
}
for (var i = 0; i < change.length; i++) {
    changedata(i)
}
change_preservatin[0].onclick = function() {
    const userIdObj = {
        'userId': userId,
        'nickname': settingList_inp[0].value,

    }
    postAxios("/user/changeUserInfo", userIdObj)
        .then(result => {
            console.log(result);
            userdata.nickname = settingList_inp[0].value
        })
}

change_preservatin[3].onclick = function() {
    const userIdObj = {
        'userId': userId,
        'introduction': settingList_inp[3].value

    }
    postAxios("/user/changeUserInfo", userIdObj)
        .then(result => {
            console.log(result);
            userdata.introduction = settingList_inp[3].value
        })
}