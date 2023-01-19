import React from "react";
import validation from "./validation";
import "./Form.module.css"
import { useNavigate } from "react-router-dom";
import { useEffect , useState } from "react";
import styles from "./Form.module.css"


export default function Form ({login}){

    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '' 
    });
    const [errors,setErrors]= React.useState({ 
        username: '', 
        password: '' 
    });
    const handleInputChange=(event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
            ...userData,
            [event.target.name]: event.target.value
        })
        )
    }

    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);

    const [access,setAccess] = React.useState({
        access:false,
        
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    return(
        
        <div className={styles.form}>
            <h1>  INGRESO</h1>
            <form 
            onSubmit={handleSubmit}
            >
            <label>Username:  </label>
            <input 
            name="username"
            placeholder='Escribe tu username...'
            type="text"
            value={userData.username}
            onChange={handleInputChange}
            className={errors.username && styles.warning}
            ></input>
            <p className={styles.danger}>{errors.username}</p>
            <label>Password:  </label>
            <input 
            name="password"
            placeholder='Escribe tu password...'
            type="password"
            value={userData.password}
            onChange={handleInputChange}
            className={errors.password && styles.warning}
            ></input>
            <p className={styles.danger}>{errors.password}</p>
            <button type="submit" className={styles.btn}>LOGIN</button>
            </form>
        </div>
    )
}
