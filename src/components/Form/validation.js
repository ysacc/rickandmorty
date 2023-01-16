import React from "react";


export default function validation (userData){
    const userErrors = {};
    const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const regexPassword= /^[a-z0-9_-]{6-12}$/
    if (!userData.username)userErrors.username = "Por favor, complete este campo"
    if (!regexEmail.test(userData.username)) userErrors.username = "Por favor, usar un correo"
    if (userData.username.length > 35)userErrors.username = "Username demasiado largo"
    if (userData.password.length>=6 && userData.password.length<=10)userErrors.password = "El Password debe ser de 6 a 10 caracteres"
    // if (!regexPassword.exec(userData.password))userErrors.password = "El Password debe contener algún número"
    return userErrors;
}