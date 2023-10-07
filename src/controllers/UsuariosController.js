class UsuariosController {

    Buscar(){
        return 'Buscando dados do usuario';
    }
    Criar(){
        return 'Criando dados do usuario';
    }
    Atualizar(id){
        return 'Atualizando dados do usuario' + id;
    }
    Deletar(id){
        return 'Deletando dados do usuario' + id;
    }

}

module.exports = new UsuariosController;