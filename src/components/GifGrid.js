import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const {data:images,loading} = useFetchGifts(category);

    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="card animate__animated animate__flash">Loading</p>}
            <div className='card-grid'>

                {images.map(image => (
                    <GifGridItem
                        key={image.id}
                        {...image} />
                ))}

            </div>
        </>

    )
}
