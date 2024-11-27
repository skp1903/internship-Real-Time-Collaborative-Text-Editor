const versionDir = path.join(__dirname, 'versions');

// Ensure the versions directory exists
if (!fs.existsSync(versionDir)) {
    fs.mkdirSync(versionDir);
}

// Save a new version of the document
socket.on('edit', (newContent) => {
    documentContent = newContent;
    // Generate a version filename (e.g., 'version-1.json')
    const versionFile = path.join(versionDir, `version-${Date.now()}.json`);
    fs.writeFileSync(versionFile, documentContent);
    // Broadcast the edit to all connected clients
    io.emit('edit', documentContent);
});
