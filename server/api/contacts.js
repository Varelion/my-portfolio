const router = require('express').Router();
const cors = require('cors')
// const nodemailer = require('nodemailer');
const {
  models: { Contact },
} = require('../db');
module.exports = router;

router.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

router.get('/messages', async (req, res, next) => {
  try {
    const numberOfMessages = await Contact.findAll();
    let response = { totalMessages: numberOfMessages.length };
    if (
      !response || response === undefined ||
      typeof response.totalMessages !== 'number' ||
      isNaN(response.totalMessages)
    ) {
      res.status(400).json({ error: 'Please call 862-888-8508 and notify Varelion about this error...' });
    } else {
      res.status(201).json(response.totalMessages);
    }
  } catch (err) {
    next(err);
  }
}); 

router.post('/send', async (req, res, next) => {
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
      message,req.params,req.body, req.headers
    );
    const contact = await Contact.create(req.body);
    res.json(contact);
  } catch (err) {
    next(err);
  }
});
