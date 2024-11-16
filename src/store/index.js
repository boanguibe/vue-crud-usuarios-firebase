import { createStore } from "vuex";

export default createStore({
  state: {
    usuarios: [] // Estado inicial de los usuarios
  },
  mutations: {
    setUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    },
    agregarUsuario(state, usuario) {
      state.usuarios.push(usuario);
    },
    eliminarUsuario(state, id) {
      state.usuarios = state.usuarios.filter(usuario => usuario.id !== id);
    }
  },
  actions: {
    async fetchUsuarios({ commit }) {
      // Acción para obtener usuarios de Firestore (se configurará más adelante)
    }
  }
});
