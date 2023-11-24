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
    
  };


  const  getAllTransactions = async (req, res) => {
    
  };




  const  getSingleTransaction = async (req, res) => {
    
  };




  
  const  verifyDeliveryUser = async (req, res) => {
    
  };



  
  const  getDeliveryUsers = async (req, res) => {
    
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
  
 