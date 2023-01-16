import React from "react";
import validation from "./validation";
import "./Form.module.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Form (){
    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '' 
    });
    const [userErrors,setUserErrors]= React.useState({ 
        username: '', 
        password: '' 
    });
    const handleInputChange=(event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setUserData({
            ...userData,
            [property]:value, 
        })
        setUserErrors(
            validation({
            ...userData,
            [property]:value,
        })
        )
    }


    const [access,setAccess] = React.useState({
        access:false,
        
    })
    const username="samironcal@gmail.com";
    const password="unacontraseña1";
    const navigate = useNavigate();

    const login =(userData) =>{
        if (userData.password === password && userData.username === username) {
            setAccess(true);
            navigate('/home');
        }
    }
    useEffect(() => {
        !access && navigate('/');
    }, [access]);

    const handleSubmit = (login,userData) => {
        login(userData);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>username: </label>
            <input 
            name="username"
            placeholder='Escribe tu username...'
            type="text"
            value={userData.username}
            onChange={handleInputChange}
            className={userErrors.username && 'warning'}
            ></input>
            <p className='danger'>{userErrors.username}</p>
            <label>password: </label>
            <input 
            name="password"
            placeholder='Escribe tu password...'
            type="password"
            value={userData.password}
            onChange={handleInputChange}
            className={userErrors.password && 'warning'}
            ></input>
            <p className='danger'>{userErrors.password}</p>
            <button type="submit">LOGIN</button>
        </form>
        </div>
    )
}
