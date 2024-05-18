import Swal from "sweetalert2";
import "./App.css";
import { Link } from "react-router-dom";

function App() {

  const handleAddUser = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {name, email, password}
    console.log(user)
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        Swal.fire({
          title: "Good job!",
          text: "user created successfully✅!",
          icon: "success",
        });
      }
    })
  }
  return (
    <>
    <Link to={'/users'}>See Users</Link>
      <h1>User Create</h1>

      <form onSubmit={handleAddUser}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <br />
        <label>
          email:
          <input type="email" name="email" />
        </label>
        <br />
        <br />
        <label>
          password:
          <input type="password" name="password" />
        </label>
        <br />
        <br />
        <input type="submit" value="create" />
      </form>
    </>
  );
}

export default App;
