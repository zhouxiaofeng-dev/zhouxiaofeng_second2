function GuanZhu() {
    var guanzhu = document.querySelectorAll('.guanzhu')
    var num = [];
    for (var i = 1; i < guanzhu.length; i++) {
        num[i] = 1;
        guanzhu[i].i = i;
        guanzhu[i].onclick = function() {
            console.log(articleUserId[this.i]);
            console.log(userarticle[this.i]);
            if (num[this.i] % 2 == 1 || num[this.i] % 2 == 1) {
                var GuanzhuUser = {
                    'userId': userId,
                    'subscribeId': articleUserId[this.i]
                }
                postAxios('/user/subscribeSomeone', GuanzhuUser)
                    .then(result => {
                        console.log(result);
                        this.innerHTML = '已关注'
                    })
                num[this.i]++;
                ADDGUANZHU(userarticle[this.i], guanzhu[this.i], false)
                GUANZHU(userarticle[this.i].author)
            } else {
                var GuanzhuUser = {
                    'userId': userId,
                    'subscribeId': articleUserId[this.i]
                }
                postAxios('/user/cancelSubscribe', GuanzhuUser)
                    .then(result => {
                        console.log(result);
                        this.innerHTML = '关注'
                    })
                num[this.i]++;
                ADDGUANZHU(userarticle[this.i], guanzhu[this.i], true)
                CANCEL(userarticle[this.i].author)
            }
        }

    }
}
var GUANZHUUSERBOX = document.querySelector('.GUANZHUUSERBOX')
var GUANZHUWOBOX = document.querySelector('.GUANZHUWOBOX')
var userGuanzhu = document.querySelector('.userGuanzhu')
var meGuanzhu = document.querySelector('.meGuanzhu')
meGuanzhu.onclick = function() {
    GUANZHUWOBOX.style.display = 'block'
    GUANZHUUSERBOX.style.display = 'none'
}
userGuanzhu.onclick = function() {
    GUANZHUWOBOX.style.display = 'none'
    GUANZHUUSERBOX.style.display = 'block'
}

// 获取用户的关注者
getAxios("/user/getSubscribeMe", userIdObj)
    .then(result => {
        GuanzhuMe(result.data);
    })

function GuanzhuMe(array) {
    var Guanzhu = document.querySelector('.Guanzhu');
    var GUANZHUWOBOX = document.querySelector('.GUANZHUWOBOX')
    var GuanzhuUser = document.querySelector('.GuanzhuUser')
    var GuanzhuMe = document.querySelector('.GuanzhuMe')
    if (array != '') {
        GuanzhuMe.style.display = 'none'
        for (var i = 0; i < array.length; i++) {
            newGuanzhume = document.createElement('ul')
            newGuanzhume.className = 'newGuanZhuBox'
            newGuanzhume.innerHTML = ` <li class="GuanZhuUserHead">
                                <img src="images/1.png" alt="">
                            </li>
                            <li class="GuanZhuUserImf">
                                <div class="GuanZhuUserName_Rank">
                                    <div class="GuanZhuUserName">${array[i].subName}</div>
                                    <img class="GuanZhuUserRank" src="images/22.png"></img>
                                </div>
                            </li>
                            <button class="GuanZhuBtn">关注</button>`
            GUANZHUWOBOX.appendChild(newGuanzhume)
            var DeleteBtn = newGuanzhume.querySelector('.GuanZhuBtn')
            DeleteBtn.onclick = function() {
                this.innerHTML = '已关注'
            }
        }
    }
}

//获取用户关注的人
getAxios("/user/getSubscribeMe", userIdObj)
    .then(result => {
        GuanzhuUser(result.data)
    })

function GuanzhuUser(array) {
    var GUANZHUUSERBOX = document.querySelector('.GUANZHUUSERBOX')
    var Guanzhu = document.querySelector('.Guanzhu');
    var GuanzhuUser = document.querySelector('.GuanzhuUser');
    if (array != '') {
        GuanzhuUser.style.display = 'none'
        for (var i = 0; i < array.length; i++) {
            newGuanzhuUser = document.createElement('ul')
            newGuanzhuUser.className = 'newGuanZhuBox'
            newGuanzhuUser.innerHTML = ` <li class="GuanZhuUserHead">
                                <img src="images/1.png" alt="">
                            </li>
                            <li class="GuanZhuUserImf">
                                <div class="GuanZhuUserName_Rank">
                                    <div class="GuanZhuUserName">${array[i].subName}</div>
                                    <img class="GuanZhuUserRank" src="images/22.png"></img>
                                </div>
                            </li>
                            <button class="GuanZhuBtn">已关注</button>`
            GUANZHUUSERBOX.appendChild(newGuanzhuUser);
            var DeleteBtn = newGuanzhuUser.querySelector('.GuanZhuBtn')
            var parent = DeleteBtn.parentNode;
            var num = 1;
            DeleteBtn.onclick = function() {
                if (num % 2 == 1) {
                    this.innerHTML = '关注'
                    GUANZHUUSERBOX.removeChild(newGuanzhuUser)
                    num++;
                } else {
                    this.innerHTML = '已关注'
                    GUANZHUUSERBOX.appendChild(newGuanzhuUser);
                    num++;
                }
            }
        }
    }
}

function ADDGUANZHU(array, name, flag) {
    var GUANZHUUSERBOX = document.querySelector('.GUANZHUUSERBOX')

    newGuanzhuUser = document.createElement('ul')
    newGuanzhuUser.className = 'newGuanZhuBox'
    newGuanzhuUser.innerHTML = ` <li class="GuanZhuUserHead">
                                <img src="images/1.png" alt="">
                            </li>
                            <li class="GuanZhuUserImf">
                                <div class="GuanZhuUserName_Rank">
                                    <div class="GuanZhuUserName">${array.author}</div>
                                    <img class="GuanZhuUserRank" src="images/22.png"></img>
                                </div>
                            </li>
                            <button class="GuanZhuBtn">已关注</button>`
    if (flag == false) {
        GUANZHUUSERBOX.appendChild(newGuanzhuUser);
    }


    var DeleteBtn = newGuanzhuUser.querySelector('.GuanZhuBtn')
    var num = 1;
    DeleteBtn.onclick = function() {
        if (num % 2 == 1) {
            this.innerHTML = '关注'
            GUANZHUUSERBOX.removeChild(newGuanzhuUser)
            num++;
            name.innerHTML = '关注'

        } else {
            this.innerHTML = '已关注'
            GUANZHUUSERBOX.appendChild(newGuanzhuUser);
            num++;
            name.innerHTML = '已关注'
        }
    }
}

function REMOVEGUANZHU() {

}