const Food = require('../models/food')
const Offer = require('../models/offer')
const Order = require('../models/order')
const Vendor = require('../models/vendor')
const { StatusCodes } = require('http-status-codes');
const { attachCookiesToResponse, createVendorToken } = require('../utils');
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
    const vendor = await Vendor.findOne({ email });
  
    if (!vendor) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    const isPasswordCorrect = await vendor.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    const tokenVendor = createVendorToken(vendor);
    attachCookiesToResponse({ res, vendor: tokenVendor });
  
    res.status(StatusCodes.OK).json({ vendor: tokenVendor });
    
};

const updateVendorPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError('Please provide both values');
  }
  const vendor = await Vendor.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await vendor.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  vendor.password = newPassword;

  await vendor.save();
  res.status(StatusCodes.OK).json({ msg: 'Success! Password Updated.' });
};

const  updateVendorProfile = async (req, res) => {
  const { id: vendorId } = req.params;

  const profile = await Vendor.findOneAndUpdate({ _id: vendorId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!profile) {
    throw new CustomError.NotFoundError(`No vendor profile with id : ${vendorId}`);
  }

  res.status(StatusCodes.OK).json({profile});
    
};


const  addFood = async (req, res) => {
  const createfood = await Food.create(req.body)
  res.status(StatusCodes.CREATED).json({createfood})
};

const  getAllFoods = async (req, res) => {
    const foods = await Food.find({});
    res.status(StatusCodes.OK).json({foods});

};

const  getAllOrder = async (req, res) => {
  const orders = await Order.find({})
  res.status(StatusCodes.OK).json({orders}) 
    
};

const  getSingleOrder = async (req, res) => {
  const {id:orderId} = req.params
  const order = await Order.findOne({_id:orderId});
  if(!order){
      throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
    }
res.status(StatusCodes.OK).json({order})  
    
};


const  getAllOffers = async (req, res) => {

    const offers = await Offer.find({})
    res.status(StatusCodes.OK).json({offers}) 
    
};

const  getSingleOffer = async (req, res) => {

  const {id:offerId} = req.params
  const offer = await Offer.findOne({_id:offerId});
  if(!offer){
      throw new CustomError.NotFoundError(`No offer with id : ${offerId}`);
    }
res.status(StatusCodes.OK).json({offer})  
    
};


const  addOffer = async (req, res) => {

  const createoffer = await Offer.create(req.body)
  res.status(StatusCodes.CREATED).json({createoffer})
};



const  editSingleOffer = async (req, res) => {

  const { id: offerId } = req.params;

  const updateoffer = await Offer.findOneAndUpdate({ _id: offerId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updateoffer) {
    throw new CustomError.NotFoundError(`No vendor profile with id : ${offerId}`);
  }

  res.status(StatusCodes.OK).json({updateoffer});
    
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
   registerVendor,
    vendorLogin,
    vendorLogout,
    updateVendorPassword,
    updateVendorProfile,
    addFood,
    getAllFoods,
    getAllOrder,
    getSingleOrder,
    getAllOffers,
    getSingleOffer,
    addOffer,
    editSingleOffer

};
