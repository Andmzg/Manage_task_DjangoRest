import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
const [tasks, setTasks] = useState([]);

useEffect(() => {
    const getTasks = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/tasks/');
        setTasks(response.data);
    } catch (error) {
        alert('An error occurred while getting the tasks.');
    }
    };
    getTasks();
}, []);

const handleDelete = async (taskId) => {
    try {
    await axios.delete(`http://localhost:8000/api/tasks/${taskId}/`);
    setTasks(tasks.filter(task => task.id !== taskId));
    alert('Task deleted successfully!');
    } catch (error) {
    alert('An error occurred while deleting the task.');
    }
};

const handleEdit = async (taskId, data) => {
    try {
    await axios.patch(`http://localhost:8000/api/tasks/${taskId}/`, data);
    setTasks(tasks.map(task => task.id === taskId ? {...task, ...data} : task));
    alert('Task edited successfully!');
    } catch (error) {
    alert('An error occurred while editing the task.');
    }
};

return (
    <ul>
    {tasks.map(task => (
        <li key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.completed ? 'Completed' : 'Not completed'}</p>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
        <button onClick={() => handleEdit(task.id, {completed: !task.completed})}>{task.completed ? 'Mark as not completed' : 'Mark as completed'}</button>
        </li>
    ))}
    </ul>
);
};

export default TaskList;