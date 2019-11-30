const {orders, placeOrder, removeOrder} = require('./order');
const {tickers} = require('./ticker');
const {users} = require('./users');

const resolvers = {
  Query: {
    orders,
    tickers,
    users,
  },
  Mutation: {
    placeOrder,
    removeOrder,
  },
};

module.exports = resolvers;
