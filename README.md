# tifu_css

CSS redesign for TIFU. Style in SCSS, uses a little Express server to serve third party content, because I couldn't get DevTools to serve my files properly and because these servers are too easy to set up ☜(ﾟヮﾟ☜)

How to use:
1. clone repo
2. run `npm start` in the project root
3. go to /r/tifu_css (or any other sub with no custom styling)
4. add this bookmarklet: ```javascript: (function(){let style=document.createElement("link"); style.rel="stylesheet"; style.href="http://localhost:2005/src/output.css"; document.head.appendChild(style)})();```
5. click that mfing bookmarklet
6. add project to DevTools workspace, install and run sass `cmd: sass --watch style.scss:output.css` to edit the SCSS live; preferably in DevTools
