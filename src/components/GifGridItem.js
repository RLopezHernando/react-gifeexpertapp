import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn">

            <img src={url} alt={title} />
            <p>{title}</p>

        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.element.isRequired,
    url: PropTypes.element.isRequired
}

//Pruebas con Enzyme
// 1. Configurar Enzime
// 2. Configurar Enzime to JSON
// 3. Mostar el componente correctamente
//  *shallow
//  *wrapper
//  *wrapper.toMatchSnapshot()


