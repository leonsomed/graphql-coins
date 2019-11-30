const orders = async (obj, args, context) => {
  const result = await context.api.getOrders();

  return result.data;
};

const placeOrder = async (obj, {amount, price}, context) => {
  const result = await context.api.placeOrder(amount, price);

  return result.data;
};

const removeOrder = async (obj, {orderId}, context) => {
  await context.api.removeOrder(orderId);

  return true;
};

module.exports = {orders, placeOrder, removeOrder};