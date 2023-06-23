import React, { useState } from 'react';
import '../components/TodoItem.css';
import check from '../images/check.png';
import x from '../images/x.png';

function TodoItem(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className='todoitem-container'>
      <a onClick={toggleCompletion}>
        <img src={check} alt='check' className={`check ${isCompleted ? 'completed' : ''}`} />
      </a>
      <span className={`text ${isCompleted ? 'completed' : ''}`}>{props.text}</span>
      <img src={x} alt='x' className='x' />
      <br />
      <br />
    </div>
  );
}

export { TodoItem };
