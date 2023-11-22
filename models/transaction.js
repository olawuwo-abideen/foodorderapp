const mongoose = require('mongoose');


const transactionSchema = new mongoose.Schema(
    {

        customer: {
          type: String,
          required: true,
          maxlength: 50,
        },
        vendorId: {
          type: String,
          required: true,
          maxlength: 50,
        },
        orderId: {
          type: Number,
          required: true,
        },
        orderValue: {
            type: String,
            required: true,
            maxlength: 50,
          },
        status: {
            type: String,
            required: true,
            maxlength: 50,
            unique: true,
          },
        paymentMode: {
            type: Number,
            required: true,
            maxlength: 100,
            unique: true,
          },
        paymentResponse: {
            type: Number,
            required: true,
          },
          timestamps: true
      },
)





module.exports = mongoose.model('transaction', transactionSchema);