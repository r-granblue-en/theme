# tifu_css

CSS redesign for TIFU. Style in SCSS, uses a little Express server to serve third party content, because DevTools was a bitch to serve my files on properly and because these servers are way too easy to set up ☜(ﾟヮﾟ☜)

How to use:
1. clone repo. Alternatively, recreate text verbatim using your preferred text editor (slightly slow method)
2. run `npm start` in the project root to run the static file server
3. go to /r/tifu_css (or any other sub with no custom styling)
4. add this bookmarklet: ```javascript: {window.tifuStyle&&tifuStyle.remove(); window.tifuStyle=document.createElement("link"); tifuStyle.rel="stylesheet"; tifuStyle.href="http://localhost:2005/src/output.css"; document.head.appendChild(tifuStyle)}```
5. click that mfing bookmarklet. This adds the style to the page
6. add project to DevTools workspace, cd into src, install and run sass, `sass --watch style.scss:output.css`, to edit the SCSS live
