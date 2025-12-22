import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Pokemon extends Document {
    // id : string --> mongodb lo genera dinamicamente
    // El decorador @Prop sirve para definir si el atributo es unico y crear indices o claves
    @Prop({
        unique: true,
        index: true,
    })
    name: string;
    @Prop({
        unique: true,
        index: true,
    })
    no: number;
}

// Permite crear el schema de la BD de mongo db y se debe pasar como argumento La entidad para crear el esquema.
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);