import './UserForm.css';
import { Button, Input } from 'antd';
import { useState } from 'react';

function UserForm(props: any) {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    console.log('onsubmit handler');
    const userDetails = {
      firstname: firstname,
      lastname: lastname,
      email: email
    };
    if (firstname && lastname && email) {
      props.onAddUser(userDetails);
      setFirstname('');
      setLastname('');
      setEmail('');
    }
  }

  const onCancelHandler = () => {
    if (firstname || lastname || email) {
      setFirstname('');
      setLastname('');
      setEmail('');
    }
  }

  const onChangeFirstname = (event: any) => {
    setFirstname(event.target.value);
  }

  const onChangeLastname = (event: any) => {
    setLastname(event.target.value);
  }

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  }

  return (
    <div className='user-form'>
      <form>
        <div className='full-name-box'>
          <div className='first-name'>
            <label htmlFor='firstname'>First Name</label>
            <Input id='firstname' type='text' value={firstname} onChange={onChangeFirstname} />
          </div>
          <div className='last-name'>
            <label htmlFor='lastname'>Last Name</label>
            <Input id='lastname' type='text' value={lastname} onChange={onChangeLastname} />
          </div>
        </div>
        <div className='email-box'>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <Input id='email' type='text' value={email} onChange={onChangeEmail} />
          </div>
          <div className='add-user-btn'>
            <Button role='button' type='primary' onClick={onSubmitHandler}>Add User</Button>
          </div>
          <div className='cancel-btn'>
            <Button role='button' onClick={onCancelHandler}>Cancel</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserForm;