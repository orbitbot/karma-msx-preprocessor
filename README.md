# karma-msx-preprocessor
> Compile JSX into Mithril render-compatible elements on the fly

The plugin uses [MSX](https://github.com/insin/msx) to compile [JSX](http://facebook.github.io/jsx/) into [Mithril](http://lhorie.github.io/mithril/) render-compatible elements for your Karma runs.

## Installation

Run `npm install` in your project root:

```bash
$ npm install karma-msx-preprocessor --save-dev
```

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.js': ['msx']
    },
    
    msxPreprocessor: {
      // options passed to msx transform, the defaults are
      harmony    : true,
      precompile : true
    }
  })
}
```

`config.msxPreprocessor` is passed directly as the options to [`msx.transform()`](https://github.com/insin/msx/#module-api). `harmony` and `precompile` are enabled by default.
