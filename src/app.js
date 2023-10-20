const express =  require("express");
const path = require('path');
const app = express();
const port = 3000;
const router = require("./routes/index");

// View engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/public'));


router(app);

app.listen(port,()=>{
    console.log('Servidor Api em execução');
})