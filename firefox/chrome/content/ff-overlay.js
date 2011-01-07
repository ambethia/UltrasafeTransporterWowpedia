ut_wowpedia.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ ut_wowpedia.showFirefoxContextMenu(e); }, false);
};

ut_wowpedia.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-ut_wowpedia").hidden = gContextMenu.onImage;
};

window.addEventListener("load", ut_wowpedia.onFirefoxLoad, false);
