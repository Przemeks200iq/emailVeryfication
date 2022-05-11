import { connect } from "./src/connent.js";
const button = document.getElementById("validate");
const input = document.getElementById("email");
const table = document.getElementById("table");

const validate = async () => {
    table.style.opacity = 0;
    const data = await connect(input.value);
    const { valid } = data;
    if (valid === false) {
        table.style.opacity = 1;
        table.innerHTML = `
        <div class="container">
            <div class="content purple noRight">INFORMATION</div>
            <div class="content purple">RESULT</div>
        </div>
        <div class="container">
            <div class="content">Valid</div>
            <div class="content">${valid}</div>
        </div>
        `;
    } else {
        const { valid, disposable, domain, text, reason } = data;
        table.style.opacity = 1;
        table.innerHTML = `<div class="container">
                                <div class="content purple noRight">INFORMATION</div>
                                <div class="content purple">RESULT</div>
                            </div>
                            <div class="container">
                                <div class="content">Valid</div>
                                <div class="content">${valid}</div>
                            </div>
                            <div class="container">
                                <div class="content">Disposable</div>
                                <div class="content">${disposable}</div>
                            </div>
                            <div class="container">
                                <div class="content">Domain</div>
                                <div class="content">${domain}</div>
                            </div>
                            <div class="container">
                                <div class="content">Text</div>
                                <div class="content">${text}</div>
                            </div>
                            <div class="container">
                                <div class="content">Reason</div>
                                <div class="content">${reason}</div>
                            </div>
        `;
    }
};

button.addEventListener("click", validate);
