const orders = async (obj, args, context) => {
  const result = await context.api.getOrders();

  return result.data;
};

const placeOrder = async (obj, {amount, price, exchange}, context) => {
  const result = await context.api.placeOrder(amount, price, exchange);

  return result.data;
};

const removeOrder = async (obj, {orderId}, context) => {
  await context.api.removeOrder(orderId);

  return orderId;
};

module.exports = {orders, placeOrder, removeOrder};