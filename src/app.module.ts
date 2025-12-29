import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],      // se dee configurar para que pueda realizar la lectura de las configuraciones del .env
      validationSchema: JoiValidationSchema,
    }), 

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),
    MongooseModule.forRoot(process.env.MONGODB as string, {
      dbName: 'pokemondb'
    }), // Conexion a la base de datos mendiante paquete de nest mongoose
    PokemonModule, 
    CommonModule, 
    SeedModule,
  ],
})
export class AppModule {

  constructor(){}
}
