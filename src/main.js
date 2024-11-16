import { createApp } from "vue";
import App from "./App.vue";
import store from "./store"; // Importa el store de Vuex
import "./assets/styles.css"; // Importar estilos globales

const app = createApp(App);
app.use(store); // Registra Vuex
app.mount("#app");
