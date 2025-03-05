import { DataSource } from 'typeorm';
import { AppDataSource } from '../../../config/data-source';
// import { seedUsers } from '../../../modules/users/infrastructure/database/seeds/common/users.seed';


const seedDatabase = async (dataSource: DataSource) => {
    console.log('🌱 Ejecuting seeds...');
  
    const environment = process.env.NODE_ENV || 'development';
  
    if (environment === 'development' || environment === 'test') {
      console.log('🔧 Executing seeds for development/testing');
    //   await seedUsers(dataSource);
    }
  
    if (environment === 'production') {
      console.log('🚀 Executing seeds for prod...');
      // Prod seeds
    }
  
    console.log('✅ Seeds completed');
  };
  
  AppDataSource.initialize()
    .then(async (dataSource) => {
      await seedDatabase(dataSource);
      await AppDataSource.destroy();
    })
    .catch((error) => console.error('❌ Error executing seeds:', error));