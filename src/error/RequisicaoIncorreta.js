import ErrorBase from "./ErrorBase.js";

class RequisicaoIncorreta extends ErrorBase{
  constructor(message = "Um ou mais dados fornecidos estão incorretos"){
    super(message, 400);
  }
}

export default RequisicaoIncorreta;
