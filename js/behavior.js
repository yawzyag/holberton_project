document.addEventListener("DOMContentLoaded", function(event) {
  var image = document.getElementById("smart_thumbnail");
  image.addEventListener("click", function() {
    if (image.className === "img-small") {
      image.className = "img-large";
    } else {
      image.className = "img-small";
    }
  });
});
