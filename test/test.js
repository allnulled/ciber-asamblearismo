
require(__dirname + "/lib/calo/calo.js");
const main = async function() {try {
console.log("[*] Inicio de tests");
console.log("[*] Se cargan los tests");
const testLogin = async function( options ) {try {
console.log("[*] Test de /Login");
const nombre = "admin";
const contrasenya = "admin";
const respuesta_1 = (await Castelog.metodos.una_peticion_http("http://127.0.0.1:5054/Login", "POST", { nombre,
contrasenya
}, { 
}, null, error => {
throw error;}));
if(!(typeof respuesta_1.data === 'object')) throw new Error("Error en fichero [-] en posición [595-645=20:30-21:50] cuando: " + "compruebo que respuesta_1.data es tipo objeto");
if(!(typeof respuesta_1.data.data === 'object')) throw new Error("Error en fichero [-] en posición [646-701=21:51-22:55] cuando: " + "compruebo que respuesta_1.data.data es tipo objeto");
if(!(typeof respuesta_1.data.data.sesion === 'object')) throw new Error("Error en fichero [-] en posición [702-764=22:56-23:62] cuando: " + "compruebo que respuesta_1.data.data.sesion es tipo objeto");
if(!(typeof respuesta_1.data.data.sesion.token === 'string')) throw new Error("Error en fichero [-] en posición [765-832=23:63-24:67] cuando: " + "compruebo que respuesta_1.data.data.sesion.token es tipo texto");
options.token_de_sesion = respuesta_1.data.data.sesion.token;
} catch(error) {
console.log(error);
throw error;
}

};
const testCreateUser = async function( options ) {try {
console.log("[*] Test de /CreateUser");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("http://127.0.0.1:5054/CreateUser", "POST", { nombre:"noadmin2",
contrasenya:"noadmin2",
correo:"noadmin2@admins.org"
}, { authorization:options.token_de_sesion
}, null, error => {
throw error;}));
if(!(typeof respuesta_1.data === 'object')) throw new Error("Error en fichero [-] en posición [1376-1426=39:30-40:50] cuando: " + "compruebo que respuesta_1.data es tipo objeto");
if(!(typeof respuesta_1.data.data === 'object')) throw new Error("Error en fichero [-] en posición [1427-1482=40:51-41:55] cuando: " + "compruebo que respuesta_1.data.data es tipo objeto");
if(!(((o) => (typeof o === 'number') && (!isNaN(o)) && (o !== Infinity))(respuesta_1.data.data.id))) throw new Error("Error en fichero [-] en posición [1483-1548=41:56-42:65] cuando: " + "compruebo que respuesta_1.data.data.id es tipo número normal");
options.id_usuario = respuesta_1.data.data.id;
} catch(error) {
console.log(error);
throw error;
}

};
const testCreateVotation = async function( options ) {try {
console.log("[*] Test de /CreateVotation");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("http://127.0.0.1:5054/CreateVotation", "POST", { presentacion:"Esta votación es la del año tal.",
fecha_de_fase_1:"2023/10/01 15:00:00.000",
fecha_de_fase_2:"2023/10/02 15:00:00.000",
fecha_de_fase_3:"2023/10/03 15:00:00.000",
fecha_de_fase_4:"2023/10/04 15:00:00.000",
fecha_de_fase_5:"2023/10/05 15:00:00.000",
fecha_de_fase_6:"2023/10/06 15:00:00.000",
fecha_de_fase_7:"2023/10/07 15:00:00.000",
fecha_de_fase_8:"2023/10/08 15:00:00.000",
fecha_de_fase_9:"2023/10/09 15:00:00.000"
}, { authorization:options.token_de_sesion
}, null, error => {
throw error;}));
if(!(typeof respuesta_1.data === 'object')) throw new Error("Error en fichero [-] en posición [2515-2565=64:30-65:50] cuando: " + "compruebo que respuesta_1.data es tipo objeto");
if(!(typeof respuesta_1.data.data === 'object')) throw new Error("Error en fichero [-] en posición [2566-2621=65:51-66:55] cuando: " + "compruebo que respuesta_1.data.data es tipo objeto");
if(!(((o) => (typeof o === 'number') && (!isNaN(o)) && (o !== Infinity))(respuesta_1.data.data.id))) throw new Error("Error en fichero [-] en posición [2622-2687=66:56-67:65] cuando: " + "compruebo que respuesta_1.data.data.id es tipo número normal");
options.id_votacion = respuesta_1.data.data.id;
} catch(error) {
console.log(error);
throw error;
}

};
const testProgressVotation = async function( options ) {try {
console.log("[*] Test de /ProgressVotation");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("http://127.0.0.1:5054/ProgressVotation", "POST", { id_votacion:options.id_votacion
}, { authorization:options.token_de_sesion
}, null, error => {
throw error;}));
if(!(typeof respuesta_1.data === 'object')) throw new Error("Error en fichero [-] en posición [3177-3227=80:30-81:50] cuando: " + "compruebo que respuesta_1.data es tipo objeto");
if(!(typeof respuesta_1.data.data === 'object')) throw new Error("Error en fichero [-] en posición [3228-3283=81:51-82:55] cuando: " + "compruebo que respuesta_1.data.data es tipo objeto");
options.id_votacion = respuesta_1.data.data.id;
} catch(error) {
console.log(error);
throw error;
}

};
const testCreateProblem = async function( options,
args ) {try {
console.log("[*] Test de /CreateProblem");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("http://127.0.0.1:5054/CreateProblem", "POST", { titulo:args.titulo,
descripcion:args.descripcion,
contenido:args.contenido,
id_votacion:options.id_votacion
}, { authorization:options.token_de_sesion
}, null, error => {
throw error;}));
if(!(typeof respuesta_1.data === 'object')) throw new Error("Error en fichero [-] en posición [3873-3923=98:30-99:50] cuando: " + "compruebo que respuesta_1.data es tipo objeto");
if(!(typeof respuesta_1.data.data === 'object')) throw new Error("Error en fichero [-] en posición [3924-3979=99:51-100:55] cuando: " + "compruebo que respuesta_1.data.data es tipo objeto");
options.id_problema = respuesta_1.data.data.id;
} catch(error) {
console.log(error);
throw error;
}

};
const testVoteProblem = async function( options,
args ) {try {
console.log("[*] Test de /VoteGiven");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("http://127.0.0.1:5054/VoteGiven", "POST", { id_problema:options.id_problema,
sentido:"positivo"
}, { authorization:options.token_de_sesion
}, null, error => {
throw error;}));
if(!(typeof respuesta_1.data === 'object')) throw new Error("Error en fichero [-] en posición [4485-4535=114:30-115:50] cuando: " + "compruebo que respuesta_1.data es tipo objeto");
if(!(typeof respuesta_1.data.data === 'object')) throw new Error("Error en fichero [-] en posición [4536-4591=115:51-116:55] cuando: " + "compruebo que respuesta_1.data.data es tipo objeto");
options.id_voto = respuesta_1.data.data.id;
} catch(error) {
console.log(error);
throw error;
}

};
const testCreateSolution = async function( options,
args ) {try {
console.log("[*] Test de /CreateSolution");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("http://127.0.0.1:5054/CreateSolution", "POST", { titulo:args.titulo,
descripcion:args.descripcion,
contenido:args.contenido,
id_problema_clasificado:options.id_problema_clasificado
}, { authorization:options.token_de_sesion
}, null, error => {
throw error;}));
if(!(typeof respuesta_1.data === 'object')) throw new Error("Error en fichero [-] en posición [5204-5254=132:30-133:50] cuando: " + "compruebo que respuesta_1.data es tipo objeto");
if(!(typeof respuesta_1.data.data === 'object')) throw new Error("Error en fichero [-] en posición [5255-5310=133:51-134:55] cuando: " + "compruebo que respuesta_1.data.data es tipo objeto");
options.id_problema = respuesta_1.data.data.id;
} catch(error) {
console.log(error);
throw error;
}

};
const testLogout = async function( options ) {try {
console.log("[*] Test de /Logout");
const respuesta_1 = (await Castelog.metodos.una_peticion_http("http://127.0.0.1:5054/Logout", "POST", { 
}, { authorization:options.token_de_sesion
}, null, error => {
throw error;}));
if(!(typeof respuesta_1.data === 'object')) throw new Error("Error en fichero [-] en posición [5722-5772=145:30-146:50] cuando: " + "compruebo que respuesta_1.data es tipo objeto");
if(!(typeof respuesta_1.data.data === 'object')) throw new Error("Error en fichero [-] en posición [5773-5828=146:51-147:55] cuando: " + "compruebo que respuesta_1.data.data es tipo objeto");
if(!(typeof respuesta_1.data.data.mensaje === 'string')) throw new Error("Error en fichero [-] en posición [5829-5891=147:56-148:62] cuando: " + "compruebo que respuesta_1.data.data.mensaje es tipo texto");
if(!(respuesta_1.data.data.mensaje === "La sesión fue cancelada exitosamente")) throw new Error("Error en fichero [-] en posición [5892-5992=148:63-149:100] cuando: " + "compruebo que respuesta_1.data.data.mensaje es igual que \"La sesión fue cancelada exitosamente\"");
options.token_de_sesion = undefined;
} catch(error) {
console.log(error);
throw error;
}

};
const options = { token_de_sesion:undefined
};
(await testLogin( options ));
(await testCreateUser( options ));
(await testCreateVotation( options ));
(await testProgressVotation( options ));
(await testCreateProblem( options,
{ titulo:"Título del problema",
descripcion:"Descripción del problema",
contenido:"Contenido del problema"
} ));
(await testVoteProblem( options,
{ id_problema:options.id_problema,
sentido:"positivo"
} ));
(await testLogout( options ));
} catch(error) {
if(error.response) {
console.log(error.response.data);
}
else {
console.log(error);
}}
};
main(  );