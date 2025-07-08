const socket = io();

function send() {
  const input = document.getElementById('input');
  socket.emit('chat message', input.value);
  input.value = '';
}

socket.on('chat message', msg => {
  const item = document.createElement('li');
  item.textContent = msg;
  document.getElementById('messages').appendChild(item);
});
