## MeliChallenge

Este proyecto fue hecho mediante:

  - [Create React App] (https://github.com/facebook/create-react-app)
  - [Express generator] (https://expressjs.com/es/starter/generator.html)

Tecnologías implementadas:

  - [Node JS] v10.20.1 (https://nodejs.org) 
  - [React JS] v16.13.1 (https://react.com) 
  - [Express JS] v4.16.1 (https://expressjs.com/)
  - [Yarn ] v1.22.4 (https://yarnpkg.com/)
  - [Npm ] v6.14.4 (https://npmjs.com/)

Descarga de proyecto:

  - Bajar el codigo fuente del repositorio
  - ### `https://github.com/expirales/melichallenge.git`

Instalar dependencias 

  - Abrir la terminal, navegar hacia la carpeta melichallenge y ejecutar:
  - ### `yarn install && cd backend && yarn install`

## Scripts disponibles (Front-End)

En el proyecto se pueden correr los siguientes comandos:

### `yarn run start:dev`
Para correr la aplicación front-end en el entorno de desarrollo. 
Link para abrir: [http://localhost:3000](http://localhost:3000) en el navegador.

Automáticamente la página se va actualizando en caso de que se realicen modificaciones.

### `yarn test`

Se corren los test unitarios y se prueba la total integridad y funcionalidad de los componentes de la página.
Mas info: [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `yarn build`

En caso de que se realice un pase al entorno de producción se correra este comando, creando una carpeta "build" que contendra todo la aplicación empaquetada y optimizada para su puesta en marcha. (Incluye compresión | mimificación de codigo fuente.)

Mas info: [deployment](https://facebook.github.io/create-react-app/docs/deployment) 

## Scripts disponibles (Back-End)

En el proyecto se pueden correr los siguientes comandos:

### `yarn start`
Para correr la aplicación back-end en el entorno de desarrollo.
Link para abrir: [http://localhost:3001/api](http://localhost:3001/api) en el navegador.

Automáticamente la API se va actualizando en caso de contar con librerias que observan los cambios al codigo como Nodemon.

## Scripts extras ()

Para correr la App + Api al mismo tiempo se preparo un comando que puede ser utilizado para correr otros comandos de manera concurrente:

### `yarn run conc`
Se encuentra en la carpeta "backend" configurado en el packages.json (directorio root).
