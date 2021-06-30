/*jshint esversion: 6 */

$(document).ready(function () {
    //Places to explore hover
    $('.article-figure-1')
        .hover(() => {
            //Show the hover element
            $('.article-image-hover-1').css('display', 'block');
        })
        .mouseleave(event => {
             //Hide the hover element
            $('.article-image-hover-1').css('display', 'none');
        });

    $('.article-figure-2')
        .hover(() => {
             //Show the hover element
            $('.article-image-hover-2').css('display', 'block');
        })
        .mouseleave(event => {
             //Hide the hover element
            $('.article-image-hover-2').css('display', 'none');
        });

    //Wild life hover functionality
    $('.wildlife img')
        .mouseenter(event => {
            //Show the wildlife animal image when we hover
            let imageName = event.target.getAttribute('data-image');
            if (imageName) {
                const imageUrl = 'assets/images/animals/hover/' + imageName;
                $('.animal-tooltip img').attr('src', imageUrl);
                $('.animal-tooltip img').attr('width', '150px');
                $('.animal-tooltip').css('display', 'block');
                $('.animal-tooltip').css('top', event.pageY);
                $('.animal-tooltip').css('left', event.pageX);
            }
        })
        .mouseleave(() => {
            //Hide the wildlife animal image when we remove mouse
            $('.animal-tooltip').css('display', 'none');
        });

    $('#highlight a').click(function (e) {
        //Highlight the nav link when we click on respective link
        $('#highlight a').removeClass('current_page_item');
        $(this).addClass('current_page_item');
    });
});