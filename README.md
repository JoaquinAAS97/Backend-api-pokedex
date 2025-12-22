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


## Stack usado
* MongoDB
* Nest js

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