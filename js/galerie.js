function upDate(previewPic) {
  let image = document.getElementById("image");
  image.innerHTML = previewPic.alt;
  image.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  let image = document.getElementById("image");
  image.innerHTML = "Survolez une photo ci-dessous pour l'afficher ici.";
  image.style.backgroundImage = "url('')";
}

function addTabFocus() {
  console.log("Page chargée : ajout de tabindex sur les photos");

  let photos = document.querySelectorAll(".preview");
  for (let i = 0; i < photos.length; i++) {
    photos[i].setAttribute("tabindex", "0");
  }
}
