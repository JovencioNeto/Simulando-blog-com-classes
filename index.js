const Comment = require('./Comment')
const Author = require('./Author')
const Post = require('./Post')


const author1 = new Author(
    'Jonh Wick',
)

const post1 = new Post(
    'Título do post tal',
    'Conteúdo do post tal',
)

const comment1 = new Comment(
    'Winston',
    'Que legal!'
)

const comment2 = new Comment(
    'Frankie',
    'Você de novo por aqui.'
)

console.log(post1)
console.log(author1)
console.log(comment1)
console.log(comment2)