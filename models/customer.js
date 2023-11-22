const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema(
    {
        email: {
          type: String,
          required: true,
          unique: true
        },
        password: {
          type: String,
          required: true,
          minlength: 6,
        },
        firstName: {
          type: Number,
          required: true,
          maxlength: 30,
          unique: true,
        },
        lastName: {
            type: String,
            required: true,
            maxlength: 50,
          },
        address: {
            type: String,
            required: true,
            maxlength: 50,
          },
        phoneNumber: {
            type: Number,
            required: true,
            maxlength: 100,
          },
        verified: {
            type: Boolean,
            required: true,
            maxlength: 100,
          },
          cart: [
            {
                food: { type: Schema.Types.ObjectId, ref: 'food', require: true},
                unit: { type: Number, require: true}
            }
        ],
        orders: [{
            type: Schema.Types.ObjectId,
            ref: 'order'
        }]
        
      },
)





module.exports = mongoose.model('customer', customerSchema);