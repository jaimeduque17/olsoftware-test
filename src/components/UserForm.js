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
                    <label htmlFor="name">Nombres</label>
                    <div className="input-group">
                        <input type="text" name="name" value={values.name} onChange={handleChange} className="form-control mb-1" />
                    </div>
                </div>
                <div className="form-group input-group col-md-6">
                <label htmlFor="name">Apellidos</label>
                    <div className="input-group">
                        <input type="text" name="lastName" value={values.lastName} onChange={handleChange} className="form-control mb-1" />
                    </div>
                </div>
            </ div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                <label htmlFor="name">Identificación</label>
                    <div className="input-group">
                        <input type="text" name="id" value={values.id} onChange={handleChange} className="form-control mb-1" />
                    </div>
                </div>
                <div className="form-group input-group  col-md-6">
                <label htmlFor="name">Rol asociado</label>
                    <div className="input-group">
                        <input type="text" name="role" value={values.role} onChange={handleChange} className="form-control mb-1" />
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                <label htmlFor="name">Estado</label>
                    <div className="input-group">
                        <input type="text" name="state" value={values.state} onChange={handleChange} className="form-control mb-1" />
                    </div>
                </div>
                <div className="form-group input-group  col-md-6">
                <label htmlFor="name">Contraseña</label>
                    <div className="input-group">
                        <input type="password" name="password" value={values.password} onChange={handleChange} className="form-control mb-1" />
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                <label htmlFor="name">Teléfono</label>
                    <div className="input-group">
                        <input type="text" name="mobile" value={values.mobile} onChange={handleChange} className="form-control mb-1" />
                    </div>
                </div>
                <div className="form-group input-group col-md-6">
                <label htmlFor="name">Correo electrónico</label>
                    <div className="input-group">
                        <input type="text" name="email" value={values.email} onChange={handleChange} className="form-control mb-1" />
                    </div>
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