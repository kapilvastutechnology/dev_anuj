import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({

    title: {
        type:String, 
        unique: true,
        required: true
    },

    detail: {
        type: String,
        required: true
    },

    image: {
        type:String, 
        required: true
    },

    category: {
        type: String,
        enum: ['food', 'tech','jewallery'],
        required: true
    },

    brand: {
        type: String,
        enum: ['addidas', 'samsung', 'realme', 'Nokia', 'motrola', 'iphone'],
        required: true
    },

    rating: {
        type: Number,
        default: 0
    },

    price: {
        type: Number,
        required: true
    }

}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);

export default Product;