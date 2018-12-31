document.addEventListener("DOMContentLoaded", function() {
  const image = document.getElementById("smart_thumbnail");
  const open_menu = document.getElementById("open-slide-menu");
  const close_menu = document.getElementById("close_menu");
  // console.log(open_menu);
  open_menu.addEventListener("click", () => {
    document.getElementById("side-menu").style.height = "320px";
  });

  close_menu.addEventListener("click", () => {
    document.getElementById("side-menu").style.height = "0";
  });

  image.addEventListener("click", () => {
    if (image.className === "img-small") {
      image.className = "img-large";
    } else {
      image.className = "img-small";
    }
  });
});
