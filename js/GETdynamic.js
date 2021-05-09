function GUANZHU(author) {
    var Dongtai = document.querySelector('.Dongtai')
    newbox = document.createElement('div')
    newbox.className = 'fullbox'
    newbox.innerHTML = `<img src="${userdata.headImg}" alt="" class="dynamicImg">
                            <div class="synamicNew">${userdata.nickname}关注了${author}</div>`
    Dongtai.appendChild(newbox)
}

function CANCEL(author) {
    var Dongtai = document.querySelector('.Dongtai')
    newbox = document.createElement('div')
    newbox.className = 'fullbox'
    newbox.innerHTML = `<img src="${userdata.headImg}" alt="" class="dynamicImg">
                            <div class="synamicNew">${userdata.nickname}取消关注了${author}</div>`
    Dongtai.appendChild(newbox)
}

function WRITE(array) {
    var Dongtai = document.querySelector('.Dongtai')
    newbox = document.createElement('div')
    newbox.className = 'fullbox'
    newbox.innerHTML = `<img src="${userdata.headImg}" alt="" class="dynamicImg">
                            <div class="synamicNew">${userdata.nickname}写了这篇文章</div>`
    Dongtai.appendChild(newbox)
    writeArt(Dongtai, array)
    enter_fanhui();

}


function ZAN(array) {
    var Dongtai = document.querySelector('.Dongtai')
    newbox = document.createElement('div')
    newbox.className = 'fullbox'
    newbox.innerHTML = `<img src="${userdata.headImg}" alt="" class="dynamicImg">
                            <div class="synamicNew">${userdata.nickname}赞了这篇文章</div>`
    Dongtai.appendChild(newbox)
    GetNEWARTICLE(Dongtai, array)
}

function comment(comment, array) {
    var Dongtai = document.querySelector('.Dongtai')
    newbox = document.createElement('div')
    newbox.className = 'fullbox'
    newbox.innerHTML = `<img src="${userdata.headImg}" alt="" class="dynamicImg">
                            <div class="synamicNew">${userdata.nickname}对这篇文章评论了${comment}</div>`
    Dongtai.appendChild(newbox)
    GetNEWARTICLE(Dongtai, array)
}