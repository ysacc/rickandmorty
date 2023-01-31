// import { useState } from "react"
// import { NavLink, useNavigate } from "react-router-dom"
// import {useDispatch} from "react-redux"
// import {changeProfile} from "../../redux/actions.js"
// import styles from "./Login.module.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { users_data } from "../data/user_data.js"
// import { faEye, faXmark } from '@fortawesome/free-solid-svg-icons'


// export default function Login(){
//     let [name, setName] = useState("")
//     let [password, setPassword] = useState("")
//     let [isHiddenActive, setIsHiddenActive] = useState(true)
//     let [isIncorrectData, setIsIncorrectData] = useState("")
//     let [isAdmin, setIsAdmin] = useState(false)

//     let homeNavigate = useNavigate()

//     let dispatch = useDispatch()

//     const handleSubmitForm = e=>{
//         e.preventDefault()
//         if(!isAdmin){
//             let users = users_data.results
//             if(users[name]){
//                 if(users[name].password===password){
//                     setIsIncorrectData(false)
//                     homeNavigate("/home")
//                     dispatch(changeProfile({name, password}))
//                 }
//                 else{
//                     setIsIncorrectData(true)
//                     setTimeout(()=>{
//                         setIsIncorrectData(false)
//                     }, [5000])
//                 }
//             }
//             else{
//                 setIsIncorrectData(true)
//                 setTimeout(()=>{
//                     setIsIncorrectData(false)
//                 }, [5000])
//             }
//         }
//         else{
//             homeNavigate("/home")
//             dispatch(changeProfile({name: "admin", password: "123456"}))
//         }
//     }

//     return(
//         <div className={styles.login_container}>
//             <div className={styles.subcontainer}>
//                 <h1 className={styles.h1}>USER LOGIN</h1>
//                 <form className={styles.form} onSubmit={handleSubmitForm}>
//                     <input className={`${styles.input} ${styles.input_name}`} placeholder="Username..." 
//                     onChange={e=>setName(e.target.value)}></input>

//                     <div className={styles.divPassword}>
//                         <input  className={`${styles.input_password}`} type={isHiddenActive ? "password" : "text"} placeholder="Password..." autoComplete="password"
//                         onChange={e=>setPassword(e.target.value)}></input>
//                         <button className={styles.btn_hide} type="button" onClick={()=>setIsHiddenActive(prev=>!prev)}>
//                             {<FontAwesomeIcon className={styles.hide_icon} icon={isHiddenActive ? faEye : faXmark}/>}
//                         </button>
//                     </div>

//                     <div className={styles.checkbox_container}>
//                         <input type="checkbox" name="cb_admin" htmlFor="cb_admin" id="cb_admin" value={isAdmin} onChange={()=>setIsAdmin(prev=>!prev)} />
//                         <label name="cb_admin" htmlFor="cb_admin">Login as admin (do not need login data)</label>
//                     </div>

//                     {isIncorrectData ? <p className={styles.incorrect_data}>Incorrect data, try again</p> : ""}

//                     <button className={`${styles.login}`} type="submit"><label>Login</label></button>

//                     <hr />

//                     <div className={styles.sign_up_container}>
//                         <NavLink to="/sign_up"
//                         className={styles.sign_up}>Sign up</NavLink>
//                     </div>

//                 </form>

//                 <div className={styles.final_message}>
//                     <h2>Want to try it?</h2>
//                     <p>Probe with casanova2000 and Fer123456</p>
//                 </div>
//             </div>
//         </div>
//     )
// }