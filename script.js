$(document).ready(function(){ /* quando o documento (DOM) estiver carregado, executa o código que está dentro*/ 

   $(".red").click(function(){
      $(this).fadeOut(); 
   });
   
   $(".green").click(function(){
      $(".blue").hide();
   });
    
   $(".yellow").click(function(){
       $(".blue").fadeIn();
       $(".green").hide();
   });
    
   $(".blue").click(function(){
      $(".red, .green, .blue, .yellow").toggle();
   });
                  
});