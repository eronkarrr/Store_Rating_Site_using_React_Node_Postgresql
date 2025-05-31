import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StoresModule } from './stores/stores.module';
import { RatingsModule } from './ratings/ratings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 2511,
      username: 'postgres',    
      password: 'Onkar@07',    
      database: 'ratingdb',
      autoLoadEntities: true,
      synchronize: true,       // dev मध्ये true (DB structure auto update होईल)
    }),
    AuthModule,
    UsersModule,
    StoresModule,
    RatingsModule,
  ],
})
export class AppModule {}
