import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectId},
  name:{
    type: mongoose.Schema.Types.String,
    required:[true, "O nome da editora é obrigatório"],
    // enum: {
    //   values: ["Casa do Código", "Alura", "Caelum"],
    //   message: "A editora {VALUE} não é um valor válido para ser cadastrado"
    // }
  }
},{versionKey: false});

const editora = mongoose.model("editora", editoraSchema);

export {editora, editoraSchema};
