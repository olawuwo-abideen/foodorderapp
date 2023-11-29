const Customer = require('../models/customer')
const Delivery = require('../models/delivery')
const Food = require('../models/food')
const Vendor = require('../models/vendor')
const Offer = require('../models/offer')
const Order = require('../models/order')
const Transaction = require('../models/transaction')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse, createCustomerToken } = require('../utils');


const register = async (req, res) => {

  const { fullName, email, password } = req.body;

  const emailAlreadyExists = await Customer.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  const customer = await Customer.create({ email, password, fullName, address, phoneNumber, latitude, longitude, verified });
  const tokenCustomer = createCustomerToken(customer);
  attachCookiesToResponse({ res, customer: tokenCustomer });
  res.status(StatusCodes.CREATED).json({ customer: tokenCustomer });
    
};


const  login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
      throw new CustomError.BadRequestError('Please provide email and password');
    }
    const customer = await Customer.findOne({ email });
  
    if (!customer) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    const isPasswordCorrect = await customer.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    const tokenCustomer = createCustomerToken(customer);
    attachCookiesToResponse({ res, customer: tokenCustomer });
  
    res.status(StatusCodes.OK).json({ customer: tokenCustomer });
  
};

const updateCustomerPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      throw new CustomError.BadRequestError('Please provide both values');
    }
    const customer = await Customer.findOne({ _id: req.user.userId });
  
    const isPasswordCorrect = await customer.comparePassword(oldPassword);
    if (!isPasswordCorrect) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    customer.password = newPassword;
  
    await customer.save();
    res.status(StatusCodes.OK).json({ msg: 'Success! Password Updated.' });
  };
  



const logout = async (req, res) => {
    res.cookie('tokenCustomer', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now() + 1000),
    });
    res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
  };

  

const getCustomerProfile = async (req, res) => {

  const { id: customerId } = req.params;

  const profile = await Customer.findOne({ _id: customerId })

  if (!profile) {
    throw new CustomError.NotFoundError(`No customer profile with id : ${customerId}`);
  }

  res.status(StatusCodes.OK).json({ profile });
    
};


const  updateCustomerProfile = async (req, res) => {

  const { id: customerId } = req.params;

  const profile = await Customer.findOneAndUpdate({ _id: customerId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!profile) {
    throw new CustomError.NotFoundError(`No customer profile with id : ${customerId}`);
  }

  res.status(StatusCodes.OK).json({profile});
  
};


const  assignOrderForDelivery = async (req, res) => {

  const vendor = await Vendor.findOne(vendorId);
  if(vendor){
      const vendorLatitude = vendor.latitude;
      const vendorLongitude = vendor.longitude;
      const delivery = await Delivery.find({verified: true, isAvailable: true});
      if(delivery){
          const currentOrder = await Order.findOne(orderId);
          if(currentOrder){
              currentOrder.deliveryId = delivery[0]._id; 
              await currentOrder.save();
          }

      }
    }

};

const validateTransaction = async (req, res) => {

  const currentTransaction = await Transaction.findOne(txnId);

    if(currentTransaction){
        if(currentTransaction.status.toLowerCase() !== 'failed'){
            return {status: true, currentTransaction};
        }
    }
    return {status: false, currentTransaction};
    
};

const  createOrder = async (req, res) => {
  req.body.customer = req.user.customerId;
  const createorder = await Order.create(req.body);
  res.status(StatusCodes.CREATED).json({ createorder });
};

const getSingleOrder = async (req, res) => {
    const { id: customerId } = req.params;

  const customerorder = await Customer.findOne({ _id: customerId }).populate("orders");

  if (!customerorder) {
    throw new CustomError.NotFoundError(`No Order with id : ${orderId}`);
  }

  res.status(StatusCodes.OK).json({customerorder});
};


const  getAllOrders = async (req, res) => {
  
  const customers = await Customer.find({});
  res.status(StatusCodes.OK).json({customers}).populate("items.food");

};




const  addToCart = async (req, res) => {
  
};




const getCart = async (req, res) => {
  
};


const  deleteCart = async (req, res) => {
  
};




const  verifyOffer = async (req, res) => {
  
};




const  createPayment = async (req, res) => {
  
};





module.exports = {
    register,
    login ,
    logout,
    updateCustomerPassword,
    getCustomerProfile,
    updateCustomerProfile,
    assignOrderForDelivery,
    validateTransaction,
    createOrder,
    getSingleOrder,
    getAllOrders,
    addToCart,
    getCart,
    deleteCart,
    verifyOffer,
    createPayment
}