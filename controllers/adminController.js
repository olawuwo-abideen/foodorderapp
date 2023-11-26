const Delivery = require('../models/delivery')
const Transaction = require('../models/vendor')
const Vendor = require('../models/vendor')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');



const createVendor = async (req, res) => {

  req.body.user = req.user.userId;
  const createvendor = await Vendor.create(req.body);
  res.status(StatusCodes.CREATED).json({ createvendor });
    
  };

  const  getSingleVendor = async (req, res) => {
    const {id:vendorId} = req.params
    const vendor = await Vendor.findOne({_id:vendorId});
    if(!vendor){
        throw new CustomError.NotFoundError(`No vendor with id : ${vendorId}`);
      }
  res.status(StatusCodes.OK).json({vendor}) 
    
  };


const getAllVendors = async (req, res) => {
  const vendors = await Vendor.find({})
  res.status(StatusCodes.OK).json({vendors}) 
  };


  const  getAllTransactions = async (req, res) => {

    const transactions = await Transaction.find({})
    res.status(StatusCodes.OK).json({transactions}) 
    
  };




  const  getSingleTransaction = async (req, res) => {

    const {id:transactionId} = req.params
    const transaction = await Transaction.findOne({_id:transactionId});
    if(!transaction){
        throw new CustomError.NotFoundError(`No transaction with id : ${transactionId}`);
      }
  res.status(StatusCodes.OK).json({transaction}) 
    
  };

  
  const  verifyDeliveryUser = async (req, res) => {

    const { _id, status } = req.body;

    if(_id){

        const profile = await Delivery.findById(_id);

        if(profile){
            profile.verified = status;
            const result = await profile.save();

            return res.status(StatusCodes.OK).json(result);
        }
    }

    return res.json({ message: 'Unable to verify Delivery User'});
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Delivery User not found' });

    
  };

  const  getDeliveryUsers = async (req, res) => {
    
    const deliveryusers = await Delivery.find();

    if(deliveryusers){
        return res.status(StatusCodes.OK).json(deliveryusers);
    }
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Delivery User not found' });


  };


  module.exports = {
    createVendor,
    getSingleVendor,
    getAllVendors,
    getAllTransactions,
    getSingleTransaction,
    verifyDeliveryUser,
    getDeliveryUsers

  };
  
 