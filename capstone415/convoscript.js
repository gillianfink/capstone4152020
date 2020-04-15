$(document) .ready(function() {
  
  
    var o= true;
    $("#termA").hover(function(){
        if (o==true) {
            
            $("#termA").css("color", "#DE6E64");
            o=false;
        }
        else {

            $("#termA").css("color", "#48AF94");
            o=true;
        }    
    });


  
     var termclick= true;
    $("#termA").click(function(){
        if (termclick==true) {
            
            $("#termA").css("top", "23%");
            termclick=false;
        }
        else {
            $("#termA").css("top", "48%");
            
            termclick=true;
        }    
    });



  
  
  
       var termBclick= true;
    $(".term").click(function(){
        if (termBclick==true) {
          
          $( "#termB" ).animate({
              opacity: "1"
              }, 200);
            
            $("#termB").css("top", "61%");
            $("#termB").css("visibility", "visible");
            termBclick=false;
        }
        else {
          
          $( "#termB" ).animate({
              opacity: "0"
              }, 200);
          
            $("#termB").css("top", "35%");
            $("#termB").css("visibility", "hidden");
            
            termBclick=true;
        }    
    });
  
         var di= true;
    $(".term").click(function(){
        if (di==true) {
          
          $( ".dialect" ).animate({
              opacity: "1"
              }, 800);
      
            di=false;
        }
        else {
          
          $( ".dialect" ).animate({
              opacity: "0"
              }, 800);
          
           
            di=true;
        }    
    });
  
  
  
  

  jQuery(function( $ ) {
    var keymap = {};

    // LEFT
    keymap[ 37 ] = "#prev";
    // RIGHT
    keymap[ 39 ] = "#next";

    $( document ).on( "keyup", function(event) {
        var href,
            selector = keymap[ event.which ];
        // if the key pressed was in our map, check for the href
        if ( selector ) {
            href = $( selector ).attr( "href" );
            if ( href ) {
                // navigate where the link points
                window.location = href;
            }
        }
    });
});
  
  

  
  
}); 