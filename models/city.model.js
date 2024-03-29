const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    coupons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }],
    offers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Offer' }],
}, {timestamps: true})

module.exports = mongoose.model('City', CitySchema)