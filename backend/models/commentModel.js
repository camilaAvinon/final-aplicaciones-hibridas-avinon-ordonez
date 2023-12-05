const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const commentSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Referencia a otra entidad
    },
    text: {
        type: String,
        required: true
    },
});
const Comment = mongoose.model( 'Comment', commentSchema );
module.exports = Comment;