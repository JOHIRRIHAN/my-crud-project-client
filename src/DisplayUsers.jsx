// import React from 'react'

import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const DisplayUsers = () => {
    const displayDatas = useLoaderData();

    const handleDelete = (_id)=>{
        console.log(_id)
        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'DELETE',
        }).then(res => res.json())
        .then(data => {
            console.log(data)
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
        <h3>Display User: {displayDatas.length}</h3>
        <div>
            {
                displayDatas.map(displayData => <p style={{border: "2px solid black"}} key={displayData._id}>
                    <span>name: {displayData.name}</span> <br />
                    <span>email: {displayData.email}</span> <br />
                    <span>password: {displayData.password}</span> <br />
                    <span>id: {displayData._id}</span> <br />
                    <input onClick={()=> handleDelete(displayData._id)} type="submit" value='Delete' />
                </p>)
            }
        </div>
    </div>
  )
}

export default DisplayUsers