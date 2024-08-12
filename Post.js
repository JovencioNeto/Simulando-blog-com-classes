const Comment = require('./Comment')
const Author = require('./Author')

class Post{
    constructor(title,content){
        this.title = title
        this.content = content
        this.author = Author
        this.comment = Comment
    }

    addComment(){
        this.comment.push(comment)
    }
}



module.exports = Post