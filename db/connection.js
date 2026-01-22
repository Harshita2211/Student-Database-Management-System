import {Pool} from 'pg';
import 'dotenv/config';

// Create PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Test the database connection
pool .on('connect', () => {
  console.log('Connected to the PostgreSQL database');
})
pool .on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// export function to query the database
const query = (text, params) => pool.query(text, params);

export default {
  query, 
  pool
};