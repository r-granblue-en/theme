# /r/granblue_en/ theme

Reddit theme for [/r/granblue_en][1].

Forked and based off [/r/tifu/ subreddit theme][2], [Vykort][3].

### Planned Changes
- [ ] Left-side-vertical comment collapse area
- [ ] Vertical userflairs
- [ ] Sidebar gallery showcase

### Development Notes
The following command will start a filesystem-watcher that (re)compiles the stylesheets when any of the source files are changed:

```sh
npm run dev
```

It additionally starts a local webserver at [http://localhost:5000][4] which will serve the compiled stylesheet for easier development and testing.

The project also includes a [userscript][5] that checks and reloads the stylesheet on every interval on reddit. It can be installed via [http://localhost:5000][4].

[1]: https://www.reddit.com/r/granblue_en/
[2]: https://github.com/PicturElements/tifu_css
[3]: https://www.reddit.com/r/vykort/
[4]: http://localhost:5000
[5]: https://github.com/r-granblue-en/theme/tree/master/contrib/theme-reloader.user.js
