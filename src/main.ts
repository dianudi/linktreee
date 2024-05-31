import "./style.css";
import Alpine from "alpinejs";
import type { Alpine as alpineType } from "alpinejs";

declare global {
  interface Window {
    Alpine: alpineType;
  }
}
window.Alpine = Alpine;

Alpine.start();
