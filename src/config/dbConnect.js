import mongoose, {mongo} from "mongoose";

async function dbConnection(){
    mongoose.connect('mongodb+srv://admin:adm123@cluster0.1kqgf7o.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0')

  return mongoose.connection

}

export default dbConnection;
