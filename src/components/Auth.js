import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();

    const signup = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2014/09/07/21/52/urban-438393_1280.jpg" style={{ opacity: '70%', objectFit: 'cover', zIndex: 1, position: 'absolute', height: '80%', width: '80%', borderBottomLeftRadius: '600% 550%', borderBottomRightRadius: '680% 1100%' }} />
            <strong style={{ color: 'white', float: 'left', zIndex: 2, position: 'absolute', top: '30%', left: '15%', fontSize: '2rem' }}>Aplicación</strong>
            <strong style={{ color: 'white', float: 'left', zIndex: 2, position: 'absolute', top: '35%', left: '15%', fontSize: '2rem' }}>OLSoftware</strong>
            <strong style={{ color: 'white', float: 'left', zIndex: 2, position: 'absolute', top: '45%', left: '15%', fontSize: '1rem' }}>Prueba Práctica Front-end senior</strong>
            <div style={{ width: '25rem', height: '23rem', backgroundColor: 'white', float: 'left', zIndex: 2, position: 'absolute', display: 'flex', alignItems: 'center', borderRadius: '2rem', boxShadow: '5px 10px 18px #888888', top: '15rem', left: '55rem' }}>
                <div id="login" className="col-md-6 offset-md-3 col-12">
                    <h2 className="text-center">Inicio de sesión</h2>
                    <div className="input-group">
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Usuario" />
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="fas fa-user" />
                            </span>
                        </div>
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Contraseña" />
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="fas fa-lock" />
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <a href="#" className="mb-3" onClick={signup}>
                            Crear cuenta
                        </a>
                    </div>
                    <button type="submit" onClick={login} className="input-group justify-content-center btn btn-primary mb-2">
                        <strong>Iniciar sesión</strong>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Auth;