// import { useState } from "react"
// import {useDispatch} from "react-redux"
// import styles from "../Login/Login.module.css"
// import styles2 from "../SignUp/SignUp.module.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye,  faXmark } from '@fortawesome/free-solid-svg-icons'
// import {NavLink, useNavigate} from "react-router-dom"
// import { postUser } from "../../redux/actions"

// export default function SignUp(){
//     let [isHiddenActive, setIsHiddenActive] = useState(true)
//     let [inputs, setInputs] = useState({
//         username: "",
//         password: "",
//         email: "",
//         fname: "",
//         lname: "",
//         gender: ""
//     })
//     let [errors, setErrors] = useState({
//         password: "",
//         email: ""
//     })
//     let dispatch = useDispatch()

//     let isFormFilled = inputs.fname!=="" && inputs.lname!=="" && inputs.username!=="" && inputs.email!=="" && inputs.gender!=="" && inputs.password!==""

//     let validatePassword = new RegExp("^(?=(.*[A-Z]){1,})(?=(.*[a-z]){1,})(?=(.*[0-9]){2,}).{8,}$");
//     const validateEmail = /^\w+([.-]?\w+)*@\w+([-]?\w+)*(.\w{2,3})+$/;
//     //At least 8 characters with at least 2 numerical
    
//     const handleChangeInput = e=>{
//         setInputs({
//             ...inputs,
//             [e.target.name]: e.target.value
//         })
//     }

//     let redirectToSignIn = useNavigate()

//     const handleSubmit = e=>{
//         e.preventDefault()
//         let valPass  = validatePassword.test(inputs.password)
//         let valEmail = validateEmail.test(inputs.email)
//         if(isFormFilled){
//             if(!valPass || !valEmail){
//                 if(!valPass) setErrors({...errors, password: "The password needs at least 8 characters: one upper, one lower an two numericals"})
//                 if(!valEmail) setErrors({...errors, email: "Invalid email"})
//             }
//             else {
//                 setErrors({...errors, password: "", email: ""})
//                 dispatch(postUser(inputs))
//                 setInputs({
//                     fname: "", lname: "", username: "",
//                     email: "", gender: "", password: ""
//                 })
//                 setTimeout(()=>{
//                     redirectToSignIn("/")
//                 }, [2000])
//             }
//         }
//     }

//     return(
//         <div className={styles2.signUp_container}>
//             <div className={styles.subcontainer}>
//                 <h1 className={styles.h1}>USER SIGN UP</h1>
//                 <form className={styles.form} onSubmit={handleSubmit}>
//                     <div className={styles2.name_container}>
//                         <input className={`${styles.input} ${styles.input_name}`} placeholder="First name..." name="fname" maxLength={15} autoComplete="first-name"
//                         onChange={handleChangeInput}></input>

//                         <input className={`${styles.input} ${styles.input_name}`}  placeholder="Last name..." name="lname" maxLength={30} autoComplete="family-name"
//                         onChange={handleChangeInput}></input>
//                     </div>
//                     <input className={`${styles.input} ${styles.input_name}`} placeholder="Username..." name="username" maxLength={25} onChange={handleChangeInput} value={inputs.username}
//                     ></input>

//                     <input className={`${styles.input} ${styles.input_name}`} placeholder="Email..." name="email" type="email" maxLength="30" onChange={handleChangeInput} value={inputs.email}
//                     ></input>

//                     <div className={styles2.sign_in_gender}>
//                         <div className={styles2.sign_in_gender_subcontainer}>
//                             <input type="radio" name="gender" value="male" id="male" checked={inputs.gender==="male"}
//                             onChange={handleChangeInput} />
//                             <label className={styles.sign_in_gender_option}>Male</label>
//                         </div>

//                         <div className={styles2.sign_in_gender_subcontainer}>
//                             <input type="radio" name="gender" value="female" id="female" checked={inputs.gender==="female"}
//                             onChange={handleChangeInput} />
//                             <label className={styles2.sign_in_gender_option}>Female</label>
//                         </div>

//                         <div className={styles2.sign_in_gender_subcontainer}>
//                             <input type="radio" name="gender" value="no binary" id="no_binary" checked={inputs.gender==="no binary"}
//                             onChange={handleChangeInput} />
//                             <label className={styles2.sign_in_gender_option}>No binary</label>
//                         </div>
//                     </div>

//                     <div className={`${styles.divPassword}`}>
//                         <input  className={`${styles.input_password}`} name="password" value={inputs.password}
//                         type={isHiddenActive ? "password" : "text"}placeholder="Password..."  maxLength="25"
//                         onChange={handleChangeInput}
//                         ></input>

//                         <button className={`${styles.btn_hide}`} type="button" onClick={()=>setIsHiddenActive(prev=>!prev)}>
//                             {<FontAwesomeIcon className={styles.hide_icon} icon={isHiddenActive ? faEye : faXmark}/>}
//                         </button>
//                     </div>

//                     {errors.password && <li className={styles2.failed_password}>{errors.password}</li>}
//                     {errors.email && <li className={styles2.failed_email}>{errors.email}</li>}

//                     {isFormFilled
//                     ? "" 
//                     : <p className={styles2.uncompleted_data}>Uncompleted data</p>}
                    
//                     <button className={`${styles.login}`} type="submit"><label>Sign up</label></button>

//                 </form>

//                 <NavLink to="/" className={styles2.back}>Back to Login</NavLink>
//             </div>
//         </div>
//     )
// }