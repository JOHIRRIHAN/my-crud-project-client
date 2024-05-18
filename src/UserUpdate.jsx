// import React from 'react'

import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const UserUpdate = () => {
    const updateUser = useLoaderData();
    const {_id} = updateUser;
    
    // console.log(updateUser)

    const handleUpdateUser = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const users = {name, email, password}
        console.log(users)
        fetch(`http://localhost:3000/users/${_id}`, {
          method: "PUT",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged > 0){
            Swal.fire({
              title: "Good job!",
              text: "user Updated successfully✅!",
              icon: "success",
            });
          }
        })
      }
  return (
    <div>
        <Link to={`/users`}>go Home</Link>
        <h3>user update</h3>

        <form onSubmit={handleUpdateUser}>
        <label>
          Name:
          <input type="text" name="name" defaultValue={updateUser.name}/>
        </label>
        <br />
        <br />
        <label>
          email:
          <input type="email" name="email" defaultValue={updateUser.email}/>
        </label>
        <br />
        <br />
        <label>
          password:
          <input type="password" name="password" defaultValue={updateUser.password}/>
        </label>
        <br />
        <br />
        <input type="submit" value="update" />
      </form>
    </div>
  )
}

export default UserUpdate