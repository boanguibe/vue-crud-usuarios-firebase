<template>
  <div class="app-container">
    <header class="app-header">CRUD con Firebase</header>
    <AgregarUsuario />
    <ListaUsuarios />
  </div>
</template>

<script>
import AgregarUsuario from "./components/AgregarUsuario.vue";
import ListaUsuarios from "./components/ListaUsuarios.vue";

export default {
  components: {
    AgregarUsuario,
    ListaUsuarios
  }
};
</script>

