import $ from 'jquery'

$(function(){

    $('.logo').hover(
        function(){
            $('body').addClass('has-background-hover')
        },
        function(){
            $('body').removeClass('has-background-hover')
        }
    )
    $('.logo').click(function() {
        $('body').toggleClass('has-background');
    });

});
