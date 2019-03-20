$(function (){
   
    var i = $('header nav i');
    var nav = i.parent();
    
    $(window).on('resize', function(){
        nav.removeClass('show');
        
    })   
                      
    i.on('click',function(){
        nav.toggleClass('show');
        

    })

})
