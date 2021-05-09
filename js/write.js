var tool_ul = document.getElementsByClassName('tool_ul');
var tool_img = document.querySelectorAll('.tool_img');
var tool_li = document.querySelectorAll('.tool_li')
var setWrite = document.querySelector('.setWrite');
var writeArticle = document.querySelector('.writeArticle')
var page2title = document.querySelector('.page2title')
var page2Main = document.querySelector('.page2Main')
var writemain = document.querySelector('.write-main')
var writeArtID = document.querySelector('.writeArtID')
var writeuserID = document.querySelector('.writeuserID')

setWrite.onclick = function() {
    page_1.style.display = 'none';
    page_2.style.display = 'block';
}
writemain.onclick = function() {
    page_1.style.display = 'block';
    page_2.style.display = 'none';
}

function imgmouse(name, a) {
    nod = a - 17;
    var str = 'onload/' + nod + '.png';
    var std = 'onload/' + a + '.png';
    name.onmouseover = function() {
        this.src = str;
    }
    name.onmouseout = function() {
        this.src = std;
    }
}
imgmouse(tool_img[0], 21);
for (var i = 0; i < tool_img.length; i++) {
    var non = 21 + i;
    imgmouse(tool_img[i], non);
}

function tipout(name, inner) {
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    div1.className = 'page2Tip'
    div2.className = 'page2Tri'
    div1.style.display = 'none';
    div2.style.display = 'none';
    name.appendChild(div1);
    name.appendChild(div2);
    div1.innerHTML = inner;
    name.onmouseover = function() {
        div1.style.display = 'block';
        div2.style.display = 'block';

    }
    name.onmouseout = function() {
        div1.style.display = 'none';
        div2.style.display = 'none';

    }
}

// tipout(tool_li[0], '代码');
// tipout(tool_li[1], '牛逼');
var arc = ['标题', '粗体', '斜体', '引用', '链接', '图片', '代码', '代码块', '无序排列', '有序列表', '删除线', '任务列表', '表格', '公式', '图表', '主题', '样式'];
for (var i = 0; i < tool_li.length; i++) {
    tipout(tool_li[i], arc[i]);
}



writeArticle.onclick = function() {
    // 传入存储空间的对象数组中保存数据
    var Writestorage = {
            'articleId': writeArtID.value,
            'author': userdata.nickname,
            'authorId': writeuserID.value,
            'commentNum': 0,
            'isDislike': false,
            'isThumbUp': false,
            'thumbUpNum': 0,
            'title': page2title.value
        }
        // 传入文章的数据所生成的对象
    var Write = {
        'userId': userId,
        'title': '',
        'content': ''
    }
    Write.title = page2title.value;
    Write.content = page2Main.value;
    postAxios('/article/writeArticle', Write)
        .then(result => {
            console.log(result.message);
            if (result.message == '提交成功') {
                Write.name = userdata.nickname;
                storageData[9] = Writestorage;
                writeArt(Write)
                enter_fanhui();
                console.log(storageData[9].articleId);
                page_1.style.display = 'block'
                page_2.style.display = 'none'
            }
        })
}