const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const assistantSchema = new Schema ({
    email: {
        type: String,
        required: true,
        max: 50
    },
    name: {
        type: String,
        required: true,
        max: 50
    },
    code: {
        type: String,
        required: true,
        max: 3
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    },
    avatar: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Assistant = mongoose.model('Assistant', assistantSchema)
module.exports  = Assistant