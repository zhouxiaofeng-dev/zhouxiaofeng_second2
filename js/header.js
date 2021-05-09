// 4个li点击变蓝事件
head_nav = document.querySelectorAll('.head_nav');
head_nav[0].style.color = '#007fff';
for (var i = 0; i < head_nav.length; i++) {
    head_nav[i].onclick = function() {
        for (var j = 0; j < head_nav.length; j++) {
            head_nav[j].style.color = '#666';
        }
        this.style.color = '#007fff';
    }
}
// 点击搜索框
var head_search = document.querySelector('.head_search');
var head_srh = document.querySelector('.head_srh');
var head_srh_blue = document.querySelector('.head_srh_blue');
head_search.onclick = function() {
    this.style.borderColor = '#007fff';
    this.style.backgroundColor = '#fff';
    this.placeholder = '文章/小册/标签/用户';
    head_srh.style.display = 'none';
    head_srh_blue.style.display = 'block';
}
head_search.onblur = function() {
    this.style.borderColor = '#e6e6e7';
    this.style.backgroundColor = '#fafafb';
    this.placeholder = '探索掘金';
    head_srh.style.display = 'block';
    head_srh_blue.style.display = 'none';
}
console.log(userId);
// 点击写文章
var head_w_1 = document.querySelector('.head_w_1');
var page_1 = document.querySelector('.page_1');
var page_2 = document.querySelector('.page_2');

head_w_1.onclick = function() {
        if (userId == undefined || userId == 'undefined') {
            login.style.display = 'block';

        } else {
            page_1.style.display = 'none';
            page_2.style.display = 'block';

        }

    }
    // 点击箭头
var head_w_2 = document.querySelector('.head_w_2');
var head_feidian = document.querySelector('.head_feidian');
var sum = 1;
head_w_2.onclick = function() {
    if (sum % 2 == 1) {
        head_feidian.style.display = 'block';
        sum++;
    } else {
        head_feidian.style.display = 'none';
        sum++;
    }
}

// 经过时变色 

head_w_1.onmouseover = function() {
    head_w_1.style.backgroundColor = '#0876e4';
}
head_w_1.onmouseout = function() {
    head_w_1.style.backgroundColor = '#007fff';
}
head_w_2.onmouseover = function() {
    head_w_2.style.backgroundColor = '#0876e4';
}
head_w_2.onmouseout = function() {
    head_w_2.style.backgroundColor = '#007fff';
}