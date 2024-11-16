# CRUD con Firebase y Vue.js

Este es un proyecto de ejemplo para un CRUD utilizando **Vue.js** y **Firebase Firestore** como base de datos. La aplicación permite agregar, listar y eliminar usuarios de manera sencilla, con un diseño inspirado en la paleta de colores de **Vue.js**.

## Características

- **Agregar Usuario**: Formulario para ingresar el nombre y correo del usuario.
- **Listar Usuarios**: Tabla que muestra a todos los usuarios registrados.
- **Eliminar Usuario**: Botón para eliminar usuarios tanto de Firestore como de la tabla.
- **Diseño Moderno**: Paleta de colores basada en **Vue.js**.

---

## Tecnologías Utilizadas

- **Vue.js 3**: Framework para la construcción de la interfaz.
- **Firebase Firestore**: Base de datos NoSQL para almacenar los usuarios.
- **Vite**: Herramienta para el desarrollo y construcción del proyecto.
- **CSS Scoped**: Estilos personalizados para cada componente.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

---

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git


cd tu-repositorio


npm install


Configura Firebase:

Crea un archivo firebaseConfig.js en la carpeta src.
Copia la configuración de tu proyecto en Firebase Console y reemplaza los valores en este archivo:

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


npm run dev

Uso
Agregar Usuario
Completa el formulario con el nombre y correo del usuario.
Haz clic en Agregar.
Listar Usuarios
Los usuarios se muestran automáticamente en una tabla después de ser registrados.
Eliminar Usuario
Haz clic en el botón Eliminar para remover a un usuario de la base de datos.
Construcción
Para generar los archivos estáticos listos para producción:

bash
Copiar código
npm run build
Créditos
Este proyecto fue desarrollado como parte de un desafío para aprender a integrar Vue.js con Firebase.

Licencia
Este proyecto está bajo la Licencia MIT.

yaml
Copiar código

---

### Subir el Proyecto a GitHub

1. Inicia un repositorio local:
   ```bash
   git init
   git add .
   git commit -m "Proyecto CRUD con Firebase y Vue.js"
Enlaza con tu repositorio remoto en GitHub:

bash
Copiar código
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
Sube el proyecto:

bash
Copiar código
git push -u origin main
