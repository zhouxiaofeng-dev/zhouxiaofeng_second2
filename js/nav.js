var nav_main_a = document.querySelector('.nav_main').querySelectorAll('a');

for (var i = 0; i < nav_main_a.length; i++) {
    nav_main_a[i].onclick = function() {
        for (var i = 0; i < nav_main_a.length; i++) {
            nav_main_a[i].style.color = '#666';
        }
        this.style.color = '#007fff';
    }

}