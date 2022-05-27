// Aquivo de ligação do Font-end, back-end e banco de dados.

// Foi instalado o pacote express onde facilita o link dessas plataformas.

const express = require('constants'); // Pacote express.
const session = require('express-session'); // Sessão que se usa do PHP, porém é ultilizado no pacote express e sever também para o node.js.
const ebodyParser = require('body-parser'); // Recebe informações do formulário, que está no Html.

const port = 3000; // Localização da página na web.
var path = require('path'); // Para manipular o diretorio da forma corretar.
const app = express(); // Definição de rotas.
const db = require('./models/db'); // link com o aquivo que está o banco de dados.

app.use(session({secret: 'jssdp'})); // Para gerar um palavra chave para toda a sessão / Segredo da sessão isso ocorre quando um usuário entra, a famosa chave privada.
app.use(bodyParser.urlencoded({extended:true})); // Salva o que foi digitado na página de cadastro.

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.user('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.post("/", async (req, res) => { //Aqui é onde eestá o lik do banco de dados com a Página web.
    res.send("Página inicial");
})

app.get('/', (req, res) =>{ // Como se fosse a página inicial.
    res.render('index');
}) 
app.listen(port,() =>{ // Onde eecutar a porta 3000 que está na linha 9.
    console.log('Servidor rodando'); // Esse console serve para indicar se o programa está rodando sem nenhum erro.
}) 