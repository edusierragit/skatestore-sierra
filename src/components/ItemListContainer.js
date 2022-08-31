import React from 'react';
import ItemList from '../components/ItemList';

const ItemListContainer = (props) => {
    return (
        <div>
            texto
            {console.log(props.greetings)}
            <ItemList />
        </div>
        
    );
}

export default ItemListContainer;