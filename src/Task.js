import React from 'react';
import './Task.css'

const Task = ({ id, content, onDone }) => (
    <div className='task'>
        <div>{content}</div>
        <button onClick={() => onDone(id)}>完成</button>
    </div>
)

export default Task;
