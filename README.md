# ubsub-notify

[![Build Status](https://travis-ci.org/ubsub/ubsub-notify.svg?branch=master)](https://travis-ci.org/ubsub/ubsub-notify)
[![npm](https://img.shields.io/npm/v/ubsub-notify.svg)](https://www.npmjs.com/package/ubsub-notify)
[![npm](https://img.shields.io/npm/l/ubsub-notify.svg)](https://www.npmjs.com/package/ubsub-notify)

The ubsub-notify package provides integration with ubsub and libnotify.

Uses [node-notifier](https://github.com/mikaelbr/node-notifier) to send messages.

## Install

```bash
npm install -g ubsub-notify
```

## Requirements (node-notifier)
- **macOS**: >= 10.8 or Growl if earlier.
- **Linux**: `notify-osd` or `libnotify-bin` installed (Ubuntu should have this by default)
- **Windows**: >= 8, task bar balloon for Windows < 8. Growl as fallback. Growl takes precedence over Windows balloons.
- **General Fallback**: Growl

## Usage

It is recommended that you run `ubsub login` first to save your user credentials.

You may also specify them via CLI args, or via environmental variables `UBSUB_USER` and `UBSUB_USERKEY`.

Once you have logged in, simply run:

```bash
ubsub-notify -t <topicid>
```

You can see full capabilities by running:

```bash
ubsub-notify -h
```

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
