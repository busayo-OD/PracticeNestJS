import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from './user/user.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/entity/user.entity";
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [AppController],
    imports: [
        UserModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: 'bus02ay94_001',
            database: 'nestjs',
            entities: [User],
            synchronize: true,
          }),
        AuthModule,
    ],
})
export class AppModule{}