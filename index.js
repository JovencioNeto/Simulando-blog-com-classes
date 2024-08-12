const Comment = require('./Comment')
const Author = require('./Author')
const Post = require('./Post')


const author1 = new Author(
    'Jonh Wick',
    Post
)

const post1 = new Post(
    'Título do post tal',
    'Conteúdo do post tal',
)

const comment1 = new Comment(
    author: 'Winston', content: 'Que legal!'
)

console.log(post1)
console.log(author1)