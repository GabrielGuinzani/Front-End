const form = document.getElementById('form-chat-send');
form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const messageInput = document.getElementById('message');
  const messageText = messageInput.value;

  if (messageText.trim() !== '') {

    const newMessageItem = document.createElement('div');
    newMessageItem.className = 'message-item2';

    const newMsgUser = document.createElement('div');
    newMsgUser.className = 'msg-user';
    newMsgUser.innerHTML = '<strong>Você diz:</strong>';

    const newMsgChat = document.createElement('div');
    newMsgChat.className = 'msg-chat';
    newMsgChat.textContent = messageText;

    newMessageItem.appendChild(newMsgUser);
    newMessageItem.appendChild(newMsgChat);

    const messagesList = document.querySelector('.messages-list');
    messagesList.appendChild(newMessageItem);

    messageInput.value = '';

    scrollToBottom();
  }
});


function scrollToBottom() {
  const element = document.getElementById('conversa');
  element.scrollTop = element.scrollHeight
}
