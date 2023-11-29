const express = require('express');
const router = express.Router();


const {
    getSingleVendor,
    getAllVendors,
    getAllTransactions,
    getSingleTransaction,
    verifyDeliveryUser,
    getDeliveryUsers

    } = require('../controllers/adminController');




router.get('admin/vendors', getAllVendors)
router.get('admin/vendor/:id', getSingleVendor)


router.get('admin/transactions', getAllTransactions)
router.get('admin/transaction/:id', getSingleTransaction)

router.get('/delivery/verify', verifyDeliveryUser)
router.get('admin/delivery/users', getDeliveryUsers)


