;
var list_main = document.querySelector('.list_main')
var list_main_li = document.querySelectorAll('.list_main_li');
var articledetail = document.querySelector('.list_main_li');
var main = document.querySelector('.main');
var main_main = document.querySelector('.main_main');
var nav = document.querySelector('.nav');
var article_right = document.querySelector('.article_right');
var article_content = document.querySelectorAll('.article_content');
var fanhui = document.querySelectorAll('.fanhui');
var fixcontent = document.querySelectorAll('.fixcontent');
var art_dianzan = document.querySelectorAll('.art_dianzan');
var list_li_top = document.querySelectorAll('.list_li_top');

// 接收接口中文章的信息对象的对象数组
var storageData = [];
console.log(storageData);



// 编辑文章格式并传入数据
function editarticle() {
    for (var i = 1; i < userarticle.length; i++) {
        storageData[i - 1] = userarticle[i]

        var newpoint = document.createElement('li')
        var newpage = document.createElement('div')
        var newlist = document.createElement('ul')
        var newscj = document.createElement('div')
        newpage.style.display = 'none'
        newlist.style.display = 'none'
        newscj.style.display = 'none'
        newpoint.className = 'list_main_li'
        newpoint.innerHTML = `<div  class="list_li_top">
                                <div class="articleImf">
                                <div class="articleauthorName">${userarticle[i].author}</div>
                                <div class="articleTime">2天前</div>
                                <div class="articleTag">前端</div>
                            </div>
                            <h2 class="articleHead">
                               ${userarticle[i].title}
                            </h2>
                            <div class="articleMain">
                                <div class="articleMain_left">
                                    <div class="articleMain_content"></div>
                                </div>
                                <div class="articleMain_right"><img src="images/1.png" alt="" class="article_img"></div>
                            </div></div>
       
                            <ul class="article_function">
                                        <li class="item_userFun art_dianzan">
                                            <img src="images/16.png" alt="" class="item_like">
                                            <span class="item_likeNum">${userarticle[i].thumbUpNum}</span>
                                        </li>
                                        <li class="item_userFun art_diancai">
                                            <img src="images/31.png" alt="" class="item_dislike">
                                            <span class="item_dislikeNum">10</span>
                                        </li>
                                        <li class="item_userFun">
                                            <i class="item_comment"></i>
                                            <span class="item_commentNum">${userarticle[i].commentNum}</span>
                                        </li>
                                        <li class="item_userFun">
                                            <i class="item_share"></i>
                                            <span class="item_shareFont">分享</span>
                                        </li>
                                    </ul>
                           `
        list_main.appendChild(newpoint)
        newpage.className = 'w article_content'
        newpage.innerHTML = `<div class="article_left">
                    <div class="article_userImf">
                        <img src="" alt="" class="article_userImg">
                        <div class="article_user">
                            <div class="article_username">${userarticle[i].author}</div>
                            <img src="images/22.png" alt="">
                            <div class="article_time">2021年4月23号&nbsp&nbsp&nbsp&nbsp阅读${userarticle[i].commentNum}</div>
                        </div>
                        <button class="guanzhu">关注</button>
                    </div>
                    <div class="article_title">
                         ${userarticle[i].title}
                    </div>
                    <div class="articleContent"></div>
                    <div class="user_comment">
                        <div class="user_comment_div">
                            <img src="images/1.png" alt="" class="articleuser_img">
                            <div class="article_comment">
                                <input type="text" class="article_usercomment" placeholder="输入评论...">
                                <div class="commentlan">
                                    <ul class="comment_biaoqing">
                                        <li class="biaoqing">
                                            <img src="images/25.png" alt="" class="comment_img">
                                            <div class="comment_text">表情</div>
                                        </li>
                                        <li class="tupian">
                                            <img src="images/26.png" alt="" class="comment_img">
                                            <div class="comment_text">图片</div>
                                        </li>
                                    </ul>
                                    <button class="pinglun">评论</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="biaoqing_box"></div>
                </div>
                <div class="article_right">
                    <div class="side_userImf">
                        <div class="gyzz">关于作者</div>
                        <div class="sideuserImf">
                            <img src="images/1.png" alt="">
                            <div class="sideusercontent">
                                <div class="sideuser_name">${userarticle[i].author}</div>
                                <img src="images/22.png" alt="">
                                <div class="sideuser_job">web前端</div>
                            </div>

                        </div>
                        <div class="dianzan">
                            <img src="images/27.png" alt="">
                            <div class="hddz">获得点赞
                            <i class="hddz_Num">${userarticle[i].thumbUpNum}</i></div>
                        </div>
                        <div class="wz">
                            <img src="images/28.png" alt="">
                            <div class="wzbyd">文章被阅读<i>${userarticle[i].commentNum}</i></div>
                        </div>
                    </div>
                </div>
                 <div class="fanhui">◀</div>`
        main.appendChild(newpage)
        newlist.className = 'fixcontent'
        newlist.innerHTML = `<li class="fix_li fix_dianzan" badge="${userarticle[i].thumbUpNum}"></li>
                <li class="fix_li fix_diancai" badge="10"></li>
                <li class="fix_li fix_pinglun" badge="${userarticle[i].commentNum}"></li>
                <li class="fix_li fix_shoucang"></li>
                <li class="fix_li fix_jubao"></li>
                <li class="fix_li fix_fenxiang">分享</li>
                <li class="fix_li fix_weibo"></li>
                <li class="fix_li fix_QQ"></li>
                <li class="fix_li fix_weixin"></li>
                `
        main.appendChild(newlist)
        newscj.className = 'fix_shoucangjia'
        newscj.innerHTML = ` <div class="sjc_head">添加到收藏集</div>
                <div class="sjc_center">
                    <img src="images/29.png" alt="">
                    <div class="sjc_wz">点击下方文字新建收藏夹</div>
                </div>
                <div class="sjc_bottom">
                    <a href="
                            javascript:;" class="sjc">新建收藏集</a>
                    <input type="text " class="sjc_xinjian">
                    <button class="tj">添加</button>
                </div>`
        main.appendChild(newscj)

    }

}

function writeArt(object) {
    var newpoint = document.createElement('li')
    var newpage = document.createElement('div')
    var newlist = document.createElement('ul')
    var newscj = document.createElement('div')
    newpage.style.display = 'none'
    newlist.style.display = 'none'
    newscj.style.display = 'none'
    newpoint.className = 'list_main_li'
    newpoint.innerHTML = `<div  class="list_li_top">
                                <div class="articleImf">
                                <div class="articleauthorName">  ${object.name}</div>
                                <div class="articleTime">2天前</div>
                                <div class="articleTag">前端</div>
                            </div>
                            <h2 class="articleHead">
                               ${object.title}
                            </h2>
                            <div class="articleMain">
                                <div class="articleMain_left">
                                    <div class="articleMain_content"></div>
                                </div>
                                <div class="articleMain_right"><img src="${userdata.headImg}" alt="" class="article_img"></div>
                            </div></div>
       
                            <ul class="article_function">
                                        <li class="item_userFun art_dianzan">
                                            <img src="images/16.png" alt="" class="item_like">
                                            <span class="item_likeNum">0</span>
                                        </li>
                                        <li class="item_userFun">
                                            <i class="item_comment"></i>
                                            <span class="item_commentNum">0</span>
                                        </li>
                                        <li class="item_userFun">
                                            <i class="item_share"></i>
                                            <span class="item_shareFont">分享</span>
                                        </li>
                                    </ul>
                           `
    list_main.appendChild(newpoint)
    newpage.className = 'w article_content'
    newpage.innerHTML = `<div class="article_left">
                    <div class="article_userImf">
                        <img src="images/1.png" alt="" class="article_userImg">
                        <div class="article_user">
                            <div class="article_username">${object.name}</div>
                            <img src="images/22.png" alt="">
                            <div class="article_time">2021年4月23号&nbsp&nbsp&nbsp&nbsp阅读0</div>
                        </div>
                        <button class="guanzhu">关注</button>
                    </div>
                    <div class="article_title">
                         ${object.title}
                    </div>
                    <div class="articleContent"> ${object.content}</div>
                    <div class="user_comment">
                        <div class="user_comment_div">
                            <img src="images/1.png" alt="" class="articleuser_img">
                            <div class="article_comment">
                                <input type="text" class="article_usercomment" placeholder="输入评论...">
                                <div class="commentlan">
                                    <ul class="comment_biaoqing">
                                        <li class="biaoqing">
                                            <img src="images/25.png" alt="" class="comment_img">
                                            <div class="comment_text">表情</div>
                                        </li>
                                        <li class="tupian">
                                            <img src="images/26.png" alt="" class="comment_img">
                                            <div class="comment_text">图片</div>
                                        </li>
                                    </ul>
                                    <button class="pinglun">评论</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="biaoqing_box"></div>
                </div>
                <div class="article_right">
                    <div class="side_userImf">
                        <div class="gyzz">关于作者</div>
                        <div class="sideuserImf">
                            <img src="images/1.png" alt="">
                            <div class="sideusercontent">
                                <div class="sideuser_name">${object.name}</div>
                                <img src="images/22.png" alt="">
                                <div class="sideuser_job">web前端</div>
                            </div>

                        </div>
                        <div class="dianzan">
                            <img src="images/27.png" alt="">
                            <div class="hddz">获得点赞<i class="hddz_Num">0</i></div>
                        </div>
                        <div class="wz">
                            <img src="images/28.png" alt="">
                            <div class="wzbyd">文章被阅读<i>0</i></div>
                        </div>
                    </div>
                </div>
                 <div class="fanhui">◀</div>`
    main.appendChild(newpage)
    newlist.className = 'fixcontent'
    newlist.innerHTML = `<li class="fix_li fix_dianzan" badge="0"></li>
                <li class="fix_li fix_pinglun" badge="0"></li>
                <li class="fix_li fix_shoucang"></li>
                <li class="fix_li fix_jubao"></li>
                <li class="fix_li fix_fenxiang">分享</li>
                <li class="fix_li fix_weibo"></li>
                <li class="fix_li fix_QQ"></li>
                <li class="fix_li fix_weixin"></li>
                `
    main.appendChild(newlist)
    newscj.className = 'fix_shoucangjia'
    newscj.innerHTML = ` <div class="sjc_head">添加到收藏集</div>
                <div class="sjc_center">
                    <img src="images/29.png" alt="">
                    <div class="sjc_wz">点击下方文字新建收藏夹</div>
                </div>
                <div class="sjc_bottom">
                    <a href="
                            javascript:;" class="sjc">新建收藏集</a>
                    <input type="text " class="sjc_xinjian">
                    <button class="tj">添加</button>
                </div>`
    main.appendChild(newscj)
}



list_li_top[0].onclick = function() {
    article_content[0].style.display = 'block';
    fixcontent[0].style.display = 'block';
    main_main.style.display = 'none';
    nav.style.display = 'none';
    main.style.top = '61px';
    article_right.style.top = '81px';
}
fanhui[0].onclick = function() {
    article_content[0].style.display = 'none';
    fixcontent[0].style.display = 'none';
    main_main.style.display = 'block';
    nav.style.display = 'block';
    main.style.top = '107px';
}


function enter_fanhui() {
    var list_li_top = document.querySelectorAll('.list_li_top')
    var main_article = document.querySelectorAll('.article_content')
    var main_fanhui = document.querySelectorAll('.fanhui')
    var fix_content = document.querySelectorAll('.fixcontent')
    var articleContent = document.querySelectorAll('.articleContent');
    var articleMain_content = document.querySelectorAll('.articleMain_content')
    var newcomment = document.querySelectorAll('.newcomment')
    var article_userImg = document.querySelectorAll('.article_userImg')
    console.log();
    var getContent = {
        'userId': userId
    }
    for (var i = 1; i < main_fanhui.length - 1; i++) {
        var j = 1;
        getContent.articleId = storageData[n].articleId;
        getAxios('/article/getContent', getContent)
            .then(result => {
                articleContent[j].innerHTML = result.data.content;
                articleMain_content[j].innerHTML = result.data.content;
                if (result.data.authorAvatar == undefined || result.data.authorAvatar == 'undefined') {
                    article_userImg[j].src = 'images/1.png'
                } else {
                    article_userImg[j].src = "http://47.100.42.144:3389/" + result.data.authorAvatar;
                }
                j++;
                n++;
            })
        main_article[i].style.display = 'none';
        list_li_top[i].i = i;
        main_fanhui[i].i = i;
        fix_content[i].i = i;
        list_li_top[i].onclick = function() {
            main_article[this.i].style.display = 'block';
            fix_content[this.i].style.display = 'block';
            // newcomment[this.i].style.display = 'block';
            main_main.style.display = 'none';
            nav.style.display = 'none';
            main.style.top = '61px';
            article_right.style.top = '81px';
            Comment(this.i)
            List(this.i)

        }

        main_fanhui[i].onclick = function() {
            main_article[this.i].style.display = 'none';
            fix_content[this.i].style.display = 'none';
            main_main.style.display = 'block';
            nav.style.display = 'block';
            main.style.top = '107px';
        }
    }

}

function GetNEWARTICLE(name, array) {


    var newpoint = document.createElement('li')
    var newpage = document.createElement('div')
    var newlist = document.createElement('ul')
    var newscj = document.createElement('div')
    newpage.style.display = 'none'
    newlist.style.display = 'none'
    newscj.style.display = 'none'
    newpoint.className = 'list_main_li'
    newpoint.innerHTML = `<div  class="list_li_top">
                                <div class="articleImf">
                                <div class="articleauthorName">${array.author}</div>
                                <div class="articleTime">2天前</div>
                                <div class="articleTag">前端</div>
                            </div>
                            <h2 class="articleHead">
                               ${array.title}
                            </h2>
                            <div class="articleMain">
                                <div class="articleMain_left">
                                    <div class="articleMain_content"></div>
                                </div>
                                <div class="articleMain_right"><img src="images/1.png" alt="" class="article_img"></div>
                            </div></div>
       
                            <ul class="article_function">
                                        <li class="item_userFun art_dianzan">
                                            <img src="images/16.png" alt="" class="item_like">
                                            <span class="item_likeNum">${array.thumbUpNum}</span>
                                        </li>
                                        <li class="item_userFun art_diancai">
                                            <img src="images/31.png" alt="" class="item_dislike">
                                            <span class="item_dislikeNum">10</span>
                                        </li>
                                        <li class="item_userFun">
                                            <i class="item_comment"></i>
                                            <span class="item_commentNum">${array.commentNum}</span>
                                        </li>
                                        <li class="item_userFun">
                                            <i class="item_share"></i>
                                            <span class="item_shareFont">分享</span>
                                        </li>
                                    </ul>
                           `
    name.appendChild(newpoint)
    newpage.className = 'w article_content'
    newpage.innerHTML = `<div class="article_left">
                    <div class="article_userImf">
                        <img src="" alt="" class="article_userImg">
                        <div class="article_user">
                            <div class="article_username">${array.author}</div>
                            <img src="images/22.png" alt="">
                            <div class="article_time">2021年4月23号&nbsp&nbsp&nbsp&nbsp阅读${array.commentNum}</div>
                        </div>
                        <button class="guanzhu">关注</button>
                    </div>
                    <div class="article_title">
                         ${array.title}
                    </div>
                    <div class="articleContent"></div>
                    <div class="user_comment">
                        <div class="user_comment_div">
                            <img src="images/1.png" alt="" class="articleuser_img">
                            <div class="article_comment">
                                <input type="text" class="article_usercomment" placeholder="输入评论...">
                                <div class="commentlan">
                                    <ul class="comment_biaoqing">
                                        <li class="biaoqing">
                                            <img src="images/25.png" alt="" class="comment_img">
                                            <div class="comment_text">表情</div>
                                        </li>
                                        <li class="tupian">
                                            <img src="images/26.png" alt="" class="comment_img">
                                            <div class="comment_text">图片</div>
                                        </li>
                                    </ul>
                                    <button class="pinglun">评论</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="biaoqing_box"></div>
                </div>
                <div class="article_right">
                    <div class="side_userImf">
                        <div class="gyzz">关于作者</div>
                        <div class="sideuserImf">
                            <img src="images/1.png" alt="">
                            <div class="sideusercontent">
                                <div class="sideuser_name">${array.author}</div>
                                <img src="images/22.png" alt="">
                                <div class="sideuser_job">web前端</div>
                            </div>

                        </div>
                        <div class="dianzan">
                            <img src="images/27.png" alt="">
                            <div class="hddz">获得点赞
                            <i class="hddz_Num">${array.thumbUpNum}</i></div>
                        </div>
                        <div class="wz">
                            <img src="images/28.png" alt="">
                            <div class="wzbyd">文章被阅读<i>${array.commentNum}</i></div>
                        </div>
                    </div>
                </div>
                 <div class="fanhui">◀</div>`
    main.appendChild(newpage)
    newlist.className = 'fixcontent'
    newlist.innerHTML = `<li class="fix_li fix_dianzan" badge="${array.thumbUpNum}"></li>
                <li class="fix_li fix_diancai" badge="10"></li>
                <li class="fix_li fix_pinglun" badge="${array.commentNum}"></li>
                <li class="fix_li fix_shoucang"></li>
                <li class="fix_li fix_jubao"></li>
                <li class="fix_li fix_fenxiang">分享</li>
                <li class="fix_li fix_weibo"></li>
                <li class="fix_li fix_QQ"></li>
                <li class="fix_li fix_weixin"></li>
                `
    main.appendChild(newlist)
    newscj.className = 'fix_shoucangjia'
    newscj.innerHTML = ` <div class="sjc_head">添加到收藏集</div>
                <div class="sjc_center">
                    <img src="images/29.png" alt="">
                    <div class="sjc_wz">点击下方文字新建收藏夹</div>
                </div>
                <div class="sjc_bottom">
                    <a href="
                            javascript:;" class="sjc">新建收藏集</a>
                    <input type="text " class="sjc_xinjian">
                    <button class="tj">添加</button>
                </div>`
    main.appendChild(newscj)

}