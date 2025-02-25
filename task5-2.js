const http = require('http')

let server = http.createServer((req,res)=>{
    try{
        if(req.method === 'GET'){
            if(req.url==='/home'){
            res.writeHead(200,{"content-type":"plain/text"});
            res.end('Welcome Home page ');
            }
        else if(req.url==='/about'){
            res.writeHead(200,{"content-type":"plain/text"});
            res.end('This About the About page');

        }else if(req.url==='/contact'){
           res.writeHead(200,{"content-type":"plain/text"});
           res.end("contact us")
        }
        }else{
            res.writeHead(404,{"content-type":"plain/text"});
            res.end('page Not Found');
        }
    }catch(error){
        res.writeHead(500,{"content-type":"plain/text"});
        res.end('method not found')
    }
});

 server.listen(9000,()=>{
    console.log("this page is runs at the 9000");
 })