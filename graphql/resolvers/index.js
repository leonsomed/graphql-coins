const {orders, placeOrder, removeOrder} = require('./order');
const {tickers} = require('./ticker');

const resolvers = {
  Query: {
    orders,
    tickers,
  },
  Mutation: {
    placeOrder,
    removeOrder,
  },
};

module.exports = resolvers;
