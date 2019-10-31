const dataMessage = zipCode => (
  ['message', 'WeatherZipCode', 'zipcode', zipCode]
);

const errorMessage = errMsg => (
  ['message', 'WeatherZipCodesError', 'error', errMsg]
);

const eventMessages = {
  start: ['message', 'WeatherZipCodesStart'],
  end: ['message', 'WeatherZipCodesEnd'],
  data: dataMessage,
  error: errorMessage
}

module.exports = eventMessages;
