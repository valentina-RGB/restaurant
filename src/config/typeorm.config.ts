import * as dotenv from 'dotenv';
import { SeederOptions } from "typeorm-extension";
import {  DataSourceOptions } from 'typeorm';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const rootDir = __dirname.includes('dist') ? 'dist' : 'src';

const ormconfig: DataSourceOptions & SeederOptions = {
  type: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres' as 'postgres' | 'sqlite',
  host: process.env.NODE_ENV !== 'test' ? process.env.DB_HOST : undefined,
  port: process.env.NODE_ENV !== 'test' ? process.env.DB_PORT : undefined,
  username: process.env.NODE_ENV !== 'test' ? process.env.DB_USER : undefined,
  password: process.env.NODE_ENV !== 'test' ? process.env.DB_PASSWORD : undefined,
  database: process.env.NODE_ENV === 'test' ? ':memory:' : process.env.DB_NAME,
  entities: [`${rootDir}/modules/**/infrastructure/entities/*.{ts,js}`],
  migrations: [
    `${rootDir}/modules/**/infrastructure/database/migrations/*.{ts,js}`,
    `${rootDir}/infrastructure/database/migrations/*.{ts,js}`,
  ],
  synchronize: false,
  migrationsRun: false,
  logging: process.env.NODE_ENV !== 'production',
} as DataSourceOptions & SeederOptions;


export default ormconfig;