export default class Mailer {
    constructor() {
        console.log("Mailer Constructor");
    }

    sendMail(mailBody) {
        mailBody =
            "Email body: " +
            mailBody +
            " Sent: Time=" +
            new Date().getHours() +
            ":" +
            new Date().getMinutes() +
            " minutes  Date=" +
            new Date().getDate() +
            "/" +
            new Date().getFullYear();

        return mailBody;
    }
}
