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




router.get('vendors', getAllVendors)
router.get('vendor/:id', getSingleVendor)


router.get('transactions', getAllTransactions)
router.get('transaction/:id', getSingleTransaction)

router.get('verify', verifyDeliveryUser)
router.get('delivery/users', getDeliveryUsers)

module.exports = router;
