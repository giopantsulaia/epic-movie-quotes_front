import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import "@vee-validate/rules";
import "@/config/vee-validate/rules.js";
import "@/config/vee-validate/messages";
const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
app.use(router);

app.mount("#app");
