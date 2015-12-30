// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
	  var t = window.performance.timing,
	    dcl = t.domContentLoadedEventStart - t.domLoading,
	    complete = t.domComplete - t.domLoading;
	  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
  logCRP();
});

/* MP-Perf#6
Moved Google Analytics script to this js file
This means is no longer render-blocking as can be loaded asynchronously using async tag */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71848105-1', 'auto');
ga('send', 'pageview');

/* MP-Perf#7
Move fonts to load asynchronously using Google Webfont Loader: https://github.com/typekit/webfontloader */

WebFontConfig = {
  google: {
    families: ['Open Sans:400,700']
  }
};
(function(d) {
   var wf = d.createElement('script'), s = d.scripts[0];
   wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
   s.parentNode.insertBefore(wf, s);
})(document);