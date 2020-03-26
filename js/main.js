// Randomises colours for index page list
var i;
for (i = 0; i < document.getElementsByClassName("page-link").length; i++) {
  var colors = ["#ff0000", "#00ff00", "#0000ff"];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  document.getElementsByClassName("page-link")[i].style.color = random_color;
}

// Keeps dark mode on between pages
var toggleSetting = localStorage.getItem("dark");
if (toggleSetting == "true") {
  darkify();

}

// Listens for dark mode click
$("#dark").click(function() {
  darkify();
});

// Function which toggles CSS between dark mode and light mode, and updates localStorage
function darkify() {
  $("body").toggleClass("dark");
  $("button").toggleClass("dark-but");
  $("a[href^='#']").toggleClass("bib-link");
  $("a[href^='#']").toggleClass("dark-bib");

  if ($("body").hasClass("dark")) {
    localStorage.setItem("dark", "true");
  } else {
    localStorage.setItem("dark", "false");
  }
}
