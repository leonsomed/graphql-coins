const tickers = async (obj, args, context) => {
  const [coinbase, bitso, bitfinex, bittrex] = await Promise.all([
    context.api.getCoinbaseTickers(),
    context.api.getBitsoTickers(),
    context.api.getBitfinexTickers(),
    context.api.getBittrexTickers(),
  ]);

  return [
    {
      exchange: 'coinbase',
      volume: 0,
      price: coinbase.data.data.amount,
      currency: 'usd',
    },
    {
      exchange: 'bitso',
      volume: bitso.data.payload.volume,
      price: bitso.data.payload.last,
      currency: 'mxn',
    },
    {
      exchange: 'bitfinex',
      volume: bitfinex.data[7],
      price: bitfinex.data[6],
      currency: 'usd',
    },
    {
      exchange: 'bittrex',
      volume: bittrex.data.result[0].Volume,
      price: bittrex.data.result[0].Last,
      currency: 'usd',
    },
  ];
};

module.exports = {tickers};
