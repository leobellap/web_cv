import Alpine from "alpinejs";
import collapse_data from "./collapse.js";
import collapse from "@alpinejs/collapse";

Alpine.plugin(collapse);

Alpine.data("collapse_data", collapse_data);

window.Alpine = Alpine;

Alpine.start();
