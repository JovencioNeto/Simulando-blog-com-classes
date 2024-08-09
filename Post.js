const comment1 = require('./Comment')

class Post{
    constructor(){
        this.comment = []
    }

    addComment(){
        this.comment.push(Comment)
    }
}

module.exports = Post