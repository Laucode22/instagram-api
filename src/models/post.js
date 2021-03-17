const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
    user: {
        type : mongoose.ObjectId,
        required : true,
        ref: 'User'
    },
    description: String,
    image:  {
        type : String,
        required : true
    },
    lokes: [mongoose.ObjectId],
    createdAt: {
        type: Date,
        required: true,
        default:() => new Date()
    }

});

module.exports = Post;