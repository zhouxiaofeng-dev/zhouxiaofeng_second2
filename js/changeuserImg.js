var changeUserImg = document.querySelector('.changeUserImg')
var changeImgBtn = document.querySelector('.changeImgBtn')

changeImgBtn.onclick = function() {
    changeUserImg.click();
}
changeUserImg.onchange = function(e) {
    let file = e.target.files[0]
    let formImg = new FormData();
    formImg.append('avatar', file)
    formImg.append('userId', userId)

    axios.post('http://47.100.42.144:3389/user/changeUserAvatar', formImg)
        .then(result => {
            console.log(result.data.message);
            alert("修改头像成功")
        })
}