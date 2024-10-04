function changeText() {
    document.getElementById('text').innerText = "You clicked the button!";
}


$('.nav').click(function() {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});
