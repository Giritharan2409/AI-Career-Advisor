// Modal Elements
const examBtn = document.getElementById('examBtn');
const examModal = document.getElementById('examModal');
const cancelBtn = document.getElementById('cancelBtn');
const startExamBtn = document.getElementById('startExamBtn');
const agreeCheckbox = document.getElementById('agreeCheckbox');

// Chatbot Elements
const chatbot = document.getElementById('chatbot');
const chatbotHeader = document.getElementById('chatbotHeader');
const chatbotBody = document.getElementById('chatbotBody');
const toggleChat = document.getElementById('toggleChat');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');

// Exam Modal Logic
examBtn.addEventListener('click', () => {
    examModal.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
    examModal.classList.add('hidden');
    agreeCheckbox.checked = false;
    startExamBtn.disabled = true;
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === examModal) {
        examModal.classList.add('hidden');
        agreeCheckbox.checked = false;
        startExamBtn.disabled = true;
    }
});

// Enable Start Exam button only when checkbox is checked
agreeCheckbox.addEventListener('change', (e) => {
    startExamBtn.disabled = !e.target.checked;
});

// Start Exam - Navigate to exam page
startExamBtn.addEventListener('click', () => {
    if (agreeCheckbox.checked) {
        window.location.href = '/exam';
    }
});

// Chatbot Toggle - Click on icon to open/close
chatbotHeader.addEventListener('click', () => {
    chatbotBody.classList.toggle('hidden');
});

// Send Message Function
async function sendMessage() {
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user-message');
    chatInput.value = '';
    
    // Show typing indicator
    const typingIndicator = addMessage('Typing...', 'bot-message');
    
    try {
        // Send message to backend
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message })
        });
        
        const data = await response.json();
        
        // Remove typing indicator
        typingIndicator.remove();
        
        if (data.error) {
            addMessage('Sorry, I encountered an error. Please try again.', 'bot-message');
        } else {
            addMessage(data.response, 'bot-message');
        }
    } catch (error) {
        typingIndicator.remove();
        addMessage('Sorry, I could not connect to the server. Please check your connection.', 'bot-message');
    }
}

// Add Message to Chat
function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'mb-4 max-w-xs rounded-3xl p-4';
    
    if (className === 'user-message') {
        messageDiv.className += ' bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-none ml-auto';
    } else {
        messageDiv.className += ' bg-gray-600 text-white rounded-bl-none';
    }
    
    const p = document.createElement('p');
    p.textContent = text;
    
    messageDiv.appendChild(p);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}

// Send message on button click
sendBtn.addEventListener('click', sendMessage);

// Send message on Enter key
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
