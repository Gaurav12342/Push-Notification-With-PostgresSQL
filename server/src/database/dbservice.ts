import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  database: 'push_notification',
  host: 'localhost',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err: any) => {
    console.error('Error connecting to PostgreSQL database', err);
  });
