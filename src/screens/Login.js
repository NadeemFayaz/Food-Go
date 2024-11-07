import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {  email, password } = credentials;
    
        try {
            const response = await fetch("http://localhost:5000/api/LoginUser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({  email, password })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const json = await response.json();
            console.log(json);
    
            if (!json.success) {
                alert("Invalid Credentials");
            } else {
                alert("User Registered Successfully");
            }
        } catch (error) {
            console.error("Fetch error:", error.message);
            alert("Failed to connect to the server. Please check if the server is running and accessible.");
        }
    };
    
    
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  return (
    <div> 
       <div className="container">
                <div>
                    <form onSubmit={handleSubmit}>
                        
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" value={credentials.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange} />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/CreateUser" className="m-3 btn btn-danger">New user</Link>
                    </form>
                </div>
            </div>

    </div>
  )
}
