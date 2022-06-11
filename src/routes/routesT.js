const {Router} = require('express')
const textcontroller = require('../controllers/textcontroller')

const router = Router()

router.get('/iecho', textcontroller.text)

module.exports = router