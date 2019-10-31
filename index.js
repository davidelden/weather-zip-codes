require('dotenv').config();

const migrateLatest = require('./src/db/migrateLatest.js'),
      readStream = require('./src/streams/actions/readStream.js'),
      msgEmitter = require('./src/emitter/msgEmitter.js'),
      publishZipCodes = require('./src/publish/publishZipCodes.js'),
      streamName = 'StartWeatherFetch';

migrateLatest();
readStream(streamName);
msgEmitter.on('streamMessage', msg => publishZipCodes(msg));
