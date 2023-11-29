const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema(
    {
        orderId: {
          type: String,
          required: true,
          maxlength: 50,
        },
        vendorId: {
          type: String,
          required: true,
          maxlength: 50,
        },
        items: [
          {
              food: {type: mongoose.Schema.ObjectId, ref: "food", require: true},
              unit: { type: Number, require: true}
          }
      ],
        totalAmount: {
          type: Number,
          required: true,
        },
        paidAmount: {
          type: Number,
          required: true,
        },
        orderDate: {
            type: Date,
            required: true,
          },
        orderStatus: {
            type: String,
            required: true,
            maxlength: 50,
          },
        remarks: {
            type: String,
            required: true,
          },
        deliveryId: {
            type: String,
            required: true,
          },
        readyTime: {
            type: Number,
            required: true,
          },
      },
)





module.exports = mongoose.model('order', orderSchema);