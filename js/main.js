var article_function = document.querySelector('.article_function')


var article_usercomment = document.querySelectorAll('.article_usercomment')
var pinglun = document.querySelectorAll('.pinglun')
var biaoqing_box = document.querySelectorAll('.biaoqing_box')
var article_comment = document.querySelectorAll('.article_comment')
var commentlan = document.querySelectorAll('.commentlan')
var page = 1;



var flag = false;
var Cai = false;
var non = 1;
var don = 1;
var sjc = document.querySelectorAll('.sjc');
var sjc_xinjian = document.querySelectorAll('.sjc_xinjian')
var sjc_head = document.querySelectorAll('.sjc_head')
var tj = document.querySelectorAll('.tj')
var fix_shoucang = document.querySelectorAll('.fix_shoucang')
var fix_shoucangjia = document.querySelectorAll('.fix_shoucangjia')
var fix_weibo = document.querySelectorAll('.fix_weibo')
var fix_QQ = document.querySelectorAll('.fix_QQ')
var fix_weixin = document.querySelectorAll('.fix_weixin')
var sjc_center = document.querySelectorAll('.sjc_center')
var fix_dianzan = document.querySelectorAll('.fix_dianzan')
var fix_diancai = document.querySelectorAll('.fix_diancai')
var comment_dianzan = document.querySelectorAll('.comment_dianzan')
var comment_diancai = document.querySelectorAll('.comment_diancai')
var HuiFu_diancai = document.querySelectorAll('.HuiFu_diancai')
var HuiFu_dianzan = document.querySelectorAll('.HuiFu_dianzan')


var dianzan_img = document.querySelectorAll('.dianzan_img')
var diancai_img = document.querySelectorAll('.diancai_img')
var diancai_HuiFu = document.querySelectorAll('.diancai_HuiFu')
var dianzan_HuiFu = document.querySelectorAll('.dianzan_HuiFu')

var dianzan = 1;
var diancai = 1;
var Tip = false;







var art_dianzan = document.querySelectorAll('.art_dianzan')
var art_diancai = document.querySelectorAll('.art_diancai')

// 第一篇例子文章设置点赞
art_dianzan[0].onmouseover = function() {
    if (flag != true) {
        this.childNodes[1].src = 'images/17.png'
        this.childNodes[3].style.color = '#007fff'
    }

}
art_dianzan[0].onmouseout = function() {
    if (flag == true) {
        this.childNodes[1].src = 'images/15.png'
        this.childNodes[3].style.color = '#007fff'
    } else if (flag == false) {
        this.childNodes[1].src = 'images/16.png'
        this.childNodes[3].style.color = '#666'
    }

}
art_dianzan[0].onclick = function() {
    var hddzNum = document.querySelector('.hddz_Num')
    var num = fix_dianzan[0].getAttribute("badge");
    if (non % 2 == 1) {
        this.childNodes[1].src = 'images/15.png'
        this.childNodes[3].style.color = '#007fff'
        this.childNodes[3].innerHTML++;
        fix_dianzan[0].style.color = '#007fff';
        num++;
        fix_dianzan[0].setAttribute("badge", num);
        flag = true;
        non++;
        dianzan++;
        hddzNum.innerHTML++;
    } else if (non % 2 == 0) {
        this.childNodes[1].src = 'images/16.png'
        this.childNodes[3].style.color = '#666'
        this.childNodes[3].innerHTML--;
        fix_dianzan[0].style.color = '#b2bac2';
        num--;
        fix_dianzan[0].setAttribute("badge", num);
        flag = false;
        non++
        dianzan++;
        hddzNum.innerHTML--;
    }
}

// 第一篇例子文章设置点踩
art_diancai[0].onmouseover = function() {
    if (Cai != true && Cai != 'true') {
        this.childNodes[1].src = 'images/32.png'
        this.childNodes[3].style.color = '#007fff'
    }

}
art_diancai[0].onmouseout = function() {
    if (Cai == true || Cai == 'true') {
        this.childNodes[1].src = 'images/30.png'
        this.childNodes[3].style.color = '#007fff'
    } else if (Cai == false || Cai == 'false') {
        this.childNodes[1].src = 'images/31.png'
        this.childNodes[3].style.color = '#666'
    }

}
art_diancai[0].onclick = function() {
    var num = fix_diancai[0].getAttribute("badge");
    if (don % 2 == 1) {
        this.childNodes[1].src = 'images/30.png'
        this.childNodes[3].style.color = '#007fff'
        this.childNodes[3].innerHTML++;
        fix_diancai[0].style.color = '#007fff';
        num++;
        fix_diancai[0].setAttribute("badge", num);
        don++;
        diancai++;
        Cai = true;
    } else if (don % 2 == 0) {
        this.childNodes[1].src = 'images/31.png'
        this.childNodes[3].style.color = '#666'
        this.childNodes[3].innerHTML--;
        fix_diancai[0].style.color = '#b2bac2';
        num--;
        fix_diancai[0].setAttribute("badge", num);
        don++
        diancai++;
        Cai = false;
    }
}

//点赞函数
function Dianzan(i) {
    var hddzNum = document.querySelectorAll('.hddz_Num')
    var flag = false;
    var Cai = false;
    var Tip1 = []
    var Tip2 = []
    var art_dianzan = document.querySelectorAll('.art_dianzan')
    var art_diancai = document.querySelectorAll('.art_diancai')
    var fix_dianzan = document.querySelectorAll('.fix_dianzan')
    var fix_diancai = document.querySelectorAll('.fix_diancai')
    var non = [];
    var don = [];
    non.length = art_dianzan.length;
    don.length = art_diancai.length;
    for (var i = 0; i < non.length; i++) {
        non[i] = 1;
        don[i] = 1;
        Tip1[i] = false;
        Tip2[i] = false;
    }
    for (var i = 1; i < art_dianzan.length; i++) {
        art_dianzan[i].onmouseover = function() {
            if (flag != true) {
                this.childNodes[1].src = 'images/17.png'
                this.childNodes[3].style.color = '#007fff'
            }
        }
        art_dianzan[i].onmouseout = function() {
            if (flag == true) {
                this.childNodes[1].src = 'images/15.png'
                this.childNodes[3].style.color = '#007fff'
            } else if (flag == false) {
                this.childNodes[1].src = 'images/16.png'
                this.childNodes[3].style.color = '#666'
            }

        }
        art_dianzan[i].i = i;
        art_dianzan[i].onclick = function() {

            var num = fix_dianzan[this.i].getAttribute("badge");
            if (non[this.i] % 2 == 1 || non[this.i] % 2 == '1') {
                var thumbUpArticle = {
                    'userId': userId,
                    'articleId': storageData[this.i].articleId,
                    'flag': 'true'
                }
                postAxios('/article/thumbUpArticle', thumbUpArticle)
                    .then(result => {
                        console.log(result.message);
                        flag = true;
                        this.childNodes[1].src = 'images/15.png'
                        this.childNodes[3].style.color = '#007fff'
                        this.childNodes[3].innerHTML++;
                        non[this.i]++;
                        fix_dianzan[this.i].style.color = '#007fff';
                        num++;
                        fix_dianzan[this.i].setAttribute("badge", num);
                        dianzan++;
                        hddzNum[this.i].innerHTML++;
                        if (Tip1[this.i] == true || Tip1[this.i] == 'true') {
                            art_diancai[this.i].childNodes[1].src = 'images/31.png'
                            art_diancai[this.i].childNodes[3].style.color = '#666'
                            art_diancai[this.i].childNodes[3].innerHTML--;
                            console.log(art_diancai[this.i].childNodes[1].src);
                            console.log(1);
                            Cai = false;
                            don[this.i]++;
                            fix_diancai[this.i].style.color = '#b2bac2';
                            num--;
                            fix_diancai[this.i].setAttribute("badge", num);
                            diancai++;
                        }
                        Tip1[this.i] = true;
                    })
            } else if (non[this.i] % 2 == 0 || non[this.i] % 2 == '0') {

                var thumbUpArticle = {
                    'userId': userId,
                    'articleId': storageData[this.i].articleId,
                    'flag': 'false'
                }
                postAxios('/article/thumbUpArticle', thumbUpArticle)
                    .then(result => {
                        console.log(result.message);
                        this.childNodes[1].src = 'images/16.png'
                        this.childNodes[3].style.color = '#666'
                        this.childNodes[3].innerHTML--;
                        flag = false
                        non[this.i]++;
                        fix_dianzan[this.i].style.color = '#b2bac2';
                        num--;
                        fix_dianzan[this.i].setAttribute("badge", num);
                        flag = false;
                        dianzan++;
                        hddzNum[this.i].innerHTML--;
                        Tip1[this.i] = false;
                    })
            }
        }
        art_diancai[i].onmouseover = function() {
            if (Cai != true && Cai != 'true') {
                this.childNodes[1].src = 'images/32.png'
                this.childNodes[3].style.color = '#007fff'
            }

        }
        art_diancai[i].onmouseout = function() {
            if (Cai == true || Cai == 'true') {
                this.childNodes[1].src = 'images/30.png'
                this.childNodes[3].style.color = '#007fff'
            } else if (Cai == false || Cai == 'false') {
                this.childNodes[1].src = 'images/31.png'
                this.childNodes[3].style.color = '#666'
            }

        }
        art_diancai[i].i = i;
        art_diancai[i].onclick = function() {
            var num = fix_diancai[this.i].getAttribute("badge");
            if (don[this.i] % 2 == 1 || don[this.i] % 2 == '1') {
                var dislikeArticle = {
                    'userId': userId,
                    'articleId': storageData[this.i].articleId,
                    'flag': 'true'
                }
                postAxios('/article/dislikeArticle', dislikeArticle)
                    .then(result => {
                        console.log(result.message);
                        this.childNodes[1].src = 'images/30.png'
                        this.childNodes[3].style.color = '#007fff'
                        this.childNodes[3].innerHTML++;
                        Cai = true;
                        don[this.i]++;
                        fix_diancai[this.i].style.color = '#007fff';
                        num++;
                        fix_diancai[this.i].setAttribute("badge", num);
                        diancai++;
                        if (Tip2[this.i] == true || Tip2[this.i] == 'true') {
                            art_dianzan[this.i].childNodes[1].src = 'images/16.png'
                            art_dianzan[this.i].childNodes[3].style.color = '#666'
                            art_dianzan[this.i].childNodes[3].innerHTML--;
                            flag = false;
                            non[this.i]++;
                            fix_dianzan[this.i].style.color = '#b2bac2';
                            num--;
                            fix_dianzan[this.i].setAttribute("badge", num);
                            flag = false;
                            dianzan++;
                            hddzNum[this.i].innerHTML--;
                        }
                        Tip2[this.i] = true
                    })
            } else if (don[this.i] % 2 == 0 || don[this.i] % 2 == '0') {

                var dislikeArticle = {
                    'userId': userId,
                    'articleId': storageData[this.i].articleId,
                    'flag': 'false'
                }
                postAxios('/article/dislikeArticle', dislikeArticle)
                    .then(result => {
                        console.log(result.message);

                        this.childNodes[1].src = 'images/31.png'
                        this.childNodes[3].style.color = '#666'
                        this.childNodes[3].innerHTML--;
                        Cai = false;
                        don[this.i]++;
                        fix_diancai[this.i].style.color = '#b2bac2';
                        num--;
                        fix_diancai[this.i].setAttribute("badge", num);
                        diancai++;
                        Tip2[this.i] = false
                    })
            }
        }
    }
}

article_usercomment[0].onfocus = function() {
    biaoqing_box[0].style.display = 'block'
    this.style.borderColor = '#007fff'
    commentlan[0].style.display = 'block'
}
article_comment[0].onclick = function() {
    biaoqing_box[0].style.display = 'block'
    article_usercomment[0].style.borderColor = '#007fff'
    commentlan[0].style.display = 'block'
}
document.addEventListener("mousedown", function(e) {
    if (e.target.className == "article_comment" || e.target.className == "article_usercomment" || e.target.className == "pinglun" || e.target.className == "comment_img" || e.target.className == "comment_text") {
        biaoqing_box[0].style.display = 'block'
        article_usercomment[0].style.borderColor = '#007fff'
        commentlan[0].style.display = 'block'
    } else if (e.target.className != "article_comment" || e.target.className != " article_usercomment" || e.target.className != "pinglun" || e.target.className != "comment_img" || e.target.className != "comment_text") {
        biaoqing_box[0].style.display = 'none'
        article_usercomment[0].style.borderColor = '#666'
        commentlan[0].style.display = 'none'

    }
})

article_usercomment[0].onkeydown = function() {
    if (article_usercomment[0].value != '') {
        pinglun[0].style.opacity = '1'
        pinglun[0].style.cursor = 'pointer'
    } else {
        pinglun[0].style.opacity = '0.4'
        pinglun[0].style.cursor = 'not-allowed'
    }
}
pinglun[0].onclick = function() {
    console.log(1);
}

//评论区
function Comment(i) {
    var article_usercomment = document.querySelectorAll('.article_usercomment')
    var pinglun = document.querySelectorAll('.pinglun')
    var biaoqing_box = document.querySelectorAll('.biaoqing_box')
    var article_comment = document.querySelectorAll('.article_comment')
    var commentlan = document.querySelectorAll('.commentlan')
    article_usercomment[i].onfocus = function() {
        biaoqing_box[i].style.display = 'block'
        this.style.borderColor = '#007fff'
        commentlan[i].style.display = 'block'
    }
    article_comment[i].onclick = function() {
        biaoqing_box[i].style.display = 'block'
        article_usercomment[i].style.borderColor = '#007fff'
        commentlan[i].style.display = 'block'
    }
    document.addEventListener("mousedown", function(e) {
        if (e.target.className == "article_comment" || e.target.className == "article_usercomment" || e.target.className == "pinglun" || e.target.className == "comment_img" || e.target.className == "comment_text") {
            biaoqing_box[i].style.display = 'block'
            article_usercomment[i].style.borderColor = '#007fff'
            commentlan[i].style.display = 'block'
        } else if (e.target.className != "article_comment" || e.target.className != " article_usercomment" || e.target.className != "pinglun" || e.target.className != "comment_img" || e.target.className != "comment_text") {
            biaoqing_box[i].style.display = 'none'
            article_usercomment[i].style.borderColor = '#666'
            commentlan[i].style.display = 'none'

        }
    })

    article_usercomment[i].onkeydown = function() {
        if (article_usercomment[i].value != '') {
            pinglun[i].style.opacity = '1'
            pinglun[i].style.cursor = 'pointer'
        } else {
            pinglun[i].style.opacity = '0.4'
            pinglun[i].style.cursor = 'not-allowed'
        }
    }

}




sjc[0].onclick = function() {
    sjc[0].style.display = 'none';
    sjc_xinjian[0].style.display = 'block'
    tj[0].style.display = 'block'
}
sjc_xinjian[0].onkeydown = function() {
    if (sjc_xinjian[0].value != '') {
        tj[0].style.borderColor = '#007fff'
        tj[0].style.color = '#007fff'
        tj[0].style.cursor = 'pointer'
    } else {
        tj[0].style.borderColor = '#d4d1d1'
        tj[0].style.color = '#d2d2d2'
        tj[0].style.cursor = 'not-allowed'
    }
}


fix_shoucang[0].onclick = function() {
    if (fix_shoucangjia[0].style.display == 'none') {
        fix_shoucangjia[0].style.display = 'block';
        this.style.cursor = 'pointer';
    } else {
        fix_shoucangjia[0].style.display = 'none';
        this.style.cursor = 'default';
    }
}

document.addEventListener("mousedown", function(e) {
    if (e.target.className == "fix_shoucang") {
        if (fix_shoucangjia[0].style.display == 'none') {
            fix_shoucangjia[0].style.display = 'block';
            fix_shoucang[0].style.cursor = 'default';
        } else if (fix_shoucangjia[0].style.display == 'block') {
            fix_shoucangjia[0].style.display = 'none';
            fix_shoucang[0].style.cursor = 'pointer';
        }
    } else if (e.target.className != "fix_shoucang" && fix_shoucangjia[0].style.display == 'block') {
        if (e.target.className == "fix_shoucangjia" || e.target.className == "tj" || e.target.className == "sjc_xinjian" || e.target.className == "sjc" || e.target.className ==
            "sjc_head") {
            fix_shoucangjia[0].style.display = 'block';
            fix_shoucang[0].style.cursor = 'pointer';
        } else if (e.target.className != "fix_shoucangjia" || e.target.className != "tj" || e.target.className != "sjc_xinjian" || e.target.className != "sjc" || e.target.className !=
            "sjc_head") {
            fix_shoucangjia[0].style.display = 'none';
            fix_shoucang[0].style.cursor = 'default';
        }
    }

})

fix_weibo[0].onclick = function() {
    window.open('https://weibo.com/', '_blank')
}
fix_QQ[0].onclick = function() {
    window.open('https://www.qq.com/', '_blank')
}
fix_weixin[0].onclick = function() {
    window.open('https://wx.qq.com/', '_blank')
}

fix_dianzan[0].onclick = function() {
    var num = fix_dianzan[0].getAttribute("badge");
    var hddzNum = document.querySelector('.hddz_Num')
    if (dianzan % 2 == 1) {
        this.style.color = '#007fff';
        num++;
        this.setAttribute("badge", num);
        dianzan++;
        art_dianzan[0].childNodes[1].src = 'images/15.png'
        art_dianzan[0].childNodes[3].style.color = '#007fff'
        art_dianzan[0].childNodes[3].innerHTML++;
        non++;
        hddzNum.innerHTML++;
    } else if (dianzan % 2 == 0) {
        this.style.color = '#b2bac2';
        num--;
        this.setAttribute("badge", num);
        dianzan++;
        art_dianzan[0].childNodes[1].src = 'images/16.png'
        art_dianzan[0].childNodes[3].style.color = '#666'
        art_dianzan[0].childNodes[3].innerHTML--;
        non++;
        hddzNum.innerHTML--;
    }
}
fix_diancai[0].onclick = function() {
    var num = fix_diancai[0].getAttribute("badge");
    if (diancai % 2 == 1) {
        this.style.color = '#007fff';
        num++;
        this.setAttribute("badge", num);
        diancai++;
        art_diancai[0].childNodes[1].src = 'images/30.png'
        art_diancai[0].childNodes[3].style.color = '#007fff'
        art_diancai[0].childNodes[3].innerHTML++;
        don++;
    } else if (diancai % 2 == 0) {
        this.style.color = '#b2bac2';
        num--;
        this.setAttribute("badge", num);
        diancai++;
        art_diancai[0].childNodes[1].src = 'images/31.png'
        art_diancai[0].childNodes[3].style.color = '#666'
        art_diancai[0].childNodes[3].innerHTML--;
        don++;
    }
}





//侧边栏
function List(i) {
    var fix_dianzan = document.querySelectorAll('.fix_dianzan')
    var fix_diancai = document.querySelectorAll('.fix_diancai')
    var sjc = document.querySelectorAll('.sjc');
    var sjc_xinjian = document.querySelectorAll('.sjc_xinjian')
    var sjc_head = document.querySelectorAll('.sjc_head')
    var tj = document.querySelectorAll('.tj')
    var fix_shoucang = document.querySelectorAll('.fix_shoucang')
    var fix_shoucangjia = document.querySelectorAll('.fix_shoucangjia')
    var fix_weibo = document.querySelectorAll('.fix_weibo')
    var fix_QQ = document.querySelectorAll('.fix_QQ')
    var fix_weixin = document.querySelectorAll('.fix_weixin')
    var sjc_center = document.querySelectorAll('.sjc_center')
    var hddzNum = document.querySelectorAll('.hddz_Num')
    var non = 1;
    var don = 1;


    sjc[i].onclick = function() {
        sjc[i].style.display = 'none';
        sjc_xinjian[i].style.display = 'block'
        tj[i].style.display = 'block'
    }
    sjc_xinjian[i].onkeydown = function() {
        if (sjc_xinjian[i].value != '') {
            tj[i].style.borderColor = '#007fff'
            tj[i].style.color = '#007fff'
            tj[i].style.cursor = 'pointer'
        } else {
            tj[i].style.borderColor = '#d4d1d1'
            tj[i].style.color = '#d2d2d2'
            tj[i].style.cursor = 'not-allowed'
        }
    }


    fix_shoucang[i].onclick = function() {
        if (fix_shoucangjia[i].style.display == 'none') {
            fix_shoucangjia[i].style.display = 'block';
            this.style.cursor = 'pointer';
        } else {
            fix_shoucangjia[i].style.display = 'none';
            this.style.cursor = 'default';
        }
    }

    document.addEventListener("mousedown", function(e) {
        if (e.target.className == "fix_shoucang") {
            if (fix_shoucangjia[i].style.display == 'none') {
                fix_shoucangjia[i].style.display = 'block';
                fix_shoucang[i].style.cursor = 'default';
            } else if (fix_shoucangjia[i].style.display == 'block') {
                fix_shoucangjia[i].style.display = 'none';
                fix_shoucang[i].style.cursor = 'pointer';
            }
        } else if (e.target.className != "fix_shoucang" && fix_shoucangjia[i].style.display == 'block') {
            if (e.target.className == "fix_shoucangjia" || e.target.className == "tj" || e.target.className == "sjc_xinjian" || e.target.className == "sjc" || e.target.className ==
                "sjc_head") {
                fix_shoucangjia[i].style.display = 'block';
                fix_shoucang[i].style.cursor = 'pointer';
            } else if (e.target.className != "fix_shoucangjia" || e.target.className != "tj" || e.target.className != "sjc_xinjian" || e.target.className != "sjc" || e.target.className !=
                "sjc_head") {
                fix_shoucangjia[i].style.display = 'none';
                fix_shoucang[i].style.cursor = 'default';
            }
        }

    })

    fix_weibo[i].onclick = function() {
        window.open('https://weibo.com/', '_blank')
    }
    fix_QQ[i].onclick = function() {
        window.open('https://www.qq.com/', '_blank')
    }
    fix_weixin[i].onclick = function() {
        window.open('https://wx.qq.com/', '_blank')
    }

    var dianzan = 1;
    fix_dianzan[i].i = i;
    fix_dianzan[i].onclick = function() {
        var num = fix_dianzan[i].getAttribute("badge");
        var art_dianzan = document.querySelectorAll('.art_dianzan');
        if (dianzan % 2 == 1) {
            var thumbUpArticle = {
                'userId': userId,
                'articleId': storageData[i].articleId,
                'flag': 'true'
            }
            postAxios('/article/thumbUpArticle', thumbUpArticle)
                .then(result => {
                    console.log(result.message);

                    fix_dianzan[i].style.color = '#007fff';
                    num++;
                    fix_dianzan[i].setAttribute("badge", num);
                    dianzan++;
                    art_dianzan[this.i].childNodes[1].src = 'images/15.png'
                    art_dianzan[this.i].childNodes[3].style.color = '#007fff'
                    art_dianzan[this.i].childNodes[3].innerHTML++;
                    non++;
                    hddzNum[this.i].innerHTML++;

                })
        } else if (dianzan % 2 == 0) {
            var thumbUpArticle = {
                'userId': userId,
                'articleId': storageData[i].articleId,
                'flag': 'false'
            }
            postAxios('/article/thumbUpArticle', thumbUpArticle)
                .then(result => {
                    console.log(result.message);

                    fix_dianzan[i].style.color = '#b2bac2';
                    num--;
                    fix_dianzan[i].setAttribute("badge", num);
                    dianzan++;
                    art_dianzan[this.i].childNodes[1].src = 'images/16.png'
                    art_dianzan[this.i].childNodes[3].style.color = '#666'
                    art_dianzan[this.i].childNodes[3].innerHTML--;
                    non++;
                    hddzNum[this.i].innerHTML--;


                })
        }
    }
    var diancai = 1;
    fix_diancai[i].i = i;
    fix_diancai[i].onclick = function() {
        var num = fix_diancai[i].getAttribute("badge");
        var art_diancai = document.querySelectorAll('.art_dianzan');
        if (diancai % 2 == 1) {
            var dislikeArticle = {
                'userId': userId,
                'articleId': storageData[this.i].articleId,
                'flag': 'true'
            }
            postAxios('/article/dislikeArticle', dislikeArticle)
                .then(result => {
                    console.log(result.message);
                    fix_diancai[this.i].style.color = '#007fff';
                    num++;
                    fix_diancai[this.i].setAttribute("badge", num);
                    diancai++;
                    art_diancai[this.i].childNodes[1].src = 'images/30.png'
                    art_diancai[this.i].childNodes[3].style.color = '#007fff'
                    art_diancai[this.i].childNodes[3].innerHTML++;
                    don++;


                })
        } else if (dianzai % 2 == 0) {
            var dislikeArticle = {
                'userId': userId,
                'articleId': storageData[this.i].articleId,
                'flag': 'false'
            }
            postAxios('/article/dislikeArticle', dislikeArticle)
                .then(result => {
                    console.log(result.message);
                    fix_diancai[this.i].style.color = '#b2bac2';
                    num--;
                    fix_diancai[this.i].setAttribute("badge", num);
                    diancai++;
                    art_diancai[this.i].childNodes[1].src = 'images/31.png'
                    art_diancai[this.i].childNodes[3].style.color = '#666'
                    art_diancai[this.i].childNodes[3].innerHTML--;
                    don++;
                })
        }
    }
}



var Tip1 = 1;
var Tip2 = 1;
var TipNode = false;
var Tip3 = 1;
var Tip4 = 1;
var TipNode2 = false;
comment_dianzan[0].onclick = function() {
    if (Tip1 % 2 == 1) {
        dianzan_img[0].src = 'images/15.png';
        this.children[1].innerHTML++;
        Tip1++;
        if (TipNode == true || TipNode == 'true') {
            diancai_img[0].src = 'images/31.png';
            comment_diancai[0].children[1].innerHTML--;
            Tip2++;
        }
        TipNode = true;
    } else if (Tip1 % 2 == 0) {
        dianzan_img[0].src = 'images/16.png';
        this.children[1].innerHTML--;
        Tip1++;
        TipNode = false;
    }
}

comment_diancai[0].onclick = function() {
    if (Tip2 % 2 == 1) {
        diancai_img[0].src = 'images/30.png';
        this.children[1].innerHTML++;
        Tip2++;
        if (TipNode == true || TipNode == 'true') {
            dianzan_img[0].src = 'images/16.png';
            comment_dianzan[0].children[1].innerHTML--;
            Tip1++;
        }
        TipNode = true;
    } else if (Tip2 % 2 == 0) {
        diancai_img[0].src = 'images/31.png';
        this.children[1].innerHTML--;
        Tip2++;
        TipNode = false;
    }
}

HuiFu_dianzan[0].onclick = function() {
    if (Tip3 % 2 == 1) {
        dianzan_HuiFu[0].src = 'images/15.png';
        this.children[1].innerHTML++;
        Tip3++;
        if (TipNode2 == true || TipNode2 == 'true') {
            diancai_HuiFu[0].src = 'images/31.png';
            HuiFu_diancai[0].children[1].innerHTML--;
            Tip4++;
        }
        TipNode2 = true;
    } else if (Tip3 % 2 == 0) {
        dianzan_HuiFu[0].src = 'images/16.png';
        this.children[1].innerHTML--;
        Tip3++;
        TipNode2 = false;
    }
}

HuiFu_diancai[0].onclick = function() {
    if (Tip4 % 2 == 1) {
        diancai_HuiFu[0].src = 'images/30.png';
        this.children[1].innerHTML++;
        Tip4++;
        if (TipNode2 == true || TipNode2 == 'true') {
            dianzan_HuiFu[0].src = 'images/16.png';
            HuiFu_dianzan[0].children[1].innerHTML--;
            Tip3++;
        }
        TipNode2 = true;
    } else if (Tip4 % 2 == 0) {
        diancai_img[0].src = 'images/31.png';
        this.children[1].innerHTML--;
        Tip4++;
        TipNode2 = false;
    }
}