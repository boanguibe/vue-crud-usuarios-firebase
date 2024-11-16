<template>
  <div class="usuarios-container">
    <h2 class="titulo">Lista de Usuarios</h2>
    <table class="usuarios-tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.correo }}</td>
          <td>
            <button class="boton" @click="eliminarUsuario(usuario.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { db } from "../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default {
  computed: {
    usuarios() {
      return this.$store.state.usuarios;
    }
  },
  methods: {
    async fetchUsuarios() {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      const usuarios = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      this.$store.commit("setUsuarios", usuarios);
    },
    async eliminarUsuario(id) {
      try {
        await deleteDoc(doc(db, "usuarios", id));
        this.$store.commit("eliminarUsuario", id);
      } catch (e) {
        console.error("Error al eliminar usuario:", e);
      }
    }
  },
  mounted() {
    this.fetchUsuarios();
  }
};
</script>

<style scoped>
/* Contenedor Principal */
.usuarios-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #42b883; /* Verde Vue.js */
}

/* Tabla */
.usuarios-tabla {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  color: #333;
}

.usuarios-tabla th,
.usuarios-tabla td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.usuarios-tabla th {
  background-color: #42b883; /* Verde Vue.js */
  color: white;
  text-transform: uppercase;
}

.usuarios-tabla tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Botones */
.boton {
  background-color: #35495e; /* Azul Oscuro Vue.js */
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  display: block;
  margin: 0 auto; /* Centramos el botón */
}

.boton:hover {
  background-color: #42b883; /* Verde Vue.js */
}
</style>