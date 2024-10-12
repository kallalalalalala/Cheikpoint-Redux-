import React from 'react';
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleEditTask = () => {
        const updatedTask = { ...task, description: 'Updated Description' }; // Remplacez par un formulaire si nécessaire
        dispatch({ type: 'EDIT_TASK', payload: updatedTask });
    };

    const handleToggleDone = () => {
        const updatedTask = { ...task, isDone: !task.isDone };
        dispatch({ type: 'EDIT_TASK', payload: updatedTask });
    };

    return (
        <div>
            <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                {task.description}
            </span>
            <button onClick={handleToggleDone}>
                {task.isDone ? 'Undo' : 'Done'}
            </button>
            <button onClick={handleEditTask}>Edit</button>
        </div>
    );
};

export default Task;