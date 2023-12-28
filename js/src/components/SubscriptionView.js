import { state } from "../model.js";
import SuccessView from "./SuccessView.js";
class StartView {
    app;
    constructor() {
        this.app = document.querySelector("#app");
    }
    eventHandler() {
        const coverImgEl = document.querySelector(".cover-image");
        if (coverImgEl) {
            if (window.innerWidth <= 665) {
                coverImgEl.src = "./assets/images/illustration-sign-up-mobile.svg";
            }
            else if (window.innerWidth >= 666) {
                coverImgEl.src = "./assets/images/illustration-sign-up-desktop.svg";
            }
            window.addEventListener("resize", () => {
                if (window.innerWidth <= 665) {
                    coverImgEl.src = "./assets/images/illustration-sign-up-mobile.svg";
                }
                else if (window.innerWidth >= 666) {
                    coverImgEl.src = "./assets/images/illustration-sign-up-desktop.svg";
                }
            });
        }
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        };
        const subFormEl = document.querySelector(".sub-form");
        const formInputEl = document.querySelector("#formInput");
        const submitFormErrorEl = document.querySelector("#formSubmitError");
        subFormEl?.addEventListener("submit", event => {
            event.preventDefault();
            if (!state.isError) {
                SuccessView.render(formInputEl?.value);
            }
        });
        formInputEl?.addEventListener("change", () => {
            if (!validateEmail(formInputEl?.value)) {
                state.isError = true;
            }
            else {
                state.isError = false;
            }
            if (state.isError) {
                formInputEl?.classList.add("form-input-error");
                formInputEl?.classList.remove("form-input");
                submitFormErrorEl.innerHTML = "Valid email required";
            }
            else {
                formInputEl?.classList.add("form-input");
                formInputEl?.classList.remove("form-input-error");
                submitFormErrorEl.innerHTML = "";
            }
        });
    }
    render() {
        const markup = /*html*/ `
        <div class="subscription">
        <div class="sub-form">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li><img src="./assets/images/icon-success.svg"> Product discovery and building what matters</li>
              <li><img src="./assets/images/icon-success.svg"> Measuring to ensure updates are a success</li>
              <li><img src="./assets/images/icon-success.svg"> And much more!</li>
            </ul>
  
            <form class="sub-from">
              <div class="form-content">
                <div class="form-content-inner">
                  <label>Email address</label>
                  <p id="formSubmitError" class="form-submit-error"></p>
                </div>
                <input id="formInput" class="form-input" type="email" placeholder="email@company.com">
              </div>
  
              <button id="formSubmitBtn">Subscribe to monthly newsletter</button>
            </form>
        </div>
    
        <div class="subscription-cover">
          <img class="cover-image" src="./assets/images/illustration-sign-up-desktop.svg" alt="">
        </div>
    </div>
        `;
        this.app.innerHTML = "";
        this.app.insertAdjacentHTML("afterbegin", markup);
        this.eventHandler();
    }
}
export default new StartView();
