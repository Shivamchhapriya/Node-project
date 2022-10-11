import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { useEffect } from "react";


function Signup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }


    })

    const collectData = async () => {

        let result = await fetch("http://localhost:5050/register", {
            method: "post",
            body: JSON.stringify({ name, password, email }),
            headers: {
                'content-type': "application/json"
            },
        });
        result = await result.json()
        console.warn(result)
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("Token", JSON.stringify(result.auth))

        if (result) {
            navigate("/")
        }
    }
    return (
        <>
            <div className="" style={{ marginLeft: '20rem' }}>
                <h1 >Register</h1>
                <input className="inputbox" value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                <input className="inputbox" value={email} type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                <input className="inputbox" value={password} type="Password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                <button onClick={collectData} className="btn btn-primary mx-5">Signup</button>
            </div>
        </>
    );
}
export default Signup;