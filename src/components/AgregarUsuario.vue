<template>
  <div class="agregar-usuario-container">
    <h2 class="titulo">Agregar Usuario</h2>
    <form class="formulario" @submit.prevent="agregarUsuario">
      <input v-model="nombre" class="input" type="text" placeholder="Nombre" required />
      <input v-model="correo" class="input" type="email" placeholder="Correo" required />
      <button class="button" type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      nombre: "",
      correo: ""
    };
  },
  methods: {
    async agregarUsuario() {
      try {
        const docRef = await addDoc(collection(db, "usuarios"), {
          nombre: this.nombre,
          correo: this.correo
        });
        this.$store.commit("agregarUsuario", { id: docRef.id, nombre: this.nombre, correo: this.correo });
        this.nombre = "";
        this.correo = "";
      } catch (e) {
        console.error("Error al agregar usuario:", e);
      }
    }
  }
};
</script>

<style scoped>
/* Contenedor Centralizado */
.agregar-usuario-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 2px solid #42b883;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Título */
.titulo {
  text-align: center;
  font-size: 1.5rem;
  color: #35495e;
  margin-bottom: 20px;
}

/* Formulario */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Inputs */
.input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

/* Botón */
.button {
  align-self: center;
  padding: 10px 15px;
  background-color: #35495e; /* Azul Oscuro Vue.js */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}

.button:hover {
  background-color: #42b883; /* Verde Vue.js */
}
</style>

