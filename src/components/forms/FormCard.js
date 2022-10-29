import React from 'react'
import FormInput from './FormInput'
import { Link } from 'react-router-dom'

const FormCard = (props) => {

    const { submit, title, description, button, links, inputs, setState, state } = props

    const update = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    let classname = "input-field col s" + (12 / links.length)
    return (
        <div className="row">
            <div className="col s12">
                <div className="container">
                    <div id="register-page" className="row">
                        <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 register-card bg-opacity-8">
                            <form onSubmit={submit} className="login-form">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <h5 className="ml-4">{title}</h5>
                                        <p className="ml-4">{description}</p>
                                    </div>
                                </div>
                                {
                                    inputs.map(input => (
                                        <FormInput onChange={update} value={input.value} name={input.name} type={input.type} icon={input.icon} label={input.label} error={input.error} />
                                    ))
                                }
                                <div className="row">
                                    <div className="input-field col s12">
                                        <button type='submit' className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12">{button}</button>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        links.map(link => (
                                            <div className={classname}>
                                                <p className="margin medium-small"><Link to={link.to}>{link.link}</Link></p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCard