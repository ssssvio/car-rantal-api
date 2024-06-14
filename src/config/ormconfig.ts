import { configDotenv } from 'dotenv';
import { DataSource } from 'typeorm';

configDotenv();

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
