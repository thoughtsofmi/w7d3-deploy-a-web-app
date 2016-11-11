
// Pusher Setup
    var pusher = new Pusher('6e5f67bde794d28881ed', {
      encrypted: true
    })
    var pusherChannel = pusher.subscribe('chat_app')
    pusherChannel.bind('new_chat', function(chat) {
      addChatMessage(chat)
    })


function addChatMessage(chat){

var parent = document.getElementById('messages')
var child = parent.firstChild;
var row
row = document.createElement('li')
parent.classList.add('list-group-item')
parent.innerHTML = chat.message
parent.insertBefore(child)
}
//from tom ... get the parent div and child and use use before, implement logic to add chat to message div, the addChatMessage(chat) function will take the incoming Pusher chat object and using native DOM methods to append it to the messages list - use console log to see what's in the object


document.getElementById('messages').addEventListener('keypress', enterKey)

function enterKey (event) {
  if (event.key === 'Enter'){
    fetch('/chats', {
      method: 'POST',
        body: JSON.stringify({
          message: message.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
}
