import React from 'react';

const ItemDetails = ({item,showDetails}) => {
    const{name,email,phone,username,yearlySalary}=item;
    return (
        <div className="details-item"> 
        <h2 className="text-center py-2 text-white">Employee Details</h2>
            <ul>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Name
                <span className="badge badge-primary badge-pill">{name}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Email
                <span className="badge badge-primary badge-pill">{email}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Phone
                <span className="badge badge-primary badge-pill">{phone}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                username
                <span className="badge badge-primary badge-pill">@{username}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                YearlySalary
                <span className="badge badge-primary badge-pill">{yearlySalary}</span>
                </li>
            </ul>
            
        </div>
    );
};

export default ItemDetails;