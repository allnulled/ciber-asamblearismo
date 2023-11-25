# ciber-asamblearismo

Código fuente de un servidor minimalista para la organización civil *(ciber)* asamblearia. 

## Índice

- [ciber-asamblearismo](#ciber-asamblearismo)
  - [Índice](#índice)
  - [Tecnicismos](#tecnicismos)
  - [Instalación](#instalación)
  - [Ejecución](#ejecución)
  - [Tests](#tests)
  - [Documentación](#documentación)


## Tecnicismos

- Stack de backend basado en [Node.js](https://nodejs.org/en/docs) + [Express](https://expressjs.com/en/4x/api.html) + [SQLite](https://www.npmjs.com/package/sqlite3) principalmente.
- Stack de frontend basado en [Castelog](https://github.com/allnulled/castelog) + [Vue2](https://v2.vuejs.org/v2/guide/) + otros como Vue-Router, .
- Un subproyecto de [`express-boilerplate`](https://github.com/allnulled/express-boilerplate).

## Instalación

Para instalar solo tienes que descargarte y descomprimir el proyecto manualmente o por consola así:

```sh
git clone https://github.com/allnulled/ciber-asamblearismo .
```

Luego instalar las dependencias de `node` así:

```
npm install
```

## Ejecución

Para ejecutar el servidor solo tienes que hacer en tu consola:

```sh
npm start
```

## Tests

Para ejecutar los tests, con el servidor encendido antes porque si no fallarán, solo tienes que hacer en tu consola:

```sh
npm test
```

## Documentación

Tienes documentación extra en:

- Para usuarios está [USER-GUIDE.md](./reference/USER-GUIDE.md).
- Para desarrolladores está [JAVADOC.md](./reference/JAVADOC.md).



