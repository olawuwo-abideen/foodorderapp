const Food = require('../models/food')
const Offer = require('../models/offer')
const Order = require('../models/order')
const Vendor = require('../models/vendor')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');


const registerVendor = async (req, res) => {
  const { email, name, password, } = req.body;

  const emailAlreadyExists = await Vendor.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  const vendor = await Vendor.create({ name, ownerName, email, password, foodType, address, phoneNumber, serviceAvailable, rating, latitude, longitude });
  const tokenVendor = createVendorToken(vendor);
  attachCookiesToResponse({ res, vendor: tokenVendor });
  res.status(StatusCodes.CREATED).json({ vendor: tokenVendor });
}

const  vendorLogin = async (req, res) => {

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
    const tokenCustomer = createCustomerToken(user);
    attachCookiesToResponse({ res, customer: tokenCustomer });
  
    res.status(StatusCodes.OK).json({ customer: tokenCustomer });

    
    
};


const  getVendorProfile = async (req, res) => {
    
};

const  updateVendorProfile = async (req, res) => {
    
};



const  updateVendorService = async (req, res) => {
    
};


const  addSingleFood = async (req, res) => {
    
};

const  getAllFoods = async (req, res) => {

    const foods = await Food.find({});

    res.status(StatusCodes.OK).json({ foods });
    
};

const  getCurrentOrder = async (req, res) => {
    
};

const  getOrderDetails = async (req, res) => {
    
};

const  processOrder = async (req, res) => {
    
};





const  getAllOffers = async (req, res) => {

    const offers = await Offer.find({})
    res.status(StatusCodes.OK).json({offers}) 
    
};



const  addSingleOffer = async (req, res) => {

    const { id: productId } = req.params;

    const product = await Product.findOne({ _id: productId }).populate('reviews');
  
    if (!product) {
      throw new CustomError.NotFoundError(`No product with id : ${productId}`);
    }
  
    res.status(StatusCodes.OK).json({ product });
    
};



const  editSingleOffer = async (req, res) => {
    
};



const vendorLogout = (req, res) => {
    try {
      res.cookie('tokenUser', 'logout', {
        httpOnly: true,
        expires: new Date(0),
      });
      res.status(StatusCodes.OK).json({ message: 'User logged out successfully' });
    } catch (error) {
      console.error('Error in logout:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  };
  










module.exports = {

    vendorLogin,
    vendorLogout,
    getVendorProfile,
    updateVendorProfile,
    updateVendorService,
    addSingleFood,
    getAllFoods,
    getCurrentOrder,
    getOrderDetails,
    processOrder,
    getAllOffers,
    addSingleOffer,
    editSingleOffer

};
