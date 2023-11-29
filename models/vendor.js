const mongoose = require('mongoose');
const validator = require('validator');

const vendorSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,  
          maxlength: 50,
        },
       ownerName: {
          type: String,
          required: true,  
          maxlength: 50,
        },
        foodType: {
          type: String,
          required: true,
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
            unique: true,
          },
        email: {
            type: String,
            required: true,
            maxlength: 100,
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
        serviceAvailable: {
            type: Boolean,
            required: true,
          },
        rating: {
            type: Number,
            required: true,
          },
        foods: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'food'
        }],
      },
)


vendorSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

vendorSchema.methods.comparePassword = async function (vendorPassword) {
  try {
    const isMatch = await bcrypt.compare(vendorPassword, this.password);
    return isMatch;
  } catch (error) {
    return false;
  }
};



module.exports = mongoose.model('vendor', vendorSchema);