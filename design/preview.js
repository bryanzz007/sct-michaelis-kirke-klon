(function () {
  "use strict";

  var scriptUrl = document.currentScript && document.currentScript.src
    ? new URL(document.currentScript.src, document.baseURI)
    : null;

  function initializePreview() {
    document.body.classList.add("michaelis-redesign");

    if (scriptUrl && !document.querySelector('link[href*="clone/michaelis.css"]')) {
      var stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = new URL("michaelis.css", scriptUrl).href;
      document.head.appendChild(stylesheet);
    }

    var notice = document.createElement("div");
    notice.className = "clone-project-notice";
    notice.setAttribute("role", "note");
    notice.innerHTML = '<strong>Hannerup Kirke</strong><span> · OBS: Arbejdsprojekt — gå i stedet til </span><a href="https://hannerup-kirke.dk">hannerup-kirke.dk</a>';
    document.body.insertBefore(notice, document.body.firstChild);

    Array.prototype.forEach.call(document.forms, function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        window.alert("Denne formular er slået fra i arbejdsudgaven.");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePreview);
  } else {
    initializePreview();
  }
})();
