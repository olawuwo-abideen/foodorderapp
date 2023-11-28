const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const deliverySchema = new mongoose.Schema(
    {
        email: {
          type: String,
          required: true,
          unique : true,
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
            maxlength: 50,
          },
        phoneNumber: {
            type: Number,
            required: true,
            maxlength: 11,
          },
        isAvailable: {
            type: Boolean,
            required: true,
          },
        verified: {
            type: Boolean,
            required: true,
          },
        timestamps: true
      },
)

deliverySchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

deliverySchema.methods.comparePassword = async function (deliveryPassword) {
  try {
    const isMatch = await bcrypt.compare(deliveryPassword, this.password);
    return isMatch;
  } catch (error) {
    return false;
  }
};






module.exports = mongoose.model('delivery', deliverySchema);