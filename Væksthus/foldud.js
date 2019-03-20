$(function () {
  "use strict";
  var article = $('article');
  var main = article.find('main');
    var content = article.find('.content');
    content.slideUp(0);
    
    
    $('span').on('click',function(e){
        var thisArticle = $(this).parent().parent();
        var parent = thisArticle.find(".content");
        if(! thisArticle.hasClass('show')){
            parent.slideDown(200);
            thisArticle.addClass('show');
        }else{
            thisArticle.removeClass('show');
            parent.slideUp(200);
    
        }
            
            
        }
                
                                       
            
    ) })
    