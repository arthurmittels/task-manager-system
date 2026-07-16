const express = require('express');

const app = express();

app.use(express.json());

let tasks = [];

// Listar tarefas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Criar tarefa
app.post('/tasks', (req, res) => {
    const task = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        status: "Pendente"
    };

    tasks.push(task);
   console.log(task);
res.status(201).json(task);
});

// Editar tarefa
app.put('/tasks/:id', (req, res) => {
    console.log("PUT recebido");
    console.log("ID:", req.params.id);
    console.log("Body:", req.body);

    const id = Number(req.params.id);

    console.log(tasks);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    task.title = req.body.title;
    task.description = req.body.description;
    task.priority = req.body.priority;

    res.json(task);
});

// Excluir tarefa
app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({ mensagem: "Tarefa removida" });
});

module.exports = app;