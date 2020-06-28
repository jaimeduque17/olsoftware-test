import React, { useState, useEffect } from 'react';

const UserFilter = (props) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setId] = useState('');
    const [role, setRole] = useState('');
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const cancelCourse = () => {
        document.getElementById("filter-form").reset();
    }

    return (
        <div className="container">
            <div className="text-primary">
                <h4 className="text-center">
                    <i className="fas fa-user-plus mr-2 mb-3" style={{ fontSize: '20px' }}></i>
                    Filtrar búsqueda
                </h4>
            </div>
            <form id="filter-form" className="container">
                <label htmlFor="name">Nombres</label>
                <div className="input-group">
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} className="form-control mb-1" />
                </div>
                <label htmlFor="lastName">Apellidos</label>
                <div className="input-group">
                    <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} className="form-control mb-1" />
                </div>
                <label htmlFor="id">Identificación (C.C)</label>
                <div className="input-group">
                    <input type="text" id="id" onChange={(e) => setId(e.target.value)} className="form-control mb-1" />
                </div>
                <label htmlFor="role">Rol asociado</label>
                <div className="input-group">
                    <input type="text" id="role" onChange={(e) => setRole(e.target.value)} className="form-control mb-1" />
                </div>
                <label htmlFor="state">Estado</label>
                <div className="input-group">
                    <input type="text" id="state" onChange={(e) => setState(e.target.value)} className="form-control mb-1" />
                </div>
                <label htmlFor="password">Contraseña</label>
                <div className="input-group">
                    <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} className="form-control mb-1" />
                </div>
                <label htmlFor="mobile">Teléfono</label>
                <div className="input-group">
                    <input type="text" id="mobile" onChange={(e) => setMobile(e.target.value)} className="form-control mb-1" />
                </div>
                <label htmlFor="email">Correo electrónico</label>
                <div className="input-group">
                    <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} className="form-control mb-1" />
                </div>
                <div className="d-flex justify-content-around mt-2 mb-3">
                    <button type="button" className="btn btn-success">Filtrar</button>
                    <button type="button" onClick={cancelCourse} className="btn btn-outline-success">Limpiar</button>
                </div>
            </form>
        </div>
    );
}

export default UserFilter;