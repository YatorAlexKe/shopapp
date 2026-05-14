"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = __importDefault(require("../database"));
const router = (0, express_1.Router)();
// GET /products — return all products
router.get('/', (req, res) => {
    const products = database_1.default.prepare('SELECT * FROM products').all();
    res.json(products);
});
// GET /products/:id — return a single product
router.get('/:id', (req, res) => {
    const product = database_1.default.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
    if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
    }
    res.json(product);
});
exports.default = router;
