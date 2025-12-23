import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { pokemonInsert } from './interfaces/pokemon-insert.interface';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>){}

  async executeSeed(){
    // Eliminar todos los registros para evitar error por inserciones repetidas
    await this.pokemonModel.deleteMany({}); // esto es igual al delete * from pokemon, se ejecuta para evitar errores en insersiones repetidas

    const {data} = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

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
