import React,{useState}from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "",geolocation: ""});

    const handleSubmit = async (e) => {
        e.preventDefault();
       const { name, email, password, geolocation } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, geolocation })
        });
        const json = await response.json();
        console.log(json);
        if(!json.success){
            alert("Invalid Credentials");
        }
        else{
            alert("User Registered Successfully");

    }

    const handleChane = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
        <div className="container">
       
        <div>
            <htmlForm onSubmit={handleSubmit}> 
                <div className="mb-3">
                    <label htmlFor="name" className="htmlForm-label">name</label>
                    <input type="text" className="htmlForm-control" name="name" value={credentials.name}  onChange={handleChane} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
                    <input type="email" className="htmlForm-control" name="email" value={credentials.email}    onChange={handleChane} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                    <input type="password" className="htmlForm-control" name="password" value={credentials.password}    onChange={handleChane} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Adress</label>
                    <input type="text" className="htmlForm-control" name='geolocation' value={credentials.geolocation}    onChange={handleChane} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/login" className="mb-3">Login</Link>
            </htmlForm>

        </div>
    </div>
        </>
    )
}
}