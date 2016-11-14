
// Pusher Setup
    var pusher = new Pusher('6e5f67bde794d28881ed', {
      encrypted: true
    })
    var pusherChannel = pusher.subscribe('chat_app')
    pusherChannel.bind('new_chat', function(chat) {
      addChatMessage(chat)
    })

var message = document.getElementById('message')
message.addEventListener('keypress', enterKey)

function enterKey (event) {
  if (event.key === 'Enter'){
      fetchMsg()
    }
}

function fetchMsg() {
  fetch('/chats', {
      body: JSON.stringify({
      message: message.value,
    }),
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
}

function addChatMessage(chat){
console.log(chat)
var parent = document.getElementById('messages')
var child = parent.firstChild;
var row = document.createElement('li')
row.classList.add('list-group-item')
row.innerHTML = chat.message
parent.insertBefore(row, child)
}
