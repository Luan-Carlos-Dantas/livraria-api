import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectId},
  title:{type: mongoose.Schema.Types.String, required: true},
  editor: {type: mongoose.Schema.Types.String, required: true},
  price: {type: mongoose.Schema.Types.Number},
  pages: {type: mongoose.Schema.Types.Number}
}, {versionKey: false})

const livro = mongoose.model('livros', livroSchema)

export default livro
