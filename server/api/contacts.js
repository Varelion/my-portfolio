const router = require('express').Router();
const cors = require('cors')
const {
  models: { Contact },
} = require('../db');
module.exports = router;

router.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

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
