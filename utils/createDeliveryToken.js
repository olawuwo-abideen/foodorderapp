const createDeliveryToken = (user) => {
  return { name: delivery.name, deliveryId: delivery._id };
};

module.exports = createDeliveryToken;
