var main_userpage = document.querySelector('.main_userpage');
var nav = document.querySelector('.nav')
var main_main = document.querySelector('.main_main');
var userImformation = document.querySelector('.userImformation');
var userleft_li = document.querySelectorAll('.userleft_li')
var userleft_box = document.querySelectorAll('.userleft_box')
var userleft_div = document.querySelectorAll('.userleft_div')
var userleft_divs = document.querySelectorAll('.userleft_divs')
var moreImf_1 = document.querySelectorAll('.moreImf_1');
var moreImf_2 = document.querySelectorAll('.moreImf_2');
var main = document.querySelector('.main');
var userpage_right = document.querySelector('.userpage_right')
var userSetting = document.querySelector('.userSetting')
var follow_title = document.querySelectorAll('.follow_title')
var follow_count = document.querySelectorAll('.follow_count')
var imfBtn = document.querySelector('.imfBtn');

userImformation.onclick = function() {
    main_userpage.style.display = 'block';
    main_main.style.display = 'none';
    nav.style.display = 'none';
    main.style.top = '61px'
    userpage_right.style.top = '81px'
    userSetting.style.display = 'none'
}
var main = document.querySelector('.main')


// 设置默认状态
for (var i = 0; i < userleft_box.length; i++) {
    userleft_box[i].style.display = 'none';
    userleft_box[0].style.display = 'block';
}

function selectBox(n, m) {
    userleft_li[n].onclick = function() {
        for (var i = 0; i < userleft_li.length; i++) {
            userleft_li[i].style.color = '#666'
            userleft_li[i].style.borderColor = '#fff'
        }
        this.style.color = '#3780f7'
        this.style.borderColor = '#3780f7';
        for (var i = 0; i < userleft_box.length; i++) {
            userleft_box[i].style.display = 'none';
        }
        userleft_box[m].style.display = 'block'
    }
}
selectBox(0, 0)
selectBox(1, 1)
selectBox(2, 0)
selectBox(4, 3)


var nond = 1;
userleft_li[3].onclick = function() {
    if (nond % 2 == 1) {
        userleft_div[0].style.display = 'block'
        nond++;
    } else if (nond % 2 == 0) {
        userleft_div[0].style.display = 'none'
        nond++;
    }
}
var non = 1;
userleft_li[5].onclick = function() {
    if (non % 2 == 1) {
        userleft_div[1].style.display = 'block'
        non++;
    } else if (non % 2 == 0) {
        userleft_div[1].style.display = 'none'
        non++;
    }
}



function selectBox_2(name, name1, m) {
    name.onclick = function() {
        for (var i = 0; i < userleft_li.length; i++) {
            userleft_li[i].style.color = '#666'
            userleft_li[i].style.borderColor = '#fff'
        }
        name1.style.color = '#3780f7'
        name1.style.borderColor = '#3780f7';
        for (var i = 0; i < userleft_box.length; i++) {
            userleft_box[i].style.display = 'none';
        }
        userleft_box[m].style.display = 'block'
    }
}

selectBox_2(userleft_divs[0], userleft_li[3], 2)
selectBox_2(userleft_divs[1], userleft_li[3], 2)
selectBox_2(userleft_divs[2], userleft_li[5], 4)
selectBox_2(userleft_divs[3], userleft_li[5], 5)
selectBox_2(moreImf_1[0], userleft_li[5], 4)
selectBox_2(moreImf_2[0], userleft_li[5], 4)
selectBox_2(moreImf_1[1], userleft_li[5], 5)
selectBox_2(moreImf_2[1], userleft_li[5], 5)

selectBox_2(follow_title[0], userleft_li[5], 5)
selectBox_2(follow_title[1], userleft_li[5], 5)
selectBox_2(follow_count[0], userleft_li[5], 5)
selectBox_2(follow_count[1], userleft_li[5], 5)


imfBtn.onclick = function() {
    main_userpage.style.display = 'none'
    editImf.style.display = 'block'
    main.style.top = '107px'
}