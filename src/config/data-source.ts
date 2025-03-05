import 'reflect-metadata';
import { DataSource } from 'typeorm';
import ormconfig from './typeorm.config';

export const AppDataSource = new DataSource(ormconfig);

AppDataSource.initialize()
  .then(() => console.log('📦 DataSource inicialized'))
  .catch((error) => console.error('❌ Error at start datasource', error));
