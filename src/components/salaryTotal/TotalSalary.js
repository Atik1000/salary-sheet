import React from 'react';

const TotalSalary = ({friends, totalFriends}) => {
  
  const totalSalary = friends.reduce((total, frined) => total+frined.yearlySalary,0);
  
  return (
    <div className="col-3 totalSalary">
    <div className="card text-center">
      <div className="card-body p-5">
        <h2><i className="fas fa-users"></i></h2>
        <h1 className="text-muted">{totalFriends.length}</h1>
        <h5 className="card-title">Friends Total Salary</h5>
        <h6 className="card-subtitle mb-2 text-muted">${totalSalary}</h6>
        <span><i className="far fa-check-circle"></i></span>
      </div>
    </div>
  </div>
  );
};

export default TotalSalary;