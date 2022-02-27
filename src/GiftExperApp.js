import React from 'react'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExperApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     // setCategories([...categories,'HunterXHunter']);
    //     setCategories(cats =>[...cats,'HunterXHunter']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories = { setCategories }/>
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category}/>
                    })
                }
            </ol>
        </>
    )
}

