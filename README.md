### Indice

# TP Integrador : Backend

Proyecto integrador realizado bajo el framework NestJS, que nos sirve para incorporar todos los conceptos utilizados hasta el momento, como el uso de servidores, HTTP, response, API, etc. La idea principal es poder utilizar metodos *CRUD*. 


## I Sprint -15/8 al 21/8-

1. **HTTP file server** 
Crear el proyecto utilizando NestJS
2. **Response desde el arreglo local**
Armar modelo de datos - Simular una peticion y su consiguiente respuesta del backend.
3. **GET_Mock json-server**
Montar base de datos de prueba - Conectarla con la API - Tener un servicio con una peticion y su respuesta (datos obtenidos de una DB)

[Trello de actividades Ágiles I sprint:](https://trello.com/b/Xb5CvUle/inventario)

### Instrucciones para correr el codigo

1.  Sobre la carpeta **backend** abrir una terminal de Git y escribir el comando
>`$ npm i json-server -d`

Json server genera un falso servidor para poder trabajar nuestra base de datos en el front.

Luego de instalar json-server, ir al package.json, en el apartado scripts, y agregar: 
>`"db":"json-server ./data/db.json --w --port 3011"`

2. Escribir el comando :
> `$ npm  run  db`  

Este comando queda en modo vigilia, así se logra ver cada cambio que se hace al codigo en tiempo real.

## II Sprint -22/8 al 28/8-

1. **MVC Postman - getById** 
Obtener la respuesta de la peticion creada en el punto 3 utilizando POSTMAN
2. **Altas API**
Crear los endpoints necesarios de ALTA para nuestra API utilizando metodos POST

[Trello de actividades Ágiles II sprint:](https://trello.com/b/Xb5CvUle/inventario)