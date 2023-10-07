//require express
const Router  = require("express").Router;
const router = Router();

//controllers
const AutenticacaoController = require("../controllers/AutenticacaoController");
const MecanicosController = require("../controllers/MecanicosController");
const MotoristasController = require("../controllers/MotoristasController");
const RevisoesController = require("../controllers/RevisoesController");
const UsuariosController = require("../controllers/UsuariosController");
const VeiculosController = require("../controllers/VeiculosController");

//rota inicial
router.get("/", (req, res) => {
    res.render('index', {Title: 'Login sistema'});
});

//rotas de login
router.get("/login", (req, res)=>{
    const resposta = AutenticacaoController.Login();
    res.send(resposta);
});

router.post("/doLogin", (req, res)=>{
    const requisicao = AutenticacaoController.DoLogin(req);
    if(requisicao){
        console.log(requisicao);
        res.render('index', {Title: 'Pagina principal'});
    }
    else
        alert('Usuario e senha inválidos');
});

//rota usuario
router.get("/userList", (req, res)=>{
    res.send('Criar controller')
});

router.post("/user", (req, res)=>{
    res.send('Criar controller')
});

router.put("/userUpdate", (req, res)=>{
    const {id} = req.params;
    res.send('Criar controller', id)
});

router.delete("/userDelete", (req, res)=>{
    const {id} = req.params;
    res.send('Criar controller'+ id)
});

//rota mecanico
router.get("/mecList", (req, res)=>{
    res.render('mecanicos', {Title: 'Lista mecanicos'});
});

router.post("/mecRegister", (req, res)=>{
    res.send('Criar controller')
});

//rota motorista
router.get("/motoList", (req, res)=>{
    res.render('motoristas', {Title: 'Lista motoristas'});
});

router.post("/motoRegister", (req, res)=>{
    res.send('Criar controller')
});

//rota veiculo
router.get("/veiculoList", (req, res)=>{
    res.render('veiculos', {Title: 'Listagem de veiculos'});

});

router.post("/veiculoRegister", (req, res)=>{
    res.send('Criar controller')
});

//rota revisoes
router.get("/revisaoList", (req, res)=>{
    res.render('revisoes', {Title: 'Lista de revisoes'});
});

router.post("/revisaoRegister", (req, res)=>{
    res.send('Criar controller')
});

//rota manutenções
router.get("/manutencaoList", (req, res)=>{
    res.render('manutencoes', {Title: 'Lista manutenção'});
});

router.post("/manutencaoRegister", (req, res)=>{
    res.send('Criar controller')
});

//rota de contato
router.get("/contato", (req, res)=>{
    res.render('contato', {Title: 'Pagina de contato'});
});

router.use(router);
module.exports = router;
