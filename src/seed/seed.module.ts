import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    PokemonModule // se importa este modulo, porque exporta el modelo de la BD mongooseModule.ForFeature.
  ]
})
export class SeedModule {}
