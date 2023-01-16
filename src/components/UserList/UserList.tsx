import './UserList.css';
import { Button } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

function UserList(props: any) {
  const userData = props.list;
  const onDeleteUserHandler = (user) => {
    console.log('delete user:', user);
    props.onDeleteUser(user);
  }

  const onEditUserHandler = (user) => {
    console.log('Edit user:', user);
    props.onEditUser(user);
  }
  
  return (
    <div className='user-list-box'>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {userData.map((user: any) => (
          <tr>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td><Button onClick={() => onEditUserHandler(user)} icon={<EditTwoTone twoToneColor="#52c41a"/>} /></td>
            <td><Button onClick={() => onDeleteUserHandler(user)} icon={<DeleteTwoTone twoToneColor="#eb2f96"/>}></Button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default UserList;