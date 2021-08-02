$(document).ready(function() {

    $('.login').click(function() {
        $('#login').modal('toggle');
    });

    $('.reserve').click(function() {
        $('#reservation').modal('toggle');
    });

    $("#mycarousel").carousel({
        interval: 2000
    });

    $("#carousel-pause").click(function() {
        $("#mycarousel").carousel('pause');
    });

    $("#carousel-play").click(function() {
        $("#mycarousel").carousel('cycle');
    });
});