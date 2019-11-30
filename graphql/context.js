const axios = require('axios');

const coinbaseUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/buy';
const bitsoUrl = 'https://api.bitso.com/v3/ticker/?book=btc_mxn';
const bitfinexUrl = 'https://api-pub.bitfinex.com/v2/ticker/tBTCUSD';
const bittrexUrl = 'https://api.bittrex.com/api/v1.1/public/getmarketsummary?market=usd-btc';
const ordersUrl = 'http://localhost:5000/orders';
const options = {
  headers: {
    Authorization: '123',
  },
};

const api = {
  getOrders: async () => {
    return axios.get(ordersUrl, options);
  },
  placeOrder: async (amount, price, exchange) => {
    return axios.post(ordersUrl, {amount, price, exchange}, options);
  },
  removeOrder: async (orderId) => {
    return axios.delete(`${ordersUrl}/${orderId}`, options);
  },
  getCoinbaseTickers: async () => {
    return axios.get(coinbaseUrl);
  },
  getBitsoTickers: async () => {
    return axios.get(bitsoUrl);
  },
  getBitfinexTickers: async () => {
    return axios.get(bitfinexUrl);
  },
  getBittrexTickers: async () => {
    return axios.get(bittrexUrl);
  },
};

module.exports = {api};
