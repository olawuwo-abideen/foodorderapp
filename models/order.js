const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema(
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
              food: {type: Schema.Types.ObjectId, ref: "food", require: true},
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
            type: Number,
            required: true,
          },
        readyTime: {
            type: Number,
            required: true,
          },
          timestamps: true
      },
)





module.exports = mongoose.model('food', foodSchema);