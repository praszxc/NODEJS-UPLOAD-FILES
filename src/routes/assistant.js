const express   = require('express')
const router    = express.Router()

const AssistantController = require('../controllers/assistantControllers')
const uploads             = require('../middleware/upload')
// FOR SINGLE FILE UPLOAD
//router.post('/register', uploads.single('avatar'), AssistantController.registerAssistant)
// FOR MULTIPLE FILES UPLOAD
router.post('/register', uploads.array('avatar[]'), AssistantController.registerAssistant)
module.exports = router