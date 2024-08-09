const Post = require('./Post')

class Author{
    constructor(author){
        this.author = author
        this.posts = []
    }

    addPost(){
        const newPost = new Post(comment, this);
        this.posts.push(newPost);
        return newPost;
    }
}

module.exports = Author