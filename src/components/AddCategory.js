import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';

//En () nos vienen las props enviadas al hijo desde el padre
//Normalmente estas props se desestructuran y se pone ({setCategories})
// Si no desestructuramos serian props en generico y luego props.setCategories

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length >2){
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>


    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
