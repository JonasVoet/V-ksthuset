$(function(){
  
var $overlay = $('<div id="overlay"></div>');
var $wrap = $('<div class="wrap"></div>');
var $image = $('<img>');
var $close = $('<a href="#" class="close">×</a>');
    
$overlay.append($wrap);
$wrap.append($image);
$wrap.append($close);
$('body').append($overlay);
    
    
//klik på billeder der åbner lightbox
    
$('.gallery-item').on('click', 'a', function(event){
    event.preventDefault();
    
    var imageSrc = $(this).attr('href');
    $image.attr('src', imageSrc);
    
    $overlay.show();
    
});
    
    
//knap der lukker billede
    
$close.click(function(){
    $overlay.hide();
    return false; 
});   
    
$overlay.click(function(){ 
    var hoveringImg = $image.is(":hover");
    if(!hoveringImg){
        $overlay.hide();
        return false; 
    }
});
    
    
});