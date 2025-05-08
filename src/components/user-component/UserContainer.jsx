import { useState } from 'react';
import { USERS } from '../constants/users';
import styles from './user-container.module.css';

const UserContainer = () => {
  const [position, setPosition] = useState(0);
  return (
    <article>
      <img src={USERS[position].profileImage} alt='' />
      <div>
        <span>Name:</span>
        <span>{USERS[position].name}</span>
      </div>
      <div>
        <span>Username:</span>
        <span>{USERS[position].username}</span>
      </div>
      <div>
        <span>Email:</span>
        <span>{USERS[position].email}</span>
      </div>
      <button onClick={() => previousPosition(position, setPosition)}>
        Previous
      </button>
      <button onClick={() => nextPosition(position, setPosition)}>Next</button>
    </article>
  );
};

const nextPosition = (position, setPosition) => {
  setPosition(position + 1);
};

const previousPosition = (position, setPosition) => {
  setPosition(position - 1);
  if (USERS[position] === 0) {
    console.log('final');
  }
};
export default UserContainer;
