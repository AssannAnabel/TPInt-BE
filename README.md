# TP Integrador : Backend

Proyecto integrador realizado bajo el framework NestJS, que nos sirve para incorporar todos los conceptos utilizados hasta el momento, como el uso de servidores, HTTP, response, API, etc. La idea principal es poder utilizar metodos *CRUD*. 
Integrantes (link al perfil de Linkedin:
[Anabel Assan](https://www.linkedin.com/in/anabel-assann/)
[Fabricio Córdoba](https://www.linkedin.com/in/fabricio-cordoba/)
[Santiago Garda](https://www.linkedin.com/in/santiago-garda-1835891b9/)
[Emiliano Salazar](https://www.linkedin.com/in/emiliano-salazar/)

## I Sprint -15/8 al 21/8-

1. **HTTP file server** 
Crear el proyecto utilizando NestJS
2. **Response desde el arreglo local**
Armar modelo de datos - Simular una peticion y su consiguiente respuesta del backend.
3. **GET_Mock json-server**
Montar base de datos de prueba - Conectarla con la API - Tener un servicio con una peticion y su respuesta (datos obtenidos de una DB)

[Trello de actividades Ágiles -I Sprint-:](https://trello.com/b/Xb5CvUle/inventario)

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

4. **MVC Postman - getById** 
Obtener la respuesta de la peticion creada en el punto 3 utilizando POSTMAN
5. **Altas API**
Crear los endpoints necesarios de ALTA para nuestra API utilizando metodos POST

### Instrucciones para correr el codigo
Abrir POSTMAN y pegar la siguiente request:

> http://localhost:3011/inventory

En el apartado GET, traerá todos los registros de la ruta. Y para buscar un elemento en particular, mediante su id, escribir:

> http://localhost:3011/inventory/id:number

En caso de existir, traerá el registro correspondiente, de lo contrario mostrará un array vacío (not found 404)

**Para crear un nuevo registro** 
Utilizaremos el metodo **POST** en el Postman dentro de la lista, y en la sección Body añadir datos que se quieran cargar al MockAPI generado previamente. Este creara un nuevo registro con su id especifico previamente generado por codigo. 

[Trello de actividades Ágiles -II Sprint-:](https://trello.com/b/Xb5CvUle/inventario)

## III Sprint -29/8 al 4/9-

6. **Bajas y Modificaciones** 
Crear los endpoints necesarios de BAJA y MODIFICACIONES para nuestra API utilizando metodos PUT y DELETE
7. **Response Codes**
A todos los endpoints previamente creados agregarle los codigos de respuesta utilizando el decorador @Res

En este sprint ya tenemos todos los metodos **CRUD** implementados, y cada uno con una respuesta que nos devuelve la solicitud **HTTP** (generada por nosotros, a traves de **@Res()**)

[Trello de actividades Ágiles -III Sprint:](https://trello.com/b/Xb5CvUle/inventario)