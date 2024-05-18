// import React from 'react'

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const DisplayUsers = () => {
    const displayDatas = useLoaderData();
    const [users, setUsers] = useState(displayDatas)

    const handleDelete = (_id)=>{
        console.log(_id)
        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'DELETE',
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            const filterData = users.filter(item => item._id !==  _id)
            setUsers(filterData)
            if(data.acknowledged > 0){
                Swal.fire({
                    title: "Good job!",
                    text: "user Deleted successfully✅!",
                    icon: "success",
                  });
            }
        })
    }
  return (
    <div>
        <Link to={'/'}>Go to Home</Link>
        <h3>Display User: {users.length}</h3>
        <div>
            {
                users.map(displayData => <p style={{border: "2px solid black"}} key={displayData._id}>
                    <span>name: {displayData.name}</span> <br />
                    <span>email: {displayData.email}</span> <br />
                    <span>password: {displayData.password}</span> <br />
                    <span>id: {displayData._id}</span> <br />
                    <input onClick={()=> handleDelete(displayData._id)} type="submit" value='Delete' />
                    <Link to={`/users/${displayData._id}`}><input type="submit" value='Update' /></Link>
                </p>)
            }
        </div>
    </div>
  )
}

export default DisplayUsers