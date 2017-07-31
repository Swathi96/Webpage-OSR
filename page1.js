$('.recipe').click(function() {
  x = document.getElementById("detail");
    if (x.className == "recipe") {
        x.className += " recipeDetail";
    } else {
        x.className = "recipe";
    }
});
