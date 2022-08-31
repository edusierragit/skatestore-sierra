import React from 'react';

const Item = ({data}) => {
    const {id, title, price, pictureUrl} = data
    return (
        <div>
            <div className="product" key={id}>
                <h1> {title}</h1>
                <h2>{price}</h2>
                <h3>{pictureUrl}</h3>
                </div>
        </div>
    )
}


export default Item;