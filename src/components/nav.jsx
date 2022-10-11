import React from "react";
import {Link,useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function Nav() {
    const navigate = useNavigate()
   
    const auth = localStorage.getItem('user');
    const logout =()=>{
        localStorage.clear();
        // navigate('/Signup')
    }

    return (  
        <>
           <div>
            <img className="logo" src="https://images-platform.99static.com/Cmjfn_F-JLm6tg5ukdBIv6hdJ7E=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/107/107193/attachment_107193491" alt="" />
            {auth ? <ul className="nav-ul" >
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update"> UpdateProducts</Link></li>
            
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/Signup" onClick={logout}>logout Products</Link></li>
                {/* <li> {auth ?<Link to="/Signup" onClick={logout}>logout Products</Link>: */}

            </ul>
             
            :
            <ul className="nav-ul">
                    <li> <Link to="/Signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            
            }
           </div>
        </>
    );
}

export default Nav;