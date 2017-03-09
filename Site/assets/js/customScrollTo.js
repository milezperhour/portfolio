window.onload=function()
{
    setTimeout(function()
    {
        window.scrollTo(0, 0);
    }, 0);
};

$(document).ready(function($) {
    $(".scrollto").click(function(event) {
        event.preventDefault();

        var defaultAnchorOffset = 0;

        var anchor = $(this).attr('data-attr-scroll');

        var anchorOffset = $('#'+anchor).attr('data-scroll-offset');
        if (!anchorOffset)
            anchorOffset = defaultAnchorOffset;

        $('html,body').animate({
            scrollTop: $('#'+anchor).offset().top - anchorOffset
        }, 500);
    });
});