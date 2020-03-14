import React, {useState} from 'react';
import userData from './Data/users'
import './App.css';
import UserItem from './components/Users/UserItem';
import TotalSalary from './components/salaryTotal/TotalSalary';
import Header from './components/Header/Header';

function App() {


  const [users, setUsers] = useState(userData);
  const [friendsTotalSalary, setFriendsTotalSalary] = useState([]);
  
  const showDetails = item => {
    // get index fo click item
    let index = users.indexOf(item.id)
    let singleUser = users.find(user => user.id  === item.id)
    singleUser.isClick = !singleUser.isClick
    users[index]=singleUser;
    let updateUser = [...users]
    setUsers(updateUser)
  }

  const addSalary = friend =>{

   var isExist = friendsTotalSalary.find(singleFriends => singleFriends.id  === friend.id)
 
   if(!isExist) {
      const friends = [...friendsTotalSalary, friend]
      setFriendsTotalSalary(friends)
   } else {
    alert('Already Add!')
   }
  
  }

  return (
    <div>
    <Header/>
    <div className="App row">
      <div className="col-9 friends-area">
        {users.map(user => <UserItem user={user} addSalary={addSalary} showDetails={showDetails}  key={user.id} /> )}
      </div>
      <TotalSalary friends={friendsTotalSalary} totalFriends = {users} />
    </div>
    </div>
  );
}


export default App;
