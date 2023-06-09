import "./style.css";
import typescriptLogo from "./typescript.svg";
import { Header, Counter, setupCounter } from "@turbo-vite/ui";

const appElement = document.querySelector<HTMLDivElement>("#app");

if (appElement) {
  appElement.innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      ${Header({ title: "Web" })}
      <div class="card">
        ${Counter()}
      </div>
    </div>`;
}

const counterElement = document.querySelector<HTMLButtonElement>("#counter");

if (counterElement) {
  setupCounter(counterElement);
}
