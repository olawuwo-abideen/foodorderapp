const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const customerSchema = new mongoose.Schema(
    {
        email: {
          type: String,
          required: true,
          unique: true,
          validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email',
          },

        },
        password: {
          type: String,
          required: true,
          minlength: [6, 'Password must be at least 6 characters long']
        },
        name: {
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

customerSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

customerSchema.methods.comparePassword = async function (customerPassword) {
  try {
    const isMatch = await bcrypt.compare(customerPassword, this.password);
    return isMatch;
  } catch (error) {
    return false;
  }
};



module.exports = mongoose.model('customer', customerSchema);