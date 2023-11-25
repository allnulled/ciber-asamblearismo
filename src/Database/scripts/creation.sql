CREATE TABLE Usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(255) UNIQUE,
    contrasenya VARCHAR(255),
    correo VARCHAR(255)
);

CREATE TABLE Permiso (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(255),
    descripcion VARCHAR(511)
);

CREATE TABLE Permiso_de_usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario INTEGER,
    id_permiso INTEGER,
    FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
    FOREIGN KEY (id_permiso) REFERENCES Permiso (id)
);

CREATE TABLE Sesion (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    token VARCHAR(100),
    id_usuario INTEGER,
    FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);

CREATE TABLE Votacion (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    presentacion TEXT,
    estado VARCHAR(64),
    fecha_de_fase_1 DATETIME,
    fecha_de_fase_2 DATETIME,
    fecha_de_fase_3 DATETIME,
    fecha_de_fase_4 DATETIME,
    fecha_de_fase_5 DATETIME,
    fecha_de_fase_6 DATETIME,
    fecha_de_fase_7 DATETIME,
    fecha_de_fase_8 DATETIME,
    fecha_de_fase_9 DATETIME
);

CREATE TABLE Problema (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(1024),
    descripcion TEXT,
    contenido TEXT,
    votos_positivos INTEGER,
    votos_negativos INTEGER,
    id_votacion INTEGER,
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id)
);

CREATE TABLE Problema_clasificado (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(1024),
    descripcion TEXT,
    contenido TEXT,
    votos_positivos INTEGER,
    votos_negativos INTEGER,
    id_votacion INTEGER,
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id)
);

CREATE TABLE Solucion (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(1024),
    descripcion TEXT,
    contenido TEXT,
    votos_positivos INTEGER,
    votos_negativos INTEGER,
    id_votacion INTEGER,
    id_problema_clasificado INTEGER,
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
    FOREIGN KEY (id_problema_clasificado) REFERENCES Problema_clasificado (id)
);

CREATE TABLE Solucion_clasificada (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(1024),
    descripcion TEXT,
    contenido TEXT,
    votos_positivos INTEGER,
    votos_negativos INTEGER,
    id_votacion INTEGER,
    id_problema_clasificado INTEGER,
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
    FOREIGN KEY (id_problema_clasificado) REFERENCES Problema_clasificado (id)
);

CREATE TABLE Implementacion (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(1024),
    descripcion TEXT,
    contenido TEXT,
    votos_positivos INTEGER,
    votos_negativos INTEGER,
    id_votacion INTEGER,
    id_problema_clasificado INTEGER,
    id_solucion_clasificada INTEGER,
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
    FOREIGN KEY (id_problema_clasificado) REFERENCES Problema_clasificado (id),
    FOREIGN KEY (id_solucion_clasificada) REFERENCES Solucion_clasificada (id)
);

CREATE TABLE Implementacion_clasificada (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(1024),
    descripcion TEXT,
    contenido TEXT,
    votos_positivos INTEGER,
    votos_negativos INTEGER,
    id_votacion INTEGER,
    id_problema_clasificado INTEGER,
    id_solucion_clasificada INTEGER,
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
    FOREIGN KEY (id_problema_clasificado) REFERENCES Problema_clasificado (id),
    FOREIGN KEY (id_solucion_clasificada) REFERENCES Solucion_clasificada (id)
);

CREATE TABLE Voto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_votacion INTEGER,
    id_problema INTEGER,
    id_problema_clasificado INTEGER,
    id_solucion INTEGER,
    id_solucion_clasificada INTEGER,
    id_implementacion INTEGER,
    id_implementacion_clasificada INTEGER,
    sentido VARCHAR(64),
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
    FOREIGN KEY (id_problema) REFERENCES Problema (id),
    FOREIGN KEY (id_problema_clasificado) REFERENCES Problema_clasificado (id),
    FOREIGN KEY (id_solucion) REFERENCES Solucion (id),
    FOREIGN KEY (id_solucion_clasificada) REFERENCES Solucion_clasificada (id),
    FOREIGN KEY (id_implementacion) REFERENCES Implementacion (id),
    FOREIGN KEY (id_implementacion_clasificada) REFERENCES Implementacion_clasificada (id)
);