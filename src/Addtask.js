import  React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const newTask = {
            id: Date.now(), // Génère un ID unique
            description,
            isDone: false,
        };
        dispatch({ type: 'ADD_TASK', payload: newTask });
        setDescription('');
    };

    return (
        <div>
            <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;



