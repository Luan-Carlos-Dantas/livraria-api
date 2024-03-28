/* eslint-disable linebreak-style */
import mongoose from "mongoose";
import ErrorBase from "../error/ErrorBase.js";
import RequisicaoIncorreta from "../error/RequisicaoIncorreta.js";
import ErroDeValidacao from "../error/ErroDeValidacao.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next){
  if(erro instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().sendRes(res);
  }else if(erro instanceof mongoose.Error.ValidationError){

    new ErroDeValidacao(erro).sendRes(res);
  }
  else{
    new ErrorBase().sendRes(res);
  }
}

export default manipuladorDeErros;
