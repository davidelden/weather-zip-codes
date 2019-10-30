const migrateLatest = require('./src/db/migrateLatest.js'),
      readStream = require('./src/streams/actions/readStream.js'),
      msgEmitter = require('./src/emitter/msgEmitter.js'),
      streamName = 'StartWeatherFetch';

migrateLatest();
readStream(streamName);
msgEmitter.on('streamMessage', msg => console.log('[ZipCodes]', msg));
// msgEmitter.on('streamMessage', msg => publishZipCodes(msg));
