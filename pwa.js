/*
Main website JavaScript
*/
(function() {

'use strict';

// unsupported browser
if (!window.addEventListener || !window.history || !window.requestAnimationFrame || !document.getElementsByClassName) return;


// enable service worker
if ('serviceWorker' in navigator) {

  // register service worker
  navigator.serviceWorker.register('/sw.js');
  // navigator.serviceWorker.register('/service-worker.js');

  // load script to populate offline page list
  // if (document.getElementById('cachedpagelist') && 'caches' in window) {
  //   var scr = document.createElement('script');
  //   scr.src = '/assets/pwa/offlinepage.js';
  //   // scr.src = '/offlinepage.js';
  //   scr.async = 1;
  //   document.head.appendChild(scr);
  // }

}


// remove URL #target after navigation animation and page unload
window.addEventListener('unload', removeTarget, false);

var nav = document.getElementById('nav');
if (nav) nav.addEventListener('animationend', function() { setTimeout(removeTarget, 100); }, false);

function removeTarget() {
  history.replaceState('', document.title, location.pathname + location.search);
}


// progressive image loader
window.addEventListener('load', function() {

  // start
  var pItem = document.getElementsByClassName('progressive replace'), timer;

  window.addEventListener('scroll', scroller, false);
  window.addEventListener('resize', scroller, false);
  inView();


  // throttled scroll/resize
  function scroller(e) {

    timer = timer || setTimeout(function() {
      timer = null;
      requestAnimationFrame(inView);
    }, 300);

  }


  // image in view?
  function inView() {

    var wT = window.pageYOffset, wB = wT + window.innerHeight, cRect, pT, pB, p = 0;
    while (p < pItem.length) {

      cRect = pItem[p].getBoundingClientRect();
      pT = wT + cRect.top;
      pB = pT + cRect.height;

      if (wT < pB && wB > pT) {
        loadFullImage(pItem[p]);
        pItem[p].classList.remove('replace');
      }
      else p++;

    }

  }


  // replace with full image
  function loadFullImage(item) {

    var href = item && (item.href || item.getAttribute('data-href'));
    if (!href) return;

    // load image
    var img = new Image();
    if (item.dataset) {
      img.srcset = item.dataset.srcset || '';
      img.sizes = item.dataset.sizes || '';
    }
    img.src = href;
    img.className = 'reveal';
    if (img.complete) addImg();
    else img.onload = addImg;

    // replace image
    function addImg() {

      // disable click
      item.addEventListener('click', function(e) { e.preventDefault(); }, false);

      // add full image
      item.appendChild(img).addEventListener('animationend', function(e) {

        // remove preview image
        var pImg = item.querySelector && item.querySelector('img.preview');
        if (pImg) {
          e.target.alt = pImg.alt || '';
          item.removeChild(pImg);
          e.target.classList.remove('reveal');
        }

      }, false);

    }

  }

}, false);

})();
