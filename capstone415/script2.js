$(document) .ready(function() {
  

  $(document).hover(function() {
    $('.call').addClass('animated');
});

  

  var g= true;
    $(".navbutton").hover(function(){
        
        if (g==true) {
            $(".navbutton").css("width", "85px");
            g=false;
        }
        else {
            $(".navbutton").css("width", "75px");
            g=true;
        }
    });  
  
  
   var gg= true;
    $(".navbutton").click(function(){
        if (gg==true) {
            $( ".nav" ).css("position", "fixed");
            $( ".nav" ).css("display", "inherit");
            
            gg=false;
        }
        else {

            $( ".nav" ).css("display", "none");

            gg=true;
            
        }   
    });
  
  
    var o= true;
    $("#termA2").hover(function(){
        if (o==true) {
            
            $("#termA2").html('C<a class="underline">aw</a>ffee');
            $("#preview").html('New York');
            $( ".underline" ).animate({
              color: "#DE6E64"
              }, 100);
            o=false;
        }
        else {
            $("#termA2").html('Coffee');
            $("#preview").html('Standard');
            $( ".underline" ).animate({
              color: "#1D7FCA"
              }, 100);
            o=true;
        }    
    });
  
  
  
     var termclick= true;
    $("#termA2").click(function(){
        if (termclick==true) {  

            $( "#termA2" ).animate({
              opacity: "0"
              }, 0);
            $( "#termB3" ).animate({
              opacity: "1"
              }, 50);
            $( ".popup" ).animate({
              opacity: "1"
              }, 100);
            $( ".tint" ).animate({
              opacity: ".25"
              }, 2000);
            $("#termB3").css("top", "8%");
            $( "#termB4" ).animate({
              opacity: "1"
              }, 200);
            $("#termB4").css("top", "57%");

            $('.popup').css('zIndex', 1);
            $('#termB3').css('zIndex', 3);
            $('.details').css('zIndex', 3);
            $('#termB4').css('zIndex', 3);
            $('.tint').css('zIndex', 0);

             $( "#newyork" ).animate({
              opacity: "1"
              }, 800);

             $( "#standard" ).animate({
              opacity: "1"
              }, 800);

          $( ".details" ).animate({
              opacity: "1"
              }, 800);

          $( "#lingfeature" ).animate({
              opacity: "1"
              }, 800);

          $( "#next" ).animate({
              opacity: "0"
              }, 100);

          $( "#prev" ).animate({
              opacity: "0"
              }, 100);

          $( "#preview" ).animate({
              opacity: "0"
              }, 50);

        }    
    });



    var termclick= true;
    $(".close").click(function(){
        if (termclick==true) {  

        $( "#termA2" ).animate({
              opacity: "1"
              }, 100);
        $( "#termB3" ).animate({
              opacity: "0"
              }, 20);
        $( ".popup" ).animate({
              opacity: "0"
              }, 100);
            $( ".tint" ).animate({
              opacity: "0"
              }, 20);
            $("#termB3").css("top", "33%");
            $( "#termB4" ).animate({
              opacity: "0"
              }, 20);
            $("#termB4").css("top", "33%");

            $( "#newyork" ).animate({
              opacity: "0"
              }, 800);

            $( "#standard" ).animate({
              opacity: "0"
              }, 800);

          $( ".details" ).animate({
              opacity: "0"
              }, 0);

          $( "#lingfeature" ).animate({
              opacity: "0"
              }, 800);
            $('.popup').css('zIndex', -1);
            $('#termB3').css('zIndex', 1);
            $('.details').css('zIndex', 2);
            $('#termB4').css('zIndex', 1);
            $('.tint').css('zIndex', -2);

            $( "#next" ).animate({
              opacity: "1"
              }, 500);

            $( "#prev" ).animate({
              opacity: "1"
              }, 500);

            $( "#preview" ).animate({
              opacity: "1"
              }, 1200);


         }    
    });




var audio = $(".term")[0];
$(".term").mouseenter(function() {
  audio.play();
});
  
  
  
    //    var termBclick= true;
    // $("#termA").click(function(){
    //     if (termBclick==true) {
          
    //       $( "#termB2" ).animate({
    //           opacity: "1"
    //           }, 200);
            
    //         ("#termB2").css("top", "20%");$
    //         $("#termB2").css("visibility", "visible");

    //         termBclick=false;
    //     }
  
    // });


    //    var termBclose= true;
    // $("#termB2").click(function(){
    //     if (termBclose==true) {
          
    //       $( "#termB2" ).animate({
    //           opacity: "1"
    //           }, 200);
            
    //         $("#termB2").css("top", "28%");
    //         $("#termB2").css("visibility", "hidden");
            

    //         $("#termA").css("top", "45%");

    //         termBclose=false;
    //     }
    //     else {
          
    //       $( "#termB2" ).animate({
    //           opacity: "0"
    //           }, 200);
          
    //         $("#termB2").css("top", "51%");
    //         $("#termB2").css("visibility", "visible");
            

    //         $("#termA").css("top", "45%");
            
    //         termBclose=true;
    //     }    
    // });
  

  

  
  

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


       var photo= true;
    $(".body").hover(function(){
        if (photo==true) {
          
          $( ".termcontainer" ).animate({
              opacity: "1"
              }, 500);

          $( ".overlay" ).animate({
              opacity: "1"
              }, 100);

          $( ".leftcolumn1" ).animate({
              opacity: "0"
              }, 500);

          $( "#next" ).animate({
              opacity: "1"
              }, 1000);

          $( "#prev" ).animate({
              opacity: "1"
              }, 1000);

          $( "#preview" ).animate({
              opacity: "1"
              }, 200);

            photo=false;
        }
        else {
          
         // $( ".termcontainer" ).animate({
         //      opacity: "0"
         //      }, 500);

         //  $( ".overlay" ).animate({
         //      opacity: "0"
         //      }, 100);

         //  $( ".leftcolumn1" ).animate({
         //      opacity: "1"
         //      }, 500);

         //  $( "#next" ).animate({
         //      opacity: "0"
         //      }, 100);
          
            
            photo=true;
        }    
    });


    //   $("#termA").hover(function(){
    //   $(".underline").animate({ 
        
    //     borderBottom :'2px solid #3399FF',
    //     width:'46%' 
        
        
    //   }, 500 );
    // });
  
 

  
}); 