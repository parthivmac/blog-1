const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true, trim: true, minlength: 4},
    password: {type: String, required: true, trim: true},
});


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;