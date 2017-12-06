# ubsub-notify

The ubsub-notify package provides integration with ubsub and libnotify.

Uses [growl](https://www.npmjs.com/package/growl) to send messages.

## Install

```bash
npm install -g ubsub-notify
```

### Mac OS X (Darwin):

  Install [growlnotify(1)](http://growl.info/extras.php#growlnotify). On OS X 10.8, Notification Center is supported using [terminal-notifier](https://github.com/alloy/terminal-notifier). To install:

    $ sudo gem install terminal-notifier

  Install [npm](http://npmjs.org/) and run:

    $ npm install growl

### Ubuntu (Linux):

  Install `notify-send` through the [libnotify-bin](http://packages.ubuntu.com/libnotify-bin) package:

    $ sudo apt-get install libnotify-bin

  Install [npm](http://npmjs.org/) and run:

    $ npm install growl

### Windows:

  Download and install [Growl for Windows](http://www.growlforwindows.com/gfw/default.aspx)

  Download [growlnotify](http://www.growlforwindows.com/gfw/help/growlnotify.aspx) - **IMPORTANT :** Unpack growlnotify to a folder that is present in your path!

  Install [npm](http://npmjs.org/) and run:

    $ npm install growl

## Usage

TODO

# License

Copyright (c) 2017 Christopher LaPointe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.