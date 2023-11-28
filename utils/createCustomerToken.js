const createCustomerToken = (customer) => {
  return { name: customer.name, customerId: customer._id};
};

module.exports = createCustomerToken;
