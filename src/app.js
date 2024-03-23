import express from 'express'
import dbConnection from './config/dbConnect.js';

const connection = await dbConnection()

connection.on('error', (err)=>{
  console.error('Erro de conexão com o banco', err)
})

connection.once("open", ()=>{
  console.log('Conexão com o banco feita com sucesso')
})

const app = express()
app.use(express.json())


function buscaLivro(id){
  return jsonLivros.findIndex(livro => {
    return livro.id === Number(id)
  })
}

app.get('/', (req,res)=>{
  res.status(200).send('Olá Mundo')
})

app.get('/livros', (req,res)=>{
  res.status(200).json(jsonLivros)
})

app.post('/livros', (req,res)=>{
  const {id, title, description} = req.body
  const newObj = {
    id: id,
    title: title,
    description: description
  }

  jsonLivros.push(newObj)

  return res.status(201).send('Livro cadastrado com sucesso')
})

app.get('/livros/:id', (req, res)=>{
  const index = buscaLivro(req.params.id)

  return res.status(200).json(jsonLivros[index])
})

app.put('/livros/:id', (req,res)=>{
  const index = buscaLivro(req.params.id)

  const {title, description} = req.body

  jsonLivros[index].title = title
  jsonLivros[index].description = description

  return res.status(200).json(jsonLivros[index])
})

app.delete('/livros/:id', (req,res)=>{
  const index = buscaLivro(req.params.id)
  jsonLivros.splice(index, 1)

  return res.status(200).send('Livro deletado')
})


export default app
