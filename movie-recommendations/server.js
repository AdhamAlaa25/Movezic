// server.js
const express = require('express');
const { spawn } = require('child_process');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/recommendations/content/:title', (req, res) => {
    const title = req.params.title;
    const data = [
        // Your movie data here
    ];
    const pythonProcess = spawn('python', ['content_based_filtering.py', title, JSON.stringify(data)]);
    pythonProcess.stdout.on('data', (data) => {
        res.json(JSON.parse(data.toString()));
    });
});

app.get('/api/recommendations/collaborative/:userId', (req, res) => {
    const userId = req.params.userId;
    const data = [
        // Your ratings data here
    ];
    const pythonProcess = spawn('python', ['collaborative_filtering.py', userId, JSON.stringify(data)]);
    pythonProcess.stdout.on('data', (data) => {
        res.json(JSON.parse(data.toString()));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/api/recommendations/content/:title', (req, res) => {
    const title = req.params.title;
    const data = [
        { "title": "Movie 1", "genre": "Action" },
        { "title": "Movie 2", "genre": "Comedy" },
        // Add more movie data here
    ];
    const pythonProcess = spawn('python', ['content_based_filtering.py', title, JSON.stringify(data)]);
    pythonProcess.stdout.on('data', (data) => {
        res.json(JSON.parse(data.toString()));
    });
});

app.get('/api/recommendations/collaborative/:userId', (req, res) => {
    const userId = req.params.userId;
    const data = [
        { "title": "Movie 1", "genre": "Action" },
        { "title": "Movie 2", "genre": "Comedy" },
        // Add more movie data here
    ];
    const pythonProcess = spawn('python', ['collaborative_filtering.py', userId, JSON.stringify(data)]);
    pythonProcess.stdout.on('data', (data) => {
        res.json(JSON.parse(data.toString()));
    });
});
