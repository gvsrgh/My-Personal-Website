$('h1').addClass('big-title margin-50');

$("a").attr("href","https://www.bing.com");

$("h1, button").click(function(){
    $("h1").css("color","purple");
    $("h1").fadeToggle();
});

$(document).keypress(function (event){
    $("h1").text(event.key);
    $("h1").slideup().animate({opacity: 0.5}).slidedown().animate({opacity: 100});
});

$("h1").on("mouseover",function (){
    $("h1").css("color","red");
    $("h1").hide();
    $("h1").show();
}); 

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");