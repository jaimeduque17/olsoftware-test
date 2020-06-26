import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import Modal from '../components/Modal';
import DB from '../firebase/config';

const Users = () => {

    const [usersObj, setUsersObj] = useState({});
    const [currentId, setCurrentId] = useState('');

    useEffect(() => {
        DB.child('users').on('value', snapshot => {
            if (snapshot.val() != null) {
                setUsersObj({
                    ...snapshot.val()
                })
            } else {
                setUsersObj({})
            }
        })
    }, [])

    const addOrEdit = (obj) => {
        if (currentId === '') {
            DB.child('users').push(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    } else {
                        setCurrentId('')
                    }
                }
            )
        } else {
            DB.child(`users/${currentId}`).set(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    } else {
                        setCurrentId('')
                    }
                }
            )
        }
    }

    const onDelete = (u) => {
        if (window.confirm('Are you sure to delete this record?')) {
            DB.child(`users/${u}`).remove(
                err => {
                    if (err) {
                        console.log(err)
                    } else {
                        setCurrentId('')
                    }
                }
            )
        }
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Registrar usuarios</h1>
                </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal">
                    <strong>Crear</strong>
                </button>
            </div>
            <div className="row">
                <Modal
                    titleModal={currentId === '' ? 'Agregar nuevo usuario' : 'Modificar usuario'}
                >
                    <UserForm {...({ addOrEdit, currentId, usersObj })} />
                </Modal>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Identificación (C.C.)</th>
                                <th>Rol asociado</th>
                                <th>Estado</th>
                                <th>Teléfono</th>
                                <th>Correo electrónico</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(usersObj).map(id => (
                                <tr key={id}>
                                    <td>{usersObj[id].name}</td>
                                    <td>{usersObj[id].lastName}</td>
                                    <td>{usersObj[id].id}</td>
                                    <td>{usersObj[id].role}</td>
                                    <td>{usersObj[id].state}</td>
                                    <td>{usersObj[id].mobile}</td>
                                    <td>{usersObj[id].email}</td>
                                    <td style={{display: 'flex'}}>
                                        <a href="!#" className="btn text-primary" data-toggle="modal" data-target="#modal" onClick={() => setCurrentId(id)}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </a>
                                        <a href="!#" className="btn text-secondary" onClick={() => onDelete(id)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Users;