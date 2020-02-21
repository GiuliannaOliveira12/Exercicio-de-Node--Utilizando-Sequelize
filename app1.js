const express = require('express')

const app = express();
const handlebars = require('express-handlebars')
const  bodyParser =require ('body-parser')
const Post = require ('./models/Post')



//utilizar o handlebars como template and

//config
 // template engine

 app.engine('handlebars', handlebars({defaultLayout:'main'}))
 app.set('view engine','handlebars') 

 // Body parser
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())



//rotas
app.get('/',function(req,res){
    Post.findAll().then(function(posts){
        res.render(__dirname+'/views/layouts/home',{'posts':posts})

    })

   
})

app.get('/cad', function(req,res){
    res.render(__dirname+'/views/layouts/formulario')
})
//rota, aonde formulario esta fazendo uma requisicao



app.post('/add',function(req,res){
 // criando recebendo dados do html para o banco de dados

    Post.create({
        titulo:req.body.titulo,
        conteudo:req.body.conteudo
                 
    }).then(function(){
      
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro:"+erro)
    })


})

// funçao de calback é executada sempre que acontece algum evento 
app.listen(8081 , function(){
    console.log (" rodando na url: http://localhost:8081")
});












