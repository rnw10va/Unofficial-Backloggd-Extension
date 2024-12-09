window.addEventListener('click', function(e) {
    if(e.target.closest){
        targetLink = e.target.closest("a").href;
        e.preventDefault();
        this.window.open(targetLink, "_self");
    }
});