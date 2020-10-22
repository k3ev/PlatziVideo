import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { logoutRequest } from '../actions'
import '../assets/styles/components/Header.scss'
import gravatar from '../utils/gravatar'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'


const Header = props => {
  const { user, isLogin, isRegister} = props
  const hasUser = Object.keys(user).length > 0
  const handleLogout = () => {
    props.logoutRequest({})
  }
  const headerClass = classNames ('header',{
    isLogin,
    isRegister,
  })
  return(
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video"/>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email}/>:
              <img src={userIcon} alt=""/>
          }
          <p>Perfil</p>
        </div>
        <ul>
        <li><Link to="/">{user.name}</Link></li>
          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>:
              <li><Link to="/login">Inciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)