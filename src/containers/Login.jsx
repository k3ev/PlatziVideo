import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginRequest } from '../actions'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'

const Login = props => {
    const [form,setForm] = useState({
        email: ''
    })
    const handleInput = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        props.loginRequest(form)
        props.history.push('/')
    }
    return(
        <section className="login">
            <section className="login__container">
                <h2>Inicia Sesion</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input name="email" className="input" type="text" placeholder="Correo electrónico" onChange={handleInput} />
                    <input name="password" className="input" type="password" placeholder="Contraseña" onChange={handleInput} />
                    <button className="button" >Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" name="" id="cbox1" value="checkbox"/>Recuerdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon} alt="Google" />Inicia sesión con Google</div>
                    <div><img src={twitterIcon} alt="Twitter" />Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">¿No tienes ninguna cuenta? <Link to="/register">Registrate</Link></p>
            </section>
        </section>
    )
}

const mapDispatchToProps = {
    loginRequest
}

export default connect(null, mapDispatchToProps)(Login)