import Product from '../models/Product.model.js';

export const createProduct = async (req, res) => {
  try {
    const { name, category, price, photo } = req.body;

    const newProduct = new Product({
      name: name,
      category: category,
      price: price,
      photo: photo,
    });

    newProduct
      .save()
      .then((result) =>
        res.status(201).send({
          message: 'Product created successfully!',
          product: result,
        })
      )
      .catch((error) => {
        res.status(500).send({
          error: 'Something went wrong while creating the product: ' + error,
        });
      });
  } catch (error) {
    return res.status(500).send({
      error: 'Something went wrong createProduct: ' + error,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    Product.find({}, (err, products) => {
      if (err) {
        return res.status(500).send({
          error: 'Something went wrong while fetching the products: ' + err,
        });
      }

      if (!products) {
        return res.status(404).send({
          error: 'No products found',
        });
      }

      return res.status(200).send(products);
    });
  } catch (error) {
    return res.status(500).send({
      error: 'Something went wrong getProducts: ' + error,
    });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    Product.findOne({ _id: id }, (err, product) => {
      if (err) {
        return res.status(500).send({
          error: 'Something went wrong while fetching the product: ' + err,
        });
      }

      if (!product) {
        return res.status(404).send({
          error: 'No product found',
        });
      }

      return res.status(200).send(product);
    });
  } catch (error) {
    return res.status(500).send({
      error: 'Something went wrong getProduct: ' + error,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;
    Product.updateOne({ _id: id }, body, (err, data) => {
      if (err) throw err;

      return res.status(202).send({
        message: 'Product information updated',
        product: data,
      });
    });
  } catch (error) {
    return res.status(500).send({
      error: 'Something went wrong while updating updateProduct: ' + error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.deleteMany({ _id: req.params.id });

    return res.status(204).send({
      message: 'Product deleted',
    });
  } catch (error) {
    return res.status(500).send({
      error: 'Something went wrong while deleteProduct: ' + error,
    });
  }
};
