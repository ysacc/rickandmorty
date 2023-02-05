import React, { useState } from 'react';

const Profile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
        // Aquí debes agregar tu lógica para hacer la petición a un servidor o base de datos
        // para guardar los datos del nuevo usuario
        const response = await fetch('/api/profiles', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        // Si la creación de perfil es exitosa, debes redirigir al usuario a la página de inicio de sesión
        setError('');
        } catch (error) {
        setError('Ocurrió un error al crear el perfil');
        }
    };

    return (
        <div>
        <h1>Crear perfil</h1>
        {error && <p>{error}</p>}
        <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Crear perfil</button>
        </div>
    );
};

export default Profile;