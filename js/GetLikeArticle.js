var LIKEARTICLE = []
var ZANbox = document.querySelector('.ZANbox')



function GetLIKE() {

    getAxios("/user/getUserLikeArticles", userIdObj)
        .then(result => {
            LIKEARTICLE.length = result.data.length;
            for (var i = 0; i < result.data.length; i++) {
                GetNEWARTICLE(ZANbox, result.data[i])
            }
            var ZANEMPTYBOX = document.querySelector('.ZANEMPTYBOX')
            if (result.data != '') {
                ZANEMPTYBOX.style.display = 'none'
            }
        })
}