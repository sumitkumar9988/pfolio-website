const express =require("express");
const next =require("next");
require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
app.prepare().then(()=>{
    const server=express();
    server.get('*',(req,res)=>{
        return handle(req,res);
    })
    server.listen(port,(err)=>{
        if(err) throw err;
        console.log(err);
    })
}).catch((ex)=>{
        console.error(ex);
        process.exit(1);
})