const msgTimeZones = require('./helpers/msgTimeZones.js'),
      fetchZipCodes = require('../fetch/helpers/fetchZipCodes.js'),
      eventMessages = require('../streams/events/eventMessages.js'),
      writeStream = require('../streams/actions/writeStream'),
      streamName = 'WeatherZipCodes';

const publishZipCodes = async msg => {
  if(!msgTimeZones[msg]) return;

  writeStream(streamName, eventMessages['start']);

  const dbTbl = msgTimeZones[msg],
        zipCodes = await fetchZipCodes(dbTbl);

  zipCodes.forEach(code => writeStream(streamName, eventMessages['data'](code)));

  writeStream(streamName, eventMessages['end']);
}

module.exports = publishZipCodes;
