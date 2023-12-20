import "./../css/reset.css";
import Engine from "./classes/engine";

let engine = new Engine();
let sendMailButton = document.getElementById("sendMailButton");
let mailBody = document.getElementById("mailBody");
let statusBox = document.getElementById("statusBox");

sendMailButton.addEventListener("click", sendMail);

function sendMail() {
    statusBox.innerText = engine.sendMail(mailBody.value);
}
