// CareMate Chat - Vanilla JS Chat Logic
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    // Sample AI responses for simulation
    const aiResponses = [
        "I understand your concern. Based on what you've described, this could be related to several factors. Would you like me to explain some possible causes?",
        "That's a great question about your health. The current medical guidelines suggest monitoring these symptoms for 24-48 hours. If they persist, consulting with your doctor would be advisable.",
        "I'd recommend staying hydrated and getting plenty of rest. These simple steps can help with many common health issues.",
        "Based on the information you've shared, this doesn't appear to be an emergency situation, but it's always better to consult with a healthcare professional if you're concerned.",
        "There are several lifestyle changes that might help with this condition. Would you like me to suggest some evidence-based approaches?",
        "Many people experience similar symptoms. While I can provide general information, a healthcare provider can offer personalized advice for your specific situation."
    ];

    // Initialize
    init();

    function init() {
        // Auto-resize textarea as user types
        messageInput.addEventListener('input', autoResizeTextarea);
        
        // Enable/disable send button based on input
        messageInput.addEventListener('input', toggleSendButton);
        
        // Handle form submission
        chatForm.addEventListener('submit', handleSubmit);
    }

    function autoResizeTextarea() {
        // Reset height to auto to get the correct scrollHeight
        messageInput.style.height = 'auto';
        
        // Set new height based on scrollHeight (with max height limit)
        const newHeight = Math.min(messageInput.scrollHeight, 150);
        messageInput.style.height = `${newHeight}px`;
    }

    function toggleSendButton() {
        // Enable button only if there's text input
        sendButton.disabled = messageInput.value.trim() === '';
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        const message = messageInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        addMessage('user', message);
        
        // Clear input and reset height
        messageInput.value = '';
        messageInput.style.height = 'auto';
        sendButton.disabled = true;
        
        // Simulate AI thinking with typing indicator
        addTypingIndicator();
        
        // Simulate AI response after a delay
        setTimeout(() => {
            // Remove typing indicator
            removeTypingIndicator();
            
            // Add AI response
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
            addMessage('ai', randomResponse);
        }, 1500);
    }

    function addMessage(role, text) {
        // Create message container
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex items-start max-w-[75%] message-animation ${role === 'user' ? 'ml-auto flex-row-reverse' : ''}`;
        
        // Create avatar
        const avatar = document.createElement('div');
        avatar.className = `w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${role === 'user' ? 'ml-3 bg-gradient-to-r from-primary to-secondary text-dark' : 'mr-3 bg-gradient-to-r from-gray-600 to-gray-500'}`;
        avatar.textContent = role === 'user' ? 'You' : 'AI';
        
        // Create message bubble
        const bubble = document.createElement('div');
        bubble.className = role === 'user' 
            ? 'bg-gradient-to-r from-primary to-secondary text-dark p-4 rounded-2xl rounded-tr-none'
            : 'bg-dark p-4 rounded-2xl rounded-tl-none border border-dark-border';
        
        // Add message text
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        bubble.appendChild(paragraph);
        
        // Assemble message
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(bubble);
        
        // Add to chat
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        scrollToBottom();
    }

    function addTypingIndicator() {
        // Create typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typing-indicator';
        typingDiv.className = 'flex items-start max-w-[75%] message-animation';
        
        // Create avatar
        const avatar = document.createElement('div');
        avatar.className = 'w-10 h-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mr-3';
        avatar.textContent = 'AI';
        
        // Create typing bubble
        const bubble = document.createElement('div');
        bubble.className = 'bg-dark p-4 rounded-2xl rounded-tl-none border border-dark-border';
        
        // Add typing dots
        const dots = document.createElement('div');
        dots.className = 'flex space-x-2';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'w-2 h-2 bg-text-light rounded-full animate-pulse';
            dot.style.animationDelay = `${i * 0.2}s`;
            dots.appendChild(dot);
        }
        
        bubble.appendChild(dots);
        typingDiv.appendChild(avatar);
        typingDiv.appendChild(bubble);
        
        // Add to chat
        chatMessages.appendChild(typingDiv);
        
        // Scroll to bottom
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
