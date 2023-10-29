import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5555,
  username: 'todo',
  password: 'todo',
  database: 'todo',
  synchronize: true,
  logging: false,
  entities: ['src/entities/*.ts'],
});
