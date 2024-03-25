import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id:{ type: mongoose.Schema.Types.ObjectId},
  name: {type: mongoose.Schema.Types.String, required: true},
  nacionality: {type: mongoose.Schema.Types.String}
},{
  versionKey:false
})

const autor = mongoose.model('autores', autorSchema)

export {autor, autorSchema};
