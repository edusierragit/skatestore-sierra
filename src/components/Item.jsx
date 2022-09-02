import React from 'react';

const Item = ({data}) => {
    const {id, title, price, pictureUrl, description} = data
    
    return (
        <div>
            <div className="product" key={id}>
                <h1> {title}</h1>
                <p>{price}</p>
                <p>{description}</p>
                <img src={pictureUrl} height="100" width="100" ></img>
                </div>
        </div>
    )
}


export default Item;