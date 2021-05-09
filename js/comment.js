var Tip = [];
var dum = [];
var num = [];
for (var i = 0; i < 20; i++) {
    dum[i] = 1;
    num[i] = 1;
    Tip[i] = false;
}



function getComment() {
    var list_main_li = document.querySelectorAll('.list_main_li')
    var article_left = document.querySelectorAll('.article_left')
    var flag = [];
    flag.length = userarticle.length;
    for (var i = 1; i < userarticle.length; i++) {
        list_main_li[i].i = i;
        flag[i] = false;
        list_main_li[i].onclick = function() {
            if (flag[this.i] != true) {
                var userComment = {
                    'userId': userId,
                    'articleId': storageData[this.i - 1].articleId,
                    'page': '1'
                }
                getAxios("/comment/getComment", userComment)
                    .then(result => {
                        creatCommentBox(result.data, article_left[this.i])
                        commentThumb(result.data, article_left[this.i], num);
                        commentdislike(result.data, article_left[this.i], dum)


                    })
                flag[this.i] = true;
            }
        }

    }
}


function creatCommentBox(array, article) {

    for (var j = 0; j < array.length; j++) {
        var newimg = "http://47.100.42.144:3389/" + array[j].commentatorAvatar;
        newcomment = document.createElement('div')
        newcomment.className = 'newcomment';
        newcomment.innerHTML = `<div class="commentuser">
                              <img src="${newimg}" alt="" class="commentuserHead">
                              <div class="name_content">
                                  <ul class="comment_name">
                                      <li>${array[j].commentator}</li>
                                      <li><img src="images/22.png" alt=""></li>
                                      <li>前端开发师</li>
                                  </ul>
                                  <div class="comment_content">${array[j].comment}</div>
                                  <ul class="comment_imf">
                                      <li class="comment_time">1小时前</li>
                                      <li class="comment_huifu">回复 <div>${array[j].replyNum}</div></li>
                                      <li class="comment_diancai">
                                        <img src="images/31.png" alt="" class="diancai_img">
                                        <div class="commentdislike">2</div>
                                    </li>
                                      <li class="comment_dianzan">
                                          <img src="images/16.png" alt="" class="dianzan_img">
                                          <div class="commentThumb">${array[j].thumbUpNum}</div>
                                      </li>
                                  </ul>
                              </div>
                          </div>`
        article.appendChild(newcomment)
        HuiFu(array[j], newcomment, array[j].commentator)
        postReply(array[j], article)
    }


}




function postComment() {
    var article_usercomment = document.querySelectorAll('.article_usercomment')
    var pinglun = document.querySelectorAll('.pinglun')
    var article_left = document.querySelectorAll('.article_left')
    for (var i = 1; i < userarticle.length; i++) {
        pinglun[i].i = i;
        pinglun[i].onclick = function() {
            var postComment = {
                'userId': userId,
                'articleId': storageData[this.i - 1].articleId,
                'comment': article_usercomment[this.i].value
            }
            postAxios('/comment/postComment', postComment)
                .then(result => {
                    if (result.message == '提交成功') {
                        console.log(userdata.headImg);
                        postComment.username = userdata.nickname;
                        postComment.headImg = userdata.headImg;
                        creatNewComment(postComment, article_left[this.i]);

                    }
                })
            article_usercomment[this.i].value = '';
        }
    }
}

function creatNewComment(array, article) {
    newcomment = document.createElement('div')
    newcomment.className = 'newcomment';
    newcomment.innerHTML = `<div class="commentuser">
                              <img src="${array.headImg}" alt="" class="commentuserHead">
                              <div class="name_content">
                                  <ul class="comment_name">
                                      <li>${array.username}</li>
                                      <li><img src="images/22.png" alt=""></li>
                                      <li>前端开发师</li>
                                  </ul>
                                  <div class="comment_content">${array.comment}</div>
                                  <ul class="comment_imf">
                                      <li class="comment_time">1小时前</li>
                                      <li class="comment_huifu">回复 <div>0</div></li>
                                      <li class="comment_diancai">
                                        <img src="images/31.png" alt="" class="diancai_img">
                                        <div class="commentdislike">2</div>
                                    </li>
                                      <li class="comment_dianzan">
                                          <img src="images/16.png" alt="" class="dianzan_img">
                                          <div class="commentThumb">0</div>
                                      </li>
                                  </ul>
                              </div>
                          </div>`
    article.appendChild(newcomment);
    console.log(newcomment);
    var newCreateDianZan = newcomment.querySelector('.comment_dianzan');
    var newCreateDianCai = newcomment.querySelector('.comment_diancai');
    var newCreateImg1 = newcomment.querySelector('.dianzan_img')
    var newCreateImg2 = newcomment.querySelector('.diancai_img')
    var num = 1;
    var dum = 1;
    var TipNode = false;
    newCreateDianZan.onclick = function() {
        if (num % 2 == 1) {
            newCreateImg1.src = 'images/15.png';
            this.children[1].innerHTML++;
            num++;
            if (TipNode == true || TipNode == 'true') {
                newCreateImg2.src = 'images/31.png';
                newCreateDianCai.children[1].innerHTML--;
                dum++;
            }
            TipNode = true;
        } else if (num % 2 == 0) {
            newCreateImg1.src = 'images/16.png';
            this.children[1].innerHTML--;
            num++;
            TipNode == false;
        }
    }

    newCreateDianCai.onclick = function() {
        if (dum % 2 == 1) {
            newCreateImg2.src = 'images/30.png';
            this.children[1].innerHTML++;
            dum++;
            if (TipNode == true || TipNode == 'true') {
                newCreateImg1.src = 'images/16.png';
                newCreateDianZan.children[1].innerHTML--;
                num++;
            }
        } else if (dum % 2 == 0) {
            newCreateImg2.src = 'images/31.png';
            this.children[1].innerHTML--;
            dum++;
            TipNode == false;
        }
    }
}


function commentThumb(array, article, num) {
    var newdianzan = article.querySelectorAll('.dianzan_img')
    var ThumbNum = article.querySelectorAll('.commentThumb')
    var newdislike = article.querySelectorAll('.diancai_img')
    var DislikeNum = article.querySelectorAll('.commentdislike')

    for (var i = 0; i < newdianzan.length; i++) {
        newdianzan[i].i = i;
        newdianzan[i].onclick = function() {

            if (num[this.i] % 2 == '1' || num[this.i] % 2 == 1) {
                var thumbUpComment = {
                    'userId': userId,
                    'commentId': array[this.i].commentId,
                    'flag': 'true'
                }
                postAxios('/comment/thumbUpComment', thumbUpComment)
                    .then(result => {
                        newdianzan[this.i].src = 'images/15.png';
                        ThumbNum[this.i].innerHTML++;
                        if (Tip[this.i] == true || Tip[this.i] == 'true') {
                            newdislike[this.i].src = 'images/31.png';
                            DislikeNum[this.i].innerHTML--;
                            dum[this.i]++;
                        }
                        Tip[this.i] = true;
                    })
                num[this.i]++;
            } else if (num[this.i] % 2 == 0 || num[this.i] % 2 == '0') {
                var UnthumbUpComment = {
                    'userId': userId,
                    'commentId': array[this.i].commentId,
                    'flag': 'false'
                }
                postAxios('/comment/thumbUpComment', UnthumbUpComment)
                    .then(result => {
                        newdianzan[this.i].src = 'images/16.png';
                        ThumbNum[this.i].innerHTML--;
                        Tip[this.i] = false;
                    })
                num[this.i]++;
            }

        }

    }
}

function commentdislike(array, article, dum) {
    var newdislike = article.querySelectorAll('.diancai_img')
    var DislikeNum = article.querySelectorAll('.commentdislike')
    var newdianzan = article.querySelectorAll('.dianzan_img')
    var ThumbNum = article.querySelectorAll('.commentThumb')

    for (var i = 0; i < newdislike.length; i++) {
        newdislike[i].i = i;
        newdislike[i].onclick = function() {

            if (dum[this.i] % 2 == '1' || dum[this.i] % 2 == 1) {
                var dislikeUpComment = {
                    'userId': userId,
                    'commentId': array[this.i].commentId,
                    'flag': 'true'
                }
                postAxios('/comment/dislikeComment', dislikeUpComment)
                    .then(result => {
                        newdislike[this.i].src = 'images/30.png';
                        DislikeNum[this.i].innerHTML++;
                        if (Tip[this.i] == true || Tip[this.i] == 'true') {
                            newdianzan[this.i].src = 'images/16.png';
                            ThumbNum[this.i].innerHTML--;
                            num[this.i]++;
                        }
                        Tip[this.i] = true;
                    })
                dum[this.i]++;
            } else if (dum[this.i] % 2 == 0 || dum[this.i] % 2 == '0') {
                var UndisplayUpComment = {
                    'userId': userId,
                    'commentId': array[this.i].commentId,
                    'flag': 'false'
                }
                postAxios('/comment/dislikeComment', UndisplayUpComment)
                    .then(result => {
                        newdislike[this.i].src = 'images/31.png';
                        DislikeNum[this.i].innerHTML--;
                        Tip[this.i] = false;
                    })
                dum[this.i]++;
            }
        }

    }
}






function HuiFu(array, article, name) {
    var HuiFuZhiDingCanShu = {
        'userId': userId,
        'commentId': array.commentId,
        'page': 1
    }
    getAxios("/reply/getReply", HuiFuZhiDingCanShu)
        .then(result => {
            if (result.data.length != 0 || result.data.length != '0') {
                GetNewReply(result.data, article, name)
            }
        })

}

function GetNewReply(array, article, name) {
    for (var i = 0; i < array.length; i++) {
        var newimg = "http://47.100.42.144:3389/" + array[i].replierAvatar;
        var parent = article.parentNode;
        newReply = document.createElement('div')
        newReply.className = 'newUserHuiFu';
        newReply.innerHTML = `<div class="HuiFuUser">
                                  <img src="${newimg}" alt="" class="huifuUserHead">
                                  <div class="name_HuiFu">
                                      <ul class="HuiFu_name">
                                          <li>${array[i].replier}</li>
                                          <li><img src="images/22.png" alt=""></li>
                                          <li>前端开发师</li>
                                          <li>回复@
                                              <i class="getHuiFuuser">${name}</i>
                                          </li>
                                      </ul>
                                      <div class="HuiFu_content">${array[i].replyContent}</div>
                                      <ul class="HuiFu_imf">
                                          <li class="HuiFu_time">30分钟前</li>
                                          <li class="HuiFu_huifu">回复<div>0</div></li>
                                          <li class="HuiFu_diancai">
                                              <img src="images/31.png" alt="" class="diancai_HuiFu">
                                              <div class="HuiFudislike">2</div>
                                          </li>
                                          <li class="HuiFu_dianzan">
                                              <img src="images/16.png" alt="" class="dianzan_HuiFu">
                                              <div class="HuiFuThumb">2</div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>`
        if (parent.lastChild == article) {
            parent.appendChild(newReply);
        } else {
            parent.insertBefore(newReply, article.nextSibling);
        }

    }
    var HuiFu_dianzan = document.querySelectorAll('.HuiFu_dianzan');
    var HuiFu_diancai = document.querySelectorAll('.HuiFu_diancai')
    var diancai_HuiFu = document.querySelectorAll('.diancai_HuiFu')
    var dianzan_HuiFu = document.querySelectorAll('.dianzan_HuiFu')
    var Tip3 = [];
    var Tip4 = [];
    var TipNode2 = [];
    for (var i = 0; i < HuiFu_dianzan.length; i++) {
        HuiFu_dianzan[i].i = i;
        HuiFu_diancai[i].i = i;
        Tip3[i] = 1;
        Tip4[i] = 1;
        TipNode2[i] = false;
        HuiFu_dianzan[i].onclick = function() {
            if (Tip3[this.i] % 2 == 1) {
                this.children[0].src = 'images/15.png';
                this.children[1].innerHTML++;
                Tip3[this.i]++;
                if (TipNode2[this.i] == true || TipNode2[this.i] == 'true') {
                    diancai_HuiFu[this.i].src = 'images/31.png';
                    HuiFu_diancai[this.i].children[1].innerHTML--;
                    Tip4[this.i]++;
                }
                TipNode2[this.i] = true;
            } else if (Tip3[this.i] % 2 == 0) {
                this.children[0].src = 'images/16.png';
                this.children[1].innerHTML--;
                Tip3[this.i]++;
                TipNode2[this.i] = false;
            }
        }

        HuiFu_diancai[i].onclick = function() {
            if (Tip4[this.i] % 2 == 1) {
                this.children[0].src = 'images/30.png';
                this.children[1].innerHTML++;
                Tip4[this.i]++;
                if (TipNode2[this.i] == true || TipNode2[this.i] == 'true') {
                    dianzan_HuiFu[this.i].src = 'images/16.png';
                    HuiFu_dianzan[this.i].children[1].innerHTML--;
                    Tip3[this.i]++;
                }
                TipNode2[this.i] = true;
            } else if (Tip4[this.i] % 2 == 0) {
                this.children[0] = 'images/31.png';
                this.children[1].innerHTML--;
                Tip4[this.i]++;
                TipNode2[this.i] = false;
            }
        }
    }

}

function postReply(array, article) {
    var comment_huifu = document.querySelectorAll('.comment_huifu')
    for (var i = 0; i < comment_huifu.length; i++) {
        comment_huifu[i].i = i;
        comment_huifu[i].onclick = function() {
            // 新增一个回复框
            newReplyKuangjia = document.createElement('div')
            newReplyKuangjia.className = 'user_comment';
            newReplyKuangjia.innerHTML = `<div class="user_huifu_div">
                            <img src="${userdata.headImg}" alt="" class="huifu_img">
                            <div class="article_huifu">
                                <input type="text" class="article_Reply" placeholder="回复...">
                                <div class="Replylan">
                                    <ul class="Reply_biaoqing">
                                        <li class="biaoqing">
                                            <img src="images/25.png" alt="" class="comment_img">
                                            <div class="comment_text">表情</div>
                                        </li>
                                        <li class="tupian">
                                            <img src="images/26.png" alt="" class="comment_img">
                                            <div class="comment_text">图片</div>
                                        </li>
                                    </ul>
                                    <button class="Reply">评论</button>
                                </div>
                            </div>
                        </div>`

            var YUAN = this.parentNode.parentNode.parentNode.parentNode
            var YUANPARENT = YUAN.parentNode;
            if (YUANPARENT.lastChild == YUAN) {
                YUANPARENT.appendChild(newReplyKuangjia);
            } else {
                YUANPARENT.insertBefore(newReplyKuangjia, YUAN.nextSibling);
            }

            // 设置回复框的JS
            var Reply = newReplyKuangjia.querySelector('.Reply')
            var article_Reply = newReplyKuangjia.querySelector('.article_Reply')
            var article_huifu = document.querySelectorAll('.article_huifu')
            article_Reply.focus();
            article_Reply.onkeydown = function() {
                if (article_Reply.value != '') {
                    Reply.style.opacity = '1'
                    Reply.style.cursor = 'pointer'
                } else {
                    Reply.style.opacity = '0.4'
                    Reply.style.cursor = 'not-allowed'
                }
            }
            article_Reply.onfocus = function() {
                this.style.borderColor = '#007fff'
            }
            article_huifu.onclick = function() {
                article_Reply.style.borderColor = '#007fff'
            }
            document.addEventListener("mousedown", function(e) {
                if (e.target.className == "article_huifu" || e.target.className == "article_Reply" || e.target.className == "Reply" || e.target.className == "comment_img" || e.target.className == "comment_text") {
                    article_Reply.style.borderColor = '#007fff'
                } else if (e.target.className != "article_huifu" || e.target.className != " article_Reply" || e.target.className != "Reply" || e.target.className != "comment_img" || e.target.className != "comment_text") {
                    article_Reply.style.borderColor = '#666'
                    newReplyKuangjia.style.display = 'none'
                }
            })

            // 点击回复时新增一个评论
            var ReplyBtn = newReplyKuangjia.querySelector('.Reply')

            var newimg = userdata.headImg;
            var parent = article.parentNode;
            ReplyBtn.onclick = function() {
                newReplyKuangjia.style.display = 'none'

                newReply = document.createElement('div')
                newReply.className = 'newUserHuiFu';
                newReply.innerHTML = `<div class="HuiFuUser">
                                  <img src="${newimg}" alt="" class="huifuUserHead">
                                  <div class="name_HuiFu">
                                      <ul class="HuiFu_name">
                                          <li>zxf</li>
                                          <li><img src="images/22.png" alt=""></li>
                                          <li>前端开发师</li>
                                          <li>回复@
                                              <i class="getHuiFuuser"></i>
                                          </li>
                                      </ul>
                                      <div class="HuiFu_content">${article_Reply.value}</div>
                                      <ul class="HuiFu_imf">
                                          <li class="HuiFu_time">30分钟前</li>
                                          <li class="HuiFu_huifu">回复<div>0</div></li>
                                          <li class="HuiFu_diancai">
                                              <img src="images/31.png" alt="" class="diancai_HuiFu">
                                              <div class="HuiFudislike">2</div>
                                          </li>
                                          <li class="HuiFu_dianzan">
                                              <img src="images/16.png" alt="" class="dianzan_HuiFu">
                                              <div class="HuiFuThumb">2</div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>`
                var YUAN = this.parentNode.parentNode.parentNode.parentNode
                var YUANPARENT = YUAN.parentNode;
                if (YUANPARENT.lastChild == YUAN) {
                    YUANPARENT.appendChild(newReply);
                } else {
                    YUANPARENT.insertBefore(newReply, YUAN.nextSibling);
                }
            }
        }
    }
    // var PostReply = {
    //     'userId': userId,
    //     'commentId': array.commentId,
    //     'reply':
    // }
    // getAxios("/reply/postReply", PostReply)
    //     .then(result => {
    //         console.log(result.data);
    //     })

}