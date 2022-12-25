$(document).ready(function () {
  $("#hide").click(function () {
    $("#myParag").hide();
  });
  $("#show").click(function () {
    $("#myParag").show();
  });
  $("#fade").click(function () {
    $("#div1").fadeToggle(2000);
    // $("#div2").fadeIn("slow");
    // $("#div3").fadeIn(3000);
  });
  // $("#slideDown").click(function () {
  //   $("#helloDown").slideDown(3000);
  // });
  $("#slideDown").click(function () {
    $("#helloDown").slideToggle("slow");
  });
  $("#animateBtn").click(function () {
    var div = $("#animateParag");
    div.animate({ left: "100px" }, "slow");
    div.animate({ fontSize: "3em" }, "slow");
  });
  $("#flip").click(function () {
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function () {
    $("#panel").stop();
  });
});
