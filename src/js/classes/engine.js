import Mailer from "./mailer";

export default Engine;

class Engine {
    mailer;

    constructor(mailer = Mailer) {
        console.log("Engine working");

        this.mailer = new mailer();

        console.log(this.mailer);
    }

    sendMail(mailBody) {
        return this.mailer.sendMail(mailBody);
    }
}
