import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  // Aquí se importa el Mongoose.module, para definir el modelo de la base de datos
  imports: [
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema
      }
    ])
  ],
  exports: [
    MongooseModule // se exporta solo el mongooseModule a secas, porque ya lo exporta con el modelo definido, el monoseemodule.forFeature.
  ]
})
export class PokemonModule {}
