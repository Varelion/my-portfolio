const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/contacts', require('./contacts'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
