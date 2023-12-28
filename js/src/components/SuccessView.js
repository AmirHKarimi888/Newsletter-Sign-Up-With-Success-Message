import SubscriptionView from "./SubscriptionView.js";
class EndView {
    app;
    constructor() {
        this.app = document.querySelector("#app");
    }
    eventHandler() {
        const dismissMessageBtnEl = document.querySelector("#dismissMessageBtn");
        dismissMessageBtnEl?.addEventListener("click", () => {
            SubscriptionView.render();
        });
    }
    render(email) {
        const markup = /*html*/ `
        <div class="success">

        <div class="success-content">
          <img src="./assets/images/icon-success.svg" alt="">
          <h1>Thanks for subscribing!</h1>
  
          <p>
            A confirmation email has been sent to <span>${email}</span>. 
            Please open it and click the button inside to confirm your subscription.
          </p>
        </div>
  
        <button id="dismissMessageBtn">Dismiss message</button>
      </div>
        `;
        this.app.innerHTML = "";
        this.app.insertAdjacentHTML("afterbegin", markup);
        this.eventHandler();
    }
}
export default new EndView();
