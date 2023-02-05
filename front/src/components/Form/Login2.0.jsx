import React, { useState } from 'react';
import Profile from './Profile';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showProfile, setShowProfile] = useState(false);

    const handleSubmit = async () => {
        try {
        // Aquí debes agregar tu lógica para hacer la petición a un servidor o base de datos
        // para verificar las credenciales del usuario
        const response = await fetch('/api/sessions', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        // Si la inicio de sesión es exitoso, debes redirigir al usuario a su perfil
        setError('');
        } catch (error) {
        setError('Nombre de usuario o contraseña incorrecta');
        }
    };

    return (
        <div>
        {showProfile ? (
            <Profile />
        ) : (
            <>
            <h1>Iniciar sesión</h1>
            {error && <p>{error}</p>}
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Iniciar sesión</button>
            <p>
                ¿No tienes una cuenta?{' '}
                <a href="#" onClick={() => setShowProfile(true)}>
                Crea una aquí
                </a>
            </p>
            </>
        )}
        </div>
    );
};

export default Login;