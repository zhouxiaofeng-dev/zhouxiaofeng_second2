var user_ID = {
    'userId': userId
}

getAxios('/user/isLogin', user_ID)
    .then(result => {
        console.log(result.data.message);
        head_btn.style.display = 'none';
        userImf.style.display = 'block';
        login.style.display = 'none';
    })