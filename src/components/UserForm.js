import React, { useState, useEffect } from 'react';

const UserForm = (props) => {

    const initialValues = {
        name: '',
        lastName: '',
        id: '',
        role: '',
        state: '',
        mobile: '',
        email: '',
        password: ''
    }

    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        if (props.currentId === '') {
            setValues({
                ...initialValues
            })
        } else {
            setValues({
                ...props.usersObj[props.currentId]
            })
        }
    }, [props.currentId, props.usersObj]);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleForm = (e) => {
        e.preventDefault();
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleForm}>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-users"></i>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Nombre"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user" />
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Apellido"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                    />
                </div>
            </ div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt" />
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Identificacion"
                        name="id"
                        value={values.id}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group input-group  col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope" />
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Role"
                        name="role"
                        value={values.role}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt" />
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Estado"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group input-group  col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope" />
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Contraseña"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt" />
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Telefono"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope" />
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Correo electronico"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="modal-footer justify-content-center">
                <button type="submit" className="btn btn-success" data-toggle="modal" data-target="#modal">Aceptar</button>
                <button type="button" className="btn btn-outline-success" data-dismiss="modal">Cancelar</button>
            </div>
        </form>
    );
}

export default UserForm;