const socket = io(); // Connect to the server

// Initialize Quill editor
const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            ['link']
        ]
    },
    placeholder: 'Start typing...',
    readOnly: false, // Allow editing
});

// Debouncing to prevent rapid updates
let timeout;
quill.on('text-change', (delta, oldDelta, source) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const message = quill.root.innerHTML; // Get editor content
        socket.emit('send_message', message); // Send it to the server
    }, 500); // Delay by 500ms to prevent rapid firing
});

// Receive the message and update the editor
socket.on('receive_message', (message) => {
    // Prevents infinite loop of sending and receiving
    const currentContent = quill.root.innerHTML;
    if (currentContent !== message) {
        quill.root.innerHTML = message; // Update the editor with new content
    }
});
