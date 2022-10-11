import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/')
        }
    })

    const handlelogin = async () => {

        let result = await fetch('http://localhost:5050/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result)
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user._id));
            localStorage.setItem("Token", JSON.stringify(result.auth));

            navigate('/')
        } else {
            alert('usename is not found')
        }
    }
    return (
        <>
            <div className="login">
                <input type="text" className="inputbox" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                <input type="text" className="inputbox" onChange={(e) => setPassword(e.target.value)} placeholder="Enter passsword" />
                <button onClick={handlelogin} className="btn btn-primary mx-5">Signup</button>

            </div>
        </>
    );
}

export default Login;