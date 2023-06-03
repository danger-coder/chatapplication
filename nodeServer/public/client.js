const socket = io('')

let names ;
let messageInp= document.querySelector("#messageInp")
let messageView = document.querySelector(".message")
do{
names =prompt('Please enter a name')
}while(!names)

messageInp.addEventListener('keyup', (e)=>{
    if(e.key==='Enter'){
        sendMessage(e.target.value)
    }
})

function sendMessage (message){
    let msg = {
        user:names,
        message:message.trim()
    }

    appendMessage(msg,'outgoing')
socket.emit('message',msg)

}

function appendMessage (msg,type){
let mainDiv= document.createElement('div');
let className= type;
mainDiv.classList.add(className,"right")

let markup = `
<p>${msg.user}:${msg.message} </p>

`

mainDiv.innerHTML =markup;

messageView.appendChild(mainDiv);

console.log(mainDiv)
console.log(messageView)

}


//receive message


socket.on("mesasage", (msg)=>{
    console.log(msg)
    appendMessage(msg)
})