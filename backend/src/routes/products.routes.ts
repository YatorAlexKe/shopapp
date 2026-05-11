import { Router, Request, Response } from 'express';
import db from '../database';
import { Product } from '../models/product.model';

const router = Router();

// GET /products — return all products
router.get('/', (req: Request, res: Response) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});

// GET /products/:id — return a single product
router.get('/:id', (req: Request, res: Response) => {
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }
  res.json(product);
});

export default router;