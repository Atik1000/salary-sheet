import React from 'react';
import ItemDetails from './ItemDetails';


const UserItem = ({user,addSalary,showDetails}) => {
    const {name,email,phone,username,yearlySalary,img}=user;
    return (
        <div className="single-user d-block m-auto">
            <div className="card">
                <span className="addIcon" onClick={() =>addSalary(user)}><i className="fas fa-plus"></i> </span>
                
            </div>
            <div className="image-area">
                 <div style={{backgroundImage:`url(${img})`}} className="card-img-top" />
            </div>

            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <h6 className="card-subtitle text-muted "> <i className="far fa-envelope"></i>{email.toLowerCase()}</h6>
                <p className="text-muted pt-1"> <i className="fas fa-phone-alt"></i>{phone}</p>
                <h2 className="user-name">{username}</h2>
                <p className="salary">{yearlySalary}</p>
     
 
             </div>
    </div>
            

            
    
    );
};

export default UserItem;