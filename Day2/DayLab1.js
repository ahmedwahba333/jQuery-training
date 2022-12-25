$(document).ready(function () {
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
