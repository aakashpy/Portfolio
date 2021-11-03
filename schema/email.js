const mongoose = require('mongoose');

const EmailSchema = mongoose.Schema({
    email: String
});

const EmailModel = mongoose.model("subscribers",EmailSchema);
module.exports = EmailModel;