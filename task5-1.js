
const http = require('http');

let server = http.createServer((req,res)=>{
    try{
        if(req.method==='GET'){
            res.writeHead(200,{'content-type':'plain/text'});
            res.end('200 is successs status code');

        }
        else{
            res.writeHead(404,{'content-type':'plain/text'});
            res.end('404 page not found');
        }
    }catch(error){
    
            res.writeHead(500,{'content-type':'text/plain'});
            res.end('internal server error');
    }
});

server.listen(3000,()=>{
    console.log('this page runs at the 3000')
})