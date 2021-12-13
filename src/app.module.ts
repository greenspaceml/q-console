import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-3-217-216-13.compute-1.amazonaws.com',
      port: 5432,
      username: 'qjbjdmmnmbpxfl',
      password: '3c50aeebf777392e26696e299eaa8419272e39974b662e9e240ffc31e24791ad',
      database: 'd8jmc0ui9crhum',
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        }
      }
    }),
    AuthModule,
  ],
})
export class AppModule {
}
