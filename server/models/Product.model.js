import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the product name'],
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Please provide the product price'],
  },
  photo: {
    type: String,
  },
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;
