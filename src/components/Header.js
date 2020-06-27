import React from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

const Header = ({ name }) => {

    const firebase = useFirebaseApp();

    const logout = async () => {
        await firebase.auth().signOut();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <i className="fas fa-bars text-primary mr-4" style={{ fontSize: '24px' }}></i>
            <strong className="text-primary" style={{ fontSize: '24px' }}>Prueba Front-end</strong>
            <div className="navbar-nav mr-auto" />
            <i className="fas fa-user-circle text-secondary mr-4" style={{ fontSize: '36px' }}></i>
            <span>{name}</span>
            <button className="btn text-primary ml-4" type="submit" onClick={logout}>
                <i className="fas fa-sign-out-alt" style={{ fontSize: '24px' }}></i>
            </button>
        </nav>
    );
}

export default Header;