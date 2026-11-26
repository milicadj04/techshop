import { Router } from 'express';
import * as productController from '../controllers/productController.js';

const router = Router();

router.route('/').post(productController.createProduct);

router.route('/').get(productController.getProducts);
router.route('/:id').get(productController.getProduct);

router.route('/:id').put(productController.updateProduct);

router.route('/:id').delete(productController.deleteProduct);

export default router;
