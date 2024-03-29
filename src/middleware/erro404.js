import Erro404 from "../error/Erro404.js";

// eslint-disable-next-line no-unused-vars
function erro404(req,res,next){
  const erro404 = new Erro404();

  next(erro404);
}

export default erro404;
