const fetchZipCodes = require('../fetch/helpers/fetchZipCodes.js');

const msgTimeZones = {
  FetchUSEasternWeather: 'us_eastern',
  FetchUSCentralWeather: 'us_central',
  FetchUSMountainWeather: 'us_mountain',
  FetchUSArizonaWeather: 'us_arizona',
  FetchUSPacificWeather: 'us_pacific',
  FetchUSAlaskaWeather: 'us_alaska',
  FetchUSHawaiiWeather: 'us_hawaii'
}

const publishZipCodes = async msg => {
  if(!msgTimeZones[msg]) return;
  // Write to stream Begin event

  const dbTbl = msgTimeZones[msg],
        zipCodes = await fetchZipCodes(dbTbl); // Get zip codes to publish

  zipCodes.forEach(code => ) // write zip code to stream

  // Catch any errors
  // Write to stream End event
}

module.exports = publishZipCodes;
