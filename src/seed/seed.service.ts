import { Inject, Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { pokemonInsert } from './interfaces/pokemon-insert.interface';
import type { HttpAdapter } from 'src/common/interfaces/http-adapter.interface';


@Injectable()
export class SeedService {

  
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    @Inject('HttpAdapter') 
    /* se debe injectar el 'HttpAdapter' como interfaz. Esto se debe realizar cuando no se inyectan token personalizados o 
    interfaces, es decir, si el provider es directament euna clase, no se debe inyectar nada */
    private readonly http: HttpAdapter,
  ){}
   

  async executeSeed(){
    // Eliminar todos los registros para evitar error por inserciones repetidas
    await this.pokemonModel.deleteMany({}); // esto es igual al delete * from pokemon, se ejecuta para evitar errores en insersiones repetidas

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

    const pokemonToInsert: pokemonInsert[] = [];

    // Opcion: 1, crear arreglo de promesas de tipo pokemon
    // const insertPromisesArray: Promise<Pokemon>[] = [];

    data.results.forEach(({name, url}) => {
      const segment = url.split('/');
      const no = +segment[segment.length -2 ];

      pokemonToInsert.push({name, no}); //[name: bulbasaur, no:1]
      // const pokemon = await this.pokemonModel.create({name, no})

      // opcion: 1, aquí se insertan todas las promesas del this.pokemonModel.create() --> insert a la base de datos
      // insertPromisesArray.push(
      //   this.pokemonModel.create({name, no})
      // )
      
    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    // opcion: 1, aqui, de forma asincrónica Promise.All esperará que se resulvan todas la promesas de las creación a la BD del inserPromises.push()
    // await Promise.all(insertPromisesArray);

    return 'Seed executed!';
  }
}
