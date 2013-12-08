# ng-countdown

Youtube video embeds for responsive layouts.

## Tests

```Shell
karma start --reporters growler
```

## Usage

```JavaScript
//inject angular file upload directives and service.
angular.module('myApp', ['youtubeResponsive']);
```


```HTML
<counter start="0" end="63" suffix="" speed="20" suffix="%" scroll="450">
```


## Install

```Shell
$ bower install ng-countdown
```

Or just include 'js/main.js' file in your html.


## Demo

Run the following commands and navigate to [http://localhost:3000/](http://localhost:3000/)


#### install deps
```Shell
$ npm install && bower install
```

#### run demo server
```Shell
$ npm start
```


## License
Copyright (c) 2013 Andrew Griffiths <mail@andrewgriffithsonline.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.