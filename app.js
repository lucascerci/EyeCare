$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

$('a[href=#target]').
    click(function(){
        var target = $('a[name=target]');
        if (target.length)
        {
            var top = target.offset().top;
            $('html,body').animate({scrollTop: top}, 1500);
            return false;
        }
});