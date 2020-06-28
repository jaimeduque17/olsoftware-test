import React from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

const Header = ({ name }) => {

    const firebase = useFirebaseApp();

    const logout = async () => {
        await firebase.auth().signOut();
    }

    return (
        <nav className="container-fluid" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div>
                <strong className="text-primary" style={{ fontSize: '24px' }}>Prueba Front-end</strong>
            </div>
            <div className="col" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <i className="fas fa-user-circle text-secondary mr-4" style={{ fontSize: '36px', marginLeft: '20%' }}></i>
                <span>{name}</span>
                <button className="btn text-primary ml-4" type="submit" onClick={logout}>
                    <i className="fas fa-sign-out-alt" style={{ fontSize: '24px' }}></i>
                </button>
            </div>
        </nav>
    );
}

export default Header;