const express = require('express');
const app = express();
const port = 3031;

app.use(express.json())

var produtos = [
    {
        id: '1',
        preco: 'R$64,90',
        produto:'French Press',
        descricao: 'Ela é um método de infusão no qual os grãos moídos de café entram em contato direto com a água quente, assim como acontece no preparo de chás. O café é feito manualmente, sem necessidade de energia elétrica e de outros materiais como o filtro de papel. Na hora de decidir como preparar café na prensa francesa, o básico necessário é água quente, grãos e uma xícara.',
        img: 'https://wolffcafe.vteximg.com.br/arquivos/ids/155476-1000-1000/Hario-Bright.jpg?v=636360175992370000',
        botao: 'Comprar French Press',
        comentarios: [
            {
                uid:'1',
                nome: 'Joao H',
                foto: 'https://images.unsplash.com/photo-1593621443450-e6f6578fd7a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
                comentario: 'Muito bom, faz um café suave mas encorpado.',
                estrelas: 5
            },
            {
                uid:'2',
                nome: 'Bia F',
                foto: 'https://images.unsplash.com/photo-1601326374180-e118ac4f7af4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtpbmclMjBjb2ZmZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                comentario: 'Achei sem graça, sou fã de expresso mesmo!',
                estrelas: 3
            },
        ]
    },
    {
        id: '2',
        preco: 'R$80,00',
        produto:'Clever Dripper',
        descricao: 'A Clever possui um sistema exclusivo que conta com uma trava “shutt off”, que veda ou libera o fluxo da infusão à gosto do freguês. Ou seja, uma válvula permite ao consumidor controlar o tempo de contato da água com o café, o que interfere diretamente nas características e no sabor da bebida que chega à xícara. Na Clever, você extrai o café de acordo com o perfil sensorial que mais agrada ao seu paladar!',
        img: 'https://wolffcafe.vteximg.com.br/arquivos/ids/155897-1000-1000/Clever_g_500ml_flavors.jpg?v=637045906121500000',
        botao: 'Comprar Clever',
        comentarios: [
            {
                uid: '1',
                nome: 'Tina S',
                foto: 'https://images.unsplash.com/photo-1515191107209-c28698631303?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                comentario: 'Um café bem equilibrado, achei bom.',
                estrelas: 5
            },
            {
                uid: '2',
                nome: 'Sebastião II',
                foto: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                comentario: 'Amei! Também dá pra fazer chá nela, muito prática.',
                estrelas: 5
            },
        ]
    },
    {
        id: '3',
        preco: 'R$59,90',
        produto:'Hario v60',
        descricao: 'O Filtro Hario pode ser encontrado em três diferentes materiais: cerâmica, vidro e plástico e todos tem um buraco grande na parte de baixo. O buraco maior que os tradicionais filtros da Mellita faz com que a infusão do pó com a água passe de maneira constante. O segredo desse método está na técnica de passar a água quente pelo cone da V60. Ao invés de simplesmente jogar toda a água a técnica consiste em derramar gentilmente em movimentos circulares molhando todo o pó.',
        img: 'https://wolffcafe.vteximg.com.br/arquivos/ids/155512-1000-1000/1416_0_2_1_2.jpg?v=636366621071070000',
        botao: 'Comprar v60',
        comentarios: [
            {
                uid: '1',
                nome: 'Sally G',
                foto: 'https://images.unsplash.com/photo-1598346762291-aee88549193f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
                comentario: 'Parece café filtrado na melita, não senti muita diferença',
                estrelas: 3
            },
            {
                uid: '2',
                nome: 'Ícaro L',
                foto: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                comentario: 'Aprovada, faz um café bem gostoso, tem uma técnica toda pra fazer a infusão.',
                estrelas: 4
            },
        ]
    },
    {
        id: '4',
        preco: 'R$234,90',
        produto:'Chemex',
        descricao: 'A Chemex é um recipiente transparente, feito de vidro borossilicato, onde é possível preparar café filtrado. Na Chemex o filtro de papel fica apoiado diretamente no recipiente transparente que na parte de cima tem formato de cone. Além do vidro, a Chemex possui um apoio de madeira, preso através de um cordão de couro. O filto da Chemex vem em um formato meia-lua que, ao ser dobrado, fica com 3 camadas de papel, resultando em uma filtragem mais intensa e um café mais suave.',
        img: 'https://www.mercafe.com.br/arquivos/ids/524446-560-700/20909195_01_passador-de-cafe-chemex-com-alca-de-madeira.png?v=637383738713100000',
        botao: 'Comprar Chemex',
        comentarios: [
            {
                uid: '1',
                nome: 'Tory M',
                foto: 'https://images.unsplash.com/photo-1529421314180-2fda99ae9c1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                comentario: 'Fiquei impressionada com a suavidade do método, resulta em um café muito gostoso quando o grão é de qualidade.',
                estrelas: 5
            },
            {
                uid: '2',
                nome: 'Suellen M',
                foto: 'https://images.unsplash.com/photo-1608585269273-5cacd36870f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                comentario: 'Achei suave demais, também é muito difícil fazer a dobra do filtro toda vez.',
                estrelas: 3
            },
        ]
    },
    {
        id: '5',
        preco: 'R$890,00',
        produto:'Sifão - Vaccum Pot',
        descricao: 'O Sifão ou Vacuum Pot é um método de preparo de café que usa vácuo para retirar a água de um café em infusão. A cafeteira funciona em duas etapas. No recipiente superior, põe-se o café moído. No inferior, água. Ao aquecer a água do recepiente inferior, ela sobe para o superior, deixando o café em infusão. Quando o aquecimento da água é cortado, o ar no seu interior se contrai produzindo o vácuo que puxa de volta a água que estava no recipiente superior. A água volta pelo filtro resultando na bebida.',
        img: 'https://images-americanas.b2w.io/produtos/2491995435/imagens/classico-siphon-coffee-pot-pot-sifao-de-vidro-com-preto-punho-mao-brewed-coffee-machine/2491995435_1_large.jpg',
        botao: 'Comprar Sifão',
        comentarios: [
            {
                uid: '1',
                nome: 'Matt H',
                foto: 'https://images.unsplash.com/photo-1515191107209-c28698631303?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                comentario: 'Um café bem intenso, achei muito bom.',
                estrelas: 5
            },
            {
                uid: '2',
                nome: '',
                foto: 'https://images.unsplash.com/photo-1479707777933-ed7ef62bac52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
                comentario: 'É toda uma ciência por trás do método, além de que o café fica muito gostoso.',
                estrelas: 5
            },
        ]
    },
]

app.get('/', (req, res) => {
    res.send('Hello World!!!');
})
  
// GET TODOS OS PRODUTOS
app.get('/produtos', (req, res) => {
    res.send(produtos);
})
  
// GET PRODUTO ESPECÍFICO
app.get('/produtos/:id', (req, res) => {
    const produto = produtos.filter((produto) => produto.id == req.params.id);
    res.send(produto[0]);
});

app.get('/produtos/:id/comentarios', (req,res) => {
    const produto = produtos.filter((produto) => produto.id == req.params.id)
    res.send(produto[0].comentarios)
})

// POSTANDO UM COMENTÁRIO
app.post('/produto/:id/comentario', (req,res) => {
    const newComment = req.body
    const produto = produtos.filter((produto) => produto.id == req.params.id)

    newComment.uid = produto[0].comentarios.length+1
    produto[0].comentarios.push(newComment)

    res.sendStatus(200)
})

// DELETANDO UM COMENTÁRIO
app.delete('/produto/:id/comentario/:idcomentario', (req,res) => {
    const produto = produtos.filter((produto) => produto.id == req.params.id)
    //var comentarios = produto[0].comentarios

    produto[0].comentarios = produto[0].comentarios.filter((comentario) => comentario.uid != req.params.idcomentario)
    res.sendStatus(200)
})

app.listen(port, '0.0.0.0', () => {
    console.log('Servidor online');
});