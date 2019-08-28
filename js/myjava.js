

function openNav() 
{
    document.getElementById("navBar").style.width = "210px";
    document.getElementById("main").style.marginLeft = "210px";
}

function closeNav() {
    document.getElementById("navBar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


$("a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})

/*
---------------------------------------------------------------------
                           End Of Navbar
---------------------------------------------------------------------
*/



$(document).ready(function()
{
                  
    $("#singers div:first").css("display","block");

    $("#singers h3").click(function()
    {

        $(this).next().slideToggle(500);

        $("#singers div").not($(this).next()).slideUp(500);
        
    });
                
});


/*
---------------------------------------------------------------------
                        End Of Singers Section
---------------------------------------------------------------------
*/



function countdown()
{

                var now = new Date().getTime();

				var eventTime = new Date("November 02, 2019 18:00:00").getTime();

				var counTime = eventTime - now;

				var days = Math.floor(counTime / (1000 * 60 * 60 * 24));
                var hours = Math.floor((counTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((counTime % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((counTime % (1000 * 60)) / 1000);


                document.getElementById("days").innerHTML="<h3>"+ days +" Days </h3>";
                
				document.getElementById("hours").innerHTML="<h3>"+ hours +" Hours </h3>";
                
                document.getElementById("minutes").innerHTML="<h3>"+ minutes +" Mins </h3>";
                
                document.getElementById("seconds").innerHTML="<h3>"+ seconds +" Secs </h3>";
                

                if (counTime < 0)        //try to enter old date 
                {
                    $(".time").css("display" , "none" )

                    $("#demo").html("<h1> EXPIRED </h1>")

                    document.getElementById("days").innerHTML="<h3> EXPIRED </h3>";
                
			    	document.getElementById("hours").innerHTML="<h3> EXPIRED </h3>";
                
                    document.getElementById("minutes").innerHTML="<h3> EXPIRED </h3>";
                
                    document.getElementById("seconds").innerHTML="<h3> EXPIRED </h3>";

                }

				setTimeout(countdown, 1000);
}

countdown();

        

/*
---------------------------------------------------------------------
                        End Of Singers Section
---------------------------------------------------------------------
*/



$(function()

{
    "use strick";
    var max =100;
    
    $("textarea").keyup(function()
    
    {
        var length=$(this).val().length;
        var character = max - length;
        
        console.log(character)
        
        if(character<=0)
            {
                 $("#char").text("Can't Type Max Lenght Reached");
                
            }

        else
            {
                $("#char").text(character);
            }
        
    });

    
});



/*
---------------------------------------------------------------------
                        End Of Contact Section
---------------------------------------------------------------------
*/




