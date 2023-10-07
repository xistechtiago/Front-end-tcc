const { render } = require("ejs");

class AutenticacaoController {

    Login(){
        return render('views/index');
    }

    DoLogin(req){
        return 'Realizando login';
    }

}

module.exports = new AutenticacaoController;