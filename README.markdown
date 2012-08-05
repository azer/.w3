# .w3

A Google Chrome extension that executes JavaScript and CSS files in ~/.w3 based on their filename.
If you navigate to http://www.wikipedia.org, dotjs will execute ~/.w3/wikipedia.org.js and ~/.w3/wikipedia.org.css

**Supported OS/Distro:* Arch Linux

![](https://dl.dropbox.com/s/mk5ct83h8eyag8i/beat3.jpg)

# Install

Python3+ is needed to serve the files under ~/.w3 via `python -m http.server` command.

## Arch Linux

```bash
$ make install-arch
$ /etc/rc.d/w3d start
```


# Credits

Inspired from and based on [defunkt/dotjs](http://github.com/defunkt/dotjs).
