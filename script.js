const _ = (e) => document.querySelector(e);
const render = _(".result");

// create video
const createVideo = (data) => {
  let v = document.createElement("video");
  v.id = "instavideo";
  v.src = data.content;
  v.controls = true;
  v.autoplay = true;

  // create info
  let info = document.createElement("h6");
  info.textContent =
    "Click on the Right Three dots ⋮ on video then click on Download and its done.";

  render.innerHTML = "";
  render.appendChild(v);
  render.appendChild(info);
};
// create image
const createImg = (data) => {
  // create image
  let i = document.createElement("img");
  i.id = "instaImg";
  i.src = data.content;

  // create info
  let info = document.createElement("p");
  info.textContent =
    "Click the right button on the image and select save image or in mobile click and hold on image then select save image.";

  render.innerHTML = "";
  render.appendChild(i);
  render.appendChild(info);
};

// extract html
const getMedia = () => {
  render.innerHTML = "<div class='image-placeholder'></div>";
  // get input value
  let url = _("input").value;
  if (url) {
    fetch(url)
      .then((r) => r.text())
      .then((r) => {
        // render html
        render.innerHTML = r;
        // wait, find meta and create video or image
        let w = setTimeout(() => {
          let v = _('meta[property="og:video"]');
          if (v) {
            createVideo(v);
          } else {
            let img = _('meta[property="og:image"]');
            if (img) {
              createImg(img);
            } else {
              document.body.innerHTML = body;
              alert("Error extracting Instagram image / video.");
            }
          }
          clearTimeout(w);
        }, 200);
      });
  } else {
    _("input").setAttribute(
      "placeholder",
      "Invalid address, use a proper Insagram link"
    );
  }
};

// copyright

var fullYearCopyright = $("#fullYearCopyright"),
  getFullYearDate = new Date().getFullYear();

fullYearCopyright.text(getFullYearDate);

// if offline

function myFunction() {
  if (!navigator.onLine) {
    alert("You are not connected to internet, Plz connect to the internet");
  }
}
Object.myFunction();
window.myFunction();
