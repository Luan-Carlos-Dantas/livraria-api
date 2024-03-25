import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectId},
  name:{type: mongoose.Schema.Types.String, required:true}
},{versionKey: false})

const editora = mongoose.model('editora', editoraSchema)

export {editora, editoraSchema}
