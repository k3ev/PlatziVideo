import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Registro from '../containers/Registro'

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
    </BrowserRouter>
)

export default App