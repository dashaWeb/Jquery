$('#date-now').text(new Date().getFullYear());

let text = $('#text').text();
// $('section:even').css('background','yellow')

// $(':header').css({
//     color:'red',
//     fontSize:'30px',
//     fontWeight:'bold'
// });

$('.par').addClass('active')
$('.par').removeClass('active')
// $('.popup-close').closest('.popup-wrapper').fadeOut(400);

// $('.popup-close').on('click',function(){
//     let div = $(this).parents('div');
//     console.log(div)
//     $(this).closest(div).fadeOut(400);
// })

// $('.popup-close').click(function(){
//     let div = $(this).parents('div');
//     console.log(div)
//     $(this).closest(div).fadeOut(400);
// })

// function checkToTop(){
//     $('#totop').css({
//         bottom: ($(window).scrollTop() > 100 ? '10px' : '-100px')
//     });
// }

// checkToTop();
// $(window).scroll(checkToTop);

// $('input:text').on('keydown input paste',function(){
//     console.log($(this).val());
// })

// $('.article').on('click',function(){
//     let active = $(this).parent().parent().find('.article.active')
//     console.log(active)
//     if(!$(this).hasClass('active')){
//         active.next().slideUp(200);
//         active.removeClass('active')
//         $(this).addClass('active').next().slideToggle(400)
//     }
// })

$('.article').on('click',function(){
    let active = $(this).parent().parent().find('.article.active')
    console.log(active)
    if(!$(this).hasClass('active')){
        active.next().fadeIn(200);
        active.removeClass('active')
        $(this).addClass('active').next().fadeOut(400)
    }
})
