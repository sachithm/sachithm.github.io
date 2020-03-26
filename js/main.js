var i;
for (i = 0; i < document.getElementsByClassName("page-link").length; i++) {
  var colors = ["#ff0000", "#00ff00", "#0000ff"];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  document.getElementsByClassName("page-link")[i].style.color = random_color;
}

$("#dark").click(function() {
  $("body").toggleClass("dark");
  $("button").toggleClass("dark-but");
  $("a[href^='#']").toggleClass("bib-link");
  $("a[href^='#']").toggleClass("dark-bib");

  // var is_dark = $("body").hasClass("dark"); //get the state of current element
  // // var id = fav_program.data("id"); //get the ID from current element's data-id attribute
  // setMyCookie(is_dark); //pass both to setMyCookie function
});

// function setMyCookie(is_dark) {
//   if (is_dark) {
//     // if element is active, store its ID
//     $.cookie("fav_program_cookie", 1);
//   } else {
//     // otherwise remove cookie completely
//     $.removeCookie("fav_program_cookie");
//   }
// };
