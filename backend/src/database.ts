import Database from 'better-sqlite3';
import { join } from 'path';

const db = new Database(join(__dirname, 'shop.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    image TEXT,
    category TEXT
  )
`);

export default db;