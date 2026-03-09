// .merge

$("#qn1").text($.merge([1,2,3,45],[21,42,,4,5]))

//  .noop
$("#btn").on("click", $.noop);



// .parseHtml
function parseHtml(){
let ans=`<div class="result" id="qn3">Appended Div</div>`
let element = $.parseHTML(ans);
$('#parent').append(element)
}
parseHtml();

//.parseXML
let xml = "<title>Message From Xml FIle </title>";
let xmlDoc = $.parseXML( xml )
let $xmlQueryObject = $(xmlDoc)
let  $title = $xmlQueryObject.find( "title" );
  $("#qn4").text($title.text())

// $(".resultDiv").slideUp(1000).fadeOut(1000)

//.queue
$(".resultDiv").queue(function(next){
    console.log("Task 1");
    $(this).fadeIn(1000,next);
});

$(".resultDiv").queue(function(next){
    console.log("Task 2");
    $(this).slideUp(1000);
});

$(".resultDiv").dequeue(); 

//. data and removedata
$("#qn5").data("username","Zoro");
// $("#qn5").text($("#qn5").data("username"))
$("#qn5").removeData("username")
$("#qn5").removeData();
$("#qn5").text($("#qn5").data("username"))

