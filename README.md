# /r/granblue_en/ theme

Reddit theme for [/r/granblue_en][1].

Forked and based off [/r/tifu/ subreddit theme][2], [Vykort][3].

### Planned Changes
- [ ] Left-side-vertical comment collapse area
- [ ] Vertical userflairs
- [ ] Sidebar gallery showcase

### Development Notes
1. The following command will start a filesystem-watcher that (re)compiles the stylesheets when any of the source files are changed:

```sh
npm run dev
```

It additionally starts a local webserver at [http://localhost:5000][4] which will serve the compiled stylesheet.

2. Open [http://localhost:5000][4] and save the bookmarklet.
3. Open a subreddit, disable the subreddit theme, and insert the theme into the page using the bookmarklet.
4. Open the chrome devtools and add the project `src/` directory into the workspace located at Sources > Filesystem.
5. The stylesheet should now be reloaded automatically when the source files are edited, indicated by the green dots on the file icons in the chrome devtools.

[1]: https://www.reddit.com/r/granblue_en/
[2]: https://github.com/PicturElements/tifu_css
[3]: https://www.reddit.com/r/vykort/
[4]: http://localhost:5000
