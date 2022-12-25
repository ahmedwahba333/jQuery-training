$(document).ready(function () {
  $("#whatJquery0").click(function () {
    $("#showcon10").toggle("slow");
  });
  $("#whatJquery00").click(function () {
    $("#showcon100").slideToggle("slow");
  });
  $("#mySec1000").click(function () {
    $("#whatJquery000").fadeToggle("slow");
  });
  $("#mySec10000").click(function () {
    $("#whatJquery0000").hide("slow", function () {
      alert("The Content is now hidden");
    });
  });
  $("#mySec100000").click(function () {
    $("#whatJquery00000").css("color", "brown").slideUp(2000).slideDown(2000);
  });
  $("#mySec1000000").click(function () {
    $("#whatJquery000000").slideUp(5000);
  });
  $("#btn1").click(function () {
    $("p").append(" Appended text.");
  });

  $("#btn2").click(function () {
    $("ol").append("<li>Appended course</li>");
  });
  $("#btn3").click(function () {
    $("p").prepend(" Prepended text.");
  });

  $("#btn4").click(function () {
    $("ol").prepend("<li>Prepended course</li>");
  });
  $("#btn5").click(function () {
    $("#myImg").before(
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7wHRBv4IGbFSyhj-KLH03begekd-J3K0ug&usqp=CAU' />"
    );
  });

  $("#btn6").click(function () {
    $("#myImg").after(
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnoT4fLfxK0uwSCq-YXixa7IqrWK7ZzYdzA&usqp=CAU' />"
    );
  });
  $("#btn7").click(function () {
    $("#div9").remove();
  });
  $("#btn8").click(function () {
    $("#div9").empty();
  });
});
