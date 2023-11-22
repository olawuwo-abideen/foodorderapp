const mongoose = require('mongoose');


const offerSchema = new mongoose.Schema(
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
        paidAmount: {
          type: Number,
          required: true,
        },
        orderDate: {
            type: String,
            required: true,
            maxlength: 50,
          },
        orderStatus: {
            type: String,
            required: true,
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
        timestamps: true
      },
)





module.exports = mongoose.model('offer', offerSchema);

