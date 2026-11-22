/* Web version helper, loaded inside app.html. The page around it (index.html) scales the
   2732 x 2048 iPad layout to fit the browser window. This file adds a start screen, so that
   the opening animation can play with sound, and moves to the chapter menu when it ends. */
(function () {
  function startScreen() {
    var o = document.createElement('div');
    o.id = 'web-start';
    o.innerHTML = '<div class="web-start-box"><p class="web-start-kicker">Iowa State University Extension and Outreach</p>' +
      '<h1>Creating the People’s College</h1><p class="web-start-sub">The Land Grant Legacy. An interactive history app designed by Cyndi Wiley for Iowa State University Extension and Outreach, first shown on an iPad kiosk.</p>' +
      '<button type="button" id="web-start-btn">Start the app</button>' +
      '<p class="web-start-note">This app plays sound. Use the buttons inside the app to move between chapters, and the house icon to return to the chapter menu.</p></div>';
    document.body.appendChild(o);
    var btn = document.getElementById('web-start-btn');
    try { btn.focus({ preventScroll: true }); } catch (e) {}
    btn.addEventListener('click', function () {
      o.parentNode.removeChild(o);
      /* unlock every audio and video element inside this click, for browsers that block sound without a gesture */
      var media = document.querySelectorAll('.page video, .page audio');
      for (var i = 0; i < media.length; i++) {
        try { var p = media[i].play(); if (p && p.catch) p.catch(function () {}); media[i].pause(); } catch (e) {}
      }
      /* rerun the opening page so that the animation plays with sound */
      if (window.jQuery) { jQuery(document).trigger('newPage', { index: 0 }); }
    });
  }
  function wireIntro() {
    var v = document.querySelector('.page video');
    if (v) v.addEventListener('ended', function () { if (window.nav && nav.current === 1 && nav.to) nav.to(38); });
  }
  /* keep the slider window from drifting when focus lands on an item outside the current page */
  function pinWindow() {
    var w = document.querySelector('.anythingWindow');
    if (!w) { setTimeout(pinWindow, 300); return; }
    w.addEventListener('scroll', function () { if (w.scrollTop || w.scrollLeft) { w.scrollTop = 0; w.scrollLeft = 0; } });
  }
  document.addEventListener('DOMContentLoaded', function () { startScreen(); wireIntro(); pinWindow(); });
})();
