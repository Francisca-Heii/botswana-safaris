$(document).ready(function () {
    $('.article-figure-1')
        .hover(() => {
            $('.article-image-hover-1').css('display', 'block');
        })
        .mouseleave(event => {
            const target = event.target;
            $('.article-image-hover-1').css('display', 'none');
        });
    $('.article-figure-2')
        .hover(() => {
            $('.article-image-hover-2').css('display', 'block');
        })
        .mouseleave(event => {
            const target = event.target;
            $('.article-image-hover-2').css('display', 'none');
        });
});
