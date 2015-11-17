var msx = require('msx');

function createPreprocessor(args, config, logger, helper) {
  var log = logger.create('preprocessor.msx');
  config = helper.merge({ harmony: true, precompile: true } , config || {});

  return function process(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);

    try {
      var processed = msx.transform(content, config);
      done(null, processed);
    } catch (e) {
      log.error('%s\n at %s', e.message, file.originalPath);
      done(e, null);
    }
  };
}


createPreprocessor.$inject = ['args', 'config.msxPreprocessor', 'logger', 'helper'];

module.exports = {
  'preprocessor:msx': ['factory', createPreprocessor]
};