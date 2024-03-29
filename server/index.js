const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
    const path=require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}
const PORT=process.env.PORT||5000
app.listen(PORT)