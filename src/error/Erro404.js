import ErrorBase from "./ErrorBase.js";

class Erro404 extends ErrorBase{
  constructor(message = "Página não encontrada"){
    super(message, 404);
  }
}

export default Erro404;
