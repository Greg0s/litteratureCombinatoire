$(document).ready(function(){  

    $('.dropbtn, .secondBar, .dopbtn::before').hover(function() {
        $('.secondBar').addClass('visible');
    },

    // mouse out
    function() {
        $('.secondBar').removeClass('visible');
    });

})