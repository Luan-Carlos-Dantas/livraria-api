import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroDeValidacao extends RequisicaoIncorreta{
  constructor(erro){
    const mensagensErro = Object.values(erro.errors).map(err => err.message).join("; ");


    super(`Os seguintes erros foram encontrados após a requisição: ${mensagensErro}`);
  }
}

export default ErroDeValidacao;
