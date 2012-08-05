A Google Chrome extension that executes JavaScript and CSS files in `~/.w3`, based on their filename.
If you navigate to http://www.wikipedia.org, `~/.w3/wikipedia.org.js` and `~/.w3/wikipedia.org.css` will be included within the all pages.

**Supported OS/Distro:** Arch Linux

![](https://dl.dropbox.com/s/5a1gjs15o49uyeg/beat3_sm.jpg)

# Install

Python3+ is needed to serve the files under ~/.w3 via `python -m http.server` command.

### On Arch Linux

```bash
$ make install-arch
$ /etc/rc.d/w3d start
```

# Usage Examples

* [github.com/azer/w3files](https://github.com/azer/w3files)

# Credits

Inspired from and based on [defunkt/dotjs](http://github.com/defunkt/dotjs) and [stewart/dotcss](https://github.com/stewart/dotcss/).
