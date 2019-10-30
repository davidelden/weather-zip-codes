const readStream = require('./src/streams/actions/readStream.js'),
      msgEmitter = require('./src/emitter/msgEmitter.js'),
      streamName = 'StartWeatherFetch';

readStream(streamName);
msgEmitter.on('streamMessage', msg => console.log('[ZipCodes]', msg));
// msgEmitter.on('streamMessage', msg => publishZipCodes(msg));
