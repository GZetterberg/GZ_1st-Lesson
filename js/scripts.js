// console.log(3+1);
// alert("hello Word!");
// alert(2+2);
// alert(4*"2");
// alert("welcome to portland");
// $(document).ready(function() {
//   alert($("#css-item").text());
  // alert("Jquery is working");
// })


$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})
