const mongoose = require('mongoose'), Schema = mongoose.Schema;

const assignedJobSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    job: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Job'
    },
    created: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('assignedJob', assignedJobSchema)