const express = require('express');
const cors = require('cors');
const app = express();
const TaskList = require('./TaskList');

const taskList = new TaskList();

app.use(cors());
app.use(express.json());

app.get('/tasks', (req, res) => {
    res.json(taskList.toArray());
});

app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    taskList.addTask({ id: Date.now(), title, description, completed: false });
    res.sendStatus(201);
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    taskList.updateTask(parseInt(id), { title, description, completed });
    res.sendStatus(200);
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    taskList.removeTask(parseInt(id));
    res.sendStatus(204);
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
