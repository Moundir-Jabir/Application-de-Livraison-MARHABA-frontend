import React from 'react'

const FormInput = (props) => {
    const { onChange, value, name, type, icon, label, error } = props
    return (
        <div className="row margin">
            <div className="input-field col s12">
                <i className="material-icons prefix pt-2">{icon}</i>
                <input onChange={onChange} value={value} name={name} id={name} type={type} />
                <label htmlFor={name}>{label}</label>
                <small className="errorTxt2"><div className="error">{error}</div></small>
            </div>
        </div>
    )
}

export default FormInput