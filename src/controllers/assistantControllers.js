const Assistant = require('../models/Assistant')
const registerAssistant = (req, res, next) => {
    
    const register = new Assistant({
        email: req.body.email,
        name: req.body.name,
        code: req.body.code,
        password: req.body.password
    })
    // FOR SINGLE FILE UPLOAD
    // if(req.file) {
    //     register.avatar = req.file.path
    // }

    // FOR MULTIPLE FILES UPLOAD
    if(req.files) {
        let path = ''
        req.files.forEach(function(files, index, arr){
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(','))
        register.avatar = path
    }
    register.save()
    .then(response => {
        res.json({
            message: 'Assistant successfully added'
        })
    })
    .catch(error => {
        message: 'an error occured'
    })
}

module.exports = {
    registerAssistant
}