const nodemailer = require("nodemailer");

//Account created to use with this bot

let transporter = nodemailer.createTransport({
  host: "smtp.office365.com",   //SMTP from Outlook. Search the right SMTP for your email.
  port: 587,
  auth: {
    user: "    ",       //Your email adress
    pass: "    ",       //Your email password
  },
});

transporter.sendMail({
  from: "Bot <  >",  //Put your Email inside the < >
  to: " ",        //Person receiving the Email
  subject: "Subjetct",
  text: "Text",
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})
