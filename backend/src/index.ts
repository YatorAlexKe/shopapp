import express from 'express';
import cors from 'cors';
import { join } from 'path';
import productRoutes from './routes/products.routes';
import './seed';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/images', express.static(join(__dirname, '../src/assets/images')));
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});