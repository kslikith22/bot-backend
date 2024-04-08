const router = require('express').Router()
const messageController = require('../controllers/message.controller')
const { verifyRequest } = require('../middlewares/verifySecret')

router.get('/reply', verifyRequest , messageController.getReply)


module.exports = router