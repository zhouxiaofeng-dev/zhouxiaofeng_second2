var WRITEARTICLE = [];
var WRITEBOX = document.querySelector('.WRITEBOX')

function GETWRITEARITECLE() {
    getAxios("/user/getUserWriteArticles", userIdObj)
        .then(result => {
            for (var i = 0; i < result.data.length; i++) {
                GetNEWARTICLE(WRITEBOX, result.data[i])
            }
            var EMPTYBOX = document.querySelector('.EMPTYBOX')
            var LISTBOX = document.querySelector('.LISTBOX')


            if (result.data != '') {
                LISTBOX.style.display = 'none'
                EMPTYBOX.style.display = 'none'
            }
        })
}