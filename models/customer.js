const mongoose = require('mongoose');
const validator = require('validator');

const customerSchema = new mongoose.Schema(
    {
        email: {
          type: String,
          required: true,
          unique: true,
          match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],

        },
        password: {
          type: String,
          required: true,
          minlength: 6,
        },
        firstName: {
          type: String,
          required: true,
          maxlength: 20,
        },
        lastName: {
            type: String,
            required: true,
            maxlength: 20,
          },
        address: {
            type: String,
            required: true,
            maxlength: 30,
          },
        phoneNumber: {
            type: Number,
            required: true,
            maxlength: 11,
          },
        verified: {
            type: Boolean,
            default :false,
            required: true,
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
        }],
        
        timestamps: true
        
      },
)





module.exports = mongoose.model('customer', customerSchema);