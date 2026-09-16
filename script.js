/* Two jobs only: remember the theme, and draw the gait curve once. */

(function () {
  "use strict";

  var root = document.documentElement;
  var btn = document.getElementById("theme");

  function stored() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }

  function save(value) {
    try { localStorage.setItem("theme", value); } catch (e) { /* private mode */ }
  }

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function isDark() {
    var set = root.getAttribute("data-theme");
    if (set) return set === "dark";
    return systemPrefersDark();
  }

  function label() {
    if (!btn) return;
    var dark = isDark();
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  var saved = stored();
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  label();

  if (btn) {
    btn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      save(next);
      label();
    });
  }

  // One orchestrated moment on load, skipped entirely if motion is unwelcome.
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var line = document.querySelector(".cycle-line");
  if (line && !reduced) line.classList.add("draw");
})();
