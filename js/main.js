$(document).on('pagecreate' , '#layout' , function(){
    
    //(모바일) 스와이프슬라이드
    const x = $('#slide');
    $('#slideArea').swipeleft( function(){       
        x.stop().animate({left : '-800px'}, 1000, function(){
            x.css('left' , '-400px');
            x.append( x.children().first() );
        });
    });
    $('#slideArea').swiperight( function(){       
        x.stop().animate({left : 0 }, 1000, function(){
            x.css('left' , '-400px');
            x.prepend( x.children().last() );
        });
    });

}); //.............All End