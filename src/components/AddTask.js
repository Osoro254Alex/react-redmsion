import { useState } from 'react';

function AddTask({ onAdd }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      /*eslint-disable */
      alert('Please Add A Task');
      /*eslint-disable */
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='Task'>Task</label>
        <input
          id='Task'
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='Day & Time'>Day & Time</label>
        <input
          id='Day & Time'
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control remm'>
        <label htmlFor='Set Reminder'>Set Reminder</label>
        <input
          id='Set Reminder'
          type='checkbox'
          className='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' className='main-btn' value='Save Task' />
    </form>
  );
}

export default AddTask;
