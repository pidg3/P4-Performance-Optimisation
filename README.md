## Website Performance Optimization portfolio project

Here's my second effort at P4 for the Udacity Front End Nanodegree course. 

This project was all about perforance optimisation - both for initial page load, and for interaction/animations once page has loaded. 

Changes made are summarised below. More detail in code comments.

The site itself is hosted on Github Pages: http://pidg3.github.io/P4-Performance-Optimisation/dist/index.html

The code is organised into two folders: 'dist' for prod and 'dev' for development. Gulp 'watch' task copies across all code files if running. Images need to be copied across manually or using one of image loaders in gulpfile.

### Changes made: Portfolio Pages

* MP-Perf#4 (various) All JS minified, for both main page and Pizza page. All done using Gulp ('watch').
* MP-Perf#5 (index.html) Shrink and compress icon images for homepage using gulp/GraphicsMagick.
* MP-Perf#6 (all html files AND perfmatters.js) Moved Google Analytics script to perfmatters.js file. This means is no longer render-blocking as can be loaded asynchronously using async tag.
* MP-Perf#7 (all html files AND perfmatters.js) Google Fonts now load using Google Webfonts Loader, with code in perfmatters.js. This results in FOUT (Flash of Unstyled Text), and under normal circumstances I wouldn't think this would be worth the performance gain for one less css file request. 
* MP-Perf#8 (all html files) all remaining CSS inlined using Gulp inlineCSS(). (nb this wasn't done for pizza.html as it seems to cause mysterious issues).
 
### Changes made: Cam's Pizzeria

* MP-Perf#1 (main.js) Moved layout calculation outide of for loop to avoid forced synchronous layout issue. Approx. 20X performance improvement. 
* MP-Perf#2 (main.js) Defined new variable allPizzas outside sub-functions so only have to calculate once and avoid FSL. Only one switch function - updates text AND returns new pizza size. onload function sets initial value to 'medium'. Approx. 200X performance improvement. #
* MP-Perf#3 (pizza.html) Reduced image file in size and resolution, down from 2.4MB to 105k.
* MP-Perf#4 (various) All JS minified, for both main page and Pizza page. All done using Gulp. 
* MP-Perf#9 (main.js) Defined new function generatePizzas for initial pizza load. Moved pizzasDiv var outside of for loop for DRY.
* MP-Perf#10 (main.js) Fewer pizzas generated, now depends on window size. 
* (main.js) Added extra two settings to the slider.
* (main.js/style.css) Made pizza columns responsive (otherwise pizzas get messed up on mobile/small screens).

### Main changes made since first code review

* Organisation of dev/prod environments improved. I thought this was getting a bit messy before I submitted the first one, but wasn't sure how to reorganise, so I'm glad this got picked up in the code review. All prod code now in 'dist', dev code in 'src'. Gulp watch task set up to automatically copy across any changes. index.html in root automatically redirects to equivalent in 'dist' folder.
* Use strict mode enabled on all JS functions. 
* Fewer pizzas generated (MP-Perf#10) and depends on window size. 

I tried enabling hardware acceleration as the reviewer suggested however this seemed to slow down rather than speed up the scrolling animation. Presumably this is because the animation is so simple, passing it off to the GPU adds more of a performance overhead than is worth. 
 
#### Original Readme:

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
