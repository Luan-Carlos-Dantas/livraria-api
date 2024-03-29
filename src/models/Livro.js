import mongoose from "mongoose";
import { autorSchema } from "./Autores.js";
import { editoraSchema } from "./Editora.js";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {
      type: mongoose.Schema.Types.String,
      required: [true, "O nome do livro é obrigatório"],
    },
    editor: editoraSchema,
    price: { type: mongoose.Schema.Types.Number },
    pages: {
      type: mongoose.Schema.Types.Number,
      min: [10, "O valor fornecido de {VALUE} deve estar entre 10 a 5000"],
      max: [5000, "O valor fornecido de {VALUE} deve estar entre 10 a 5000"]
    },
    author: autorSchema,
  },
  { versionKey: false }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
