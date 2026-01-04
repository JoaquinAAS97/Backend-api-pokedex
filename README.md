<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar los siguientes comandos

```
npm install
```

3. Disponer de Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos, ejecutar el siguiente código en tu terminal

```
docker-compose up -d
```

5. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```

6. Llenar las variables de entorno definidas en el ```.env```


7. Ejecutar la aplicación en dev:

__En Windows__
```
npm run start:dev
```
__En MacOs__
```
yarn start:dev
```

8. econstruir la base de datos con el Seed(semilla), esto poblará la base de datos con 650 registros de pokemones

```
http://localhost:3000/api/v2/seed

```


## Stack usado
* MongoDB
* Nest js


# Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

```

## URL Para crear nuevo pokemon(POST)

* Ingresar en el body, los siguientes atributos y sus tipos(solo el formato):

```
{
    "no": 1,
    "name": "namePokemon"
}

```
```
http://localhost:3000/api/v2/pokemon

```

## URL para Obtener todos los Pokemon (GET)

```
http://localhost:3000/api/v2/pokemon

```

## URL para obtener pokemon a través de su MongoID

```
http://localhost:3000/api/v2/pokemon/{MongoID}

```

## URL para obtener pokemon a través de su Nombre

```
http://localhost:3000/api/v2/pokemon/{NamePokeon}

```

## URL para obtener pokemon a través de su Numero de pokemon

```
http://localhost:3000/api/v2/pokemon/{number}

```

## URL para actualizar un pokemon (PATCH)

* Ingresar en el body, los siguientes atributos y sus tipos (solo el formato):
  
```
{
    "no": 1,
    "name": "namePokemon"
}

```
```
http://localhost:3000/api/v2/pokemon/{mongoID}

```

## URL para eliminar un pokemon

```
http://localhost:3000/api/v2/pokemon/{MongoID}

```