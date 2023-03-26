const fs= require('fs');

const requestHandler= (req, res)=>{
    const getUrl= req.url;
    const method=req.method;
    console.log(getUrl);
    res.setHeader('Content-Type','text/html');
    if(getUrl==='/')
    {   const dt=fs.readFileSync('message.txt');
        res.write(dt);
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/msg" method="POST"><input type="text" name = "message"><button type="submit" >Send</button></form></body>');
        res.write('</html>');
        res.end();
    }
    if(getUrl==='/msg' && method==='POST')
    {
        const body=[];
        req.on('data', (dataChunck)=>{
            body.push(dataChunck);
        });
        return req.on('end', ()=>{
            const parsedBody= Buffer.concat(body).toString();
            const message= parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, (err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }

}
module.exports=requestHandler;