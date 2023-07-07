import { createApp } from "vue";
// import bootstrap from "../node_modules/bootstrap/scss/bootstrap.scss";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(solidStar, regularStar);

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
