const createVendorToken = (user) => {
  return { name: vendor.name, vendorId: vendor._id};
};

module.exports = createVendorToken;
