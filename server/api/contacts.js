const router = require("express").Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const {
  models: { Contact },
} = require("../db");
module.exports = router;

router.use(
  cors({
    origin: "http://localhost:3000",
  })
);

router.get("/messages", async (req, res, next) => {
  try {
    const numberOfMessages = await Contact.findAll();
    let response = { totalMessages: numberOfMessages.length };
    if (
      !response ||
      response === undefined ||
      typeof response.totalMessages !== "number" ||
      isNaN(response.totalMessages)
    ) {
      res.status(400).json({
        error:
          "Please call 862-888-8508 and notify Varelion about this error...",
      });
    } else {
      res.status(201).json(response.totalMessages);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/send", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    console.log(
      `***
    ***
    ***
    Logging:we are inside of the router
    ***
    ***
    ***
    `,
      name,
      `\n`,
      email,
      `\n`,
      message,
      req.params,
      req.body,
      req.headers
    );

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "business.8508@gmail.com",
        pass: "nhotuuabnopufdyd",
      },
    });

    // sender and recipient email addresses
    const myEmail = "business.8508@gmail.com";
    const recipientEmails = [
      "ighormisc@gmail.com",
      "business.8508@gmail.com",
      "Varelion@outlook.com",
	  "Secure@Varelion.com"
    ];
    let senderEmail = email;
    // message content and subject line
    const subjectLine = `Varelion Message: ${senderEmail}`;

    // setup email data with unicode symbols
    let mailOptions = {
      from: myEmail,
      to: recipientEmails.join(","),
      subject: subjectLine,
      text: message,
      html: `<h2>Message from${name}, at ${senderEmail}</h2>
      <br>
      <p><strong>Message: </strong><br>${message}</p>`,
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });

    const contact = await Contact.create(req.body);
    res.json(contact);
  } catch (err) {
    next(err);
  }
});
