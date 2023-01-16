import {useState} from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

const INITIAL_DATA = [{
  id: 'abhi-jeet-1', firstname: 'Abhijeet', lastname: 'Shelhalkar', email: 'abhi.shela@gmail.com'
},{
  id: 'shilpa-1', firstname: 'Shilpa', lastname: 'Deshmukh', email: 'shilpa.deshmukh@gmail.com'
}]
export default function App() {
  const [userData, setUserData] = useState(INITIAL_DATA);

  const addUserHandler = (user: any) => {
    console.log('add user:', user);
    user.id = userData.length + 1;
    setUserData((prevData) => {
     return [...prevData, user];
    });
  }

  const deleteUserHandler = (user: any) => {
    console.log('userData:', userData);
    const removeIndex = userData.map(item => item.id).indexOf(user.id);
    userData.splice(removeIndex, 1);
    setUserData((prevData) => {
     return [...prevData];
    });
  }

  const editUserHandler = (user: any) => {
    console.log('edit user app.tsx:', user);
  }
  
  return (
    <div className='main-box'>
      <UserForm onAddUser={addUserHandler}></UserForm>
      <UserList list={userData} onEditUser={editUserHandler} onDeleteUser={deleteUserHandler}></UserList>
    </div>
  );
}