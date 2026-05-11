import db from './database';

const products = [
  { name: 'Wireless Headphones', description: 'High quality sound with noise cancellation', price: 79.99, image: 'http://localhost:3000/images/headphones.jpg', category: 'Electronics' },
  { name: 'Running Shoes', description: 'Lightweight and comfortable for long runs', price: 59.99, image: 'http://localhost:3000/images/shoes.jpg', category: 'Sports' },
  { name: 'Coffee Maker', description: 'Brew the perfect cup every morning', price: 49.99, image: 'http://localhost:3000/images/coffee.jpg', category: 'Kitchen' },
  { name: 'Backpack', description: 'Durable backpack with laptop compartment', price: 39.99, image: 'http://localhost:3000/images/backpack.jpg', category: 'Accessories' },
  { name: 'Desk Lamp', description: 'LED lamp with adjustable brightness', price: 29.99, image: 'http://localhost:3000/images/lamp.jpg', category: 'Home' },
  { name: 'Sunglasses', description: 'UV400 protection with polarized lenses', price: 24.99, image: 'http://localhost:3000/images/sunglasses.jpg', category: 'Accessories' },
];

const insert = db.prepare(`
  INSERT INTO products (name, description, price, image, category)
  VALUES (@name, @description, @price, @image, @category)
`);

const count = db.prepare('SELECT COUNT(*) as count FROM products').get() as { count: number };

if (count.count === 0) {
  products.forEach(p => insert.run(p));
  console.log('Database seeded with sample products!');
} else {
  console.log('Database already has products, skipping seed.');
}