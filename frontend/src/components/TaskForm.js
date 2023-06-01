import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [completed, setCompleted] = useState(false);

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    await axios.post('http://localhost:8000/api/tasks/', {
        title: title,
        description: description,
        completed: completed
    });
    setTitle('');
    setDescription('');
    setCompleted(false);
    alert('Task created successfully!');
    } catch (error) {
    alert('An error occurred while creating the task.');
    }
};

return (
    <form onSubmit={handleSubmit}>
    <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
    </label>
    <label>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
    </label>

    <label>
        Completed:
        <input type="checkbox" checked={completed} onChange={(event) => setCompleted(event.target.checked)} />
    </label>
    <button type="submit">Create Task</button>
    </form>
);
};

export default TaskForm;