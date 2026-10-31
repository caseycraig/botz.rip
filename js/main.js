"use strict";

(function () {
  var input = document.getElementById("fear");
  var readout = document.getElementById("fear-readout");
  var root = document.documentElement;

  if (!input) {
    return;
  }

  function clamp(value) {
    if (value < 0) {
      return 0;
    }
    if (value > 100) {
      return 100;
    }
    return value;
  }

  function phrase(value) {
    if (value < 35) {
      return "Closer to reality. Fear is quiet.";
    }
    if (value > 65) {
      return "Closer to rampaging. The extra volume is fear.";
    }
    return "Between reality and rampaging.";
  }

  function apply(value) {
    var fear = value / 100;
    var seam = 66 - fear * 32;
    root.style.setProperty("--fear", fear.toFixed(3));
    root.style.setProperty("--seam", seam.toFixed(2) + "%");
    input.setAttribute("aria-valuetext", phrase(value));
    if (readout) {
      readout.textContent = String(value);
    }
  }

  function readHash() {
    var hash = /(?:^|[#&])fear=(\d+)/.exec(window.location.hash || "");
    if (!hash) {
      return false;
    }
    input.value = String(clamp(parseInt(hash[1], 10)));
    return true;
  }

  input.addEventListener("input", function () {
    apply(clamp(Number(input.value)));
  });

  window.addEventListener("hashchange", function () {
    if (readHash()) {
      apply(clamp(Number(input.value)));
    }
  });

  readHash();
  apply(clamp(Number(input.value)));
})();
