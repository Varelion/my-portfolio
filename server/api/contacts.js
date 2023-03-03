const router = require('express').Router();
const {
  models: { Contact },
} = require('../db');
module.exports = router;

router.post('/send', async (req, res, next) => {
  try {
    const { ip, name, email, message } = req.body;
    console.log(
      `***
    ***
    ***
    Logging:we are inside of the router
    ***
    ***
    ***
    `,
      ip,
      `\n`,
      name,
      `\n`,
      email,
      `\n`,
      message,req.params,req.body, req.headers
    );
    // const contact = await Contact.create(req.body);
    res.json('contact');
  } catch (err) {
    next(err);
  }
});
