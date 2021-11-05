function Expand(param) {
  let title = document.getElementsByClassName("expansive-title");
  let panel = document.getElementsByClassName("panel");
  let currentPanel = panel[param];
  let setClasses = !currentPanel.classList.contains('active');
  let img = document.getElementsByClassName("arrow");

  setClass(panel, 'active', 'remove');
  setClass(title, 'active', 'remove');
  setClass(img, 'active', 'remove');



  if (setClasses) {
    currentPanel.classList.toggle("active");
    title[param].classList.toggle("active");
    img[param].classList.toggle("active");
  }
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}