import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ErrorNotFound.scss'
export default class ErrorNotFound extends Component {

    render() {
        return (
            <div className="main">
                <div className="error">
                    <h1>Ohh!</h1>
                    <h3>No pudimos acceder a este contenido!</h3>
                    <h5>Prueba con volver al <Link to={`/`}>inicio </Link></h5>
                </div>
            </div>
        );
    }
}