var i;
for (i = 0; i < document.getElementsByClassName("page-link").length; i++) {
  var colors = ["#ff0000", "#00ff00", "#0000ff"];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  document.getElementsByClassName("page-link")[i].style.color = random_color;
}

$("#dark").click(function() {
  $("body").toggleClass("dark");
  $(".nav-link").toggleClass("dark-but");
})