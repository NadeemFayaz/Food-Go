import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, geolocation } = credentials;
    
        try {
            const response = await fetch("http://localhost:5000/api/CreateUser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, geolocation })
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
        <>
            <div className="container">
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={credentials.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" value={credentials.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                            <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/login" className="m-3 btn btn-danger">Login</Link>
                    </form>
                </div>
            </div>
        </>
    );
}
