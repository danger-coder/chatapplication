
// const io = require('socket.io')(3000)
// const users = {};
// // console.log("hi")

// io.on('connection',socket=>{
//     console.log("hello")
//     socket.on("new_user",name=>{
//         console.log(name,"new user")
//         users[socket.id]=name;
//         socket.broadcast.emit('user-joined',name)
//     });


//     socket.on('send',message=>{
//         socket.broadcast.emit('receive',{message:message,name:users[socket.id]} )
//     });
// })

const express = require('express');
const app = express();
const http = require('http').createServer(app)
const PORT = process.env.PORT || 3000

http.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})

app.use(express.static(__dirname+"/public"))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/index.html")
})

// console.log(__dirname)

const io = require('socket.io')(http)

io.on("connection",(socket)=>{
    console.log("conneted..")

    socket.on("message",(msg)=>{
       socket.broadcast.emit('mesasage',msg)
    })
})