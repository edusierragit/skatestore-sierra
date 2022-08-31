import React from 'react';

const productos = [
    {
        id: 1 ,
        title: 'Primer Producto' ,
        price:'15000',
        pictureUrl:'link',
    },
]

const getFetch = new Promise ((resolve, reject) =>{
setTimeout (() =>{
resolve(productos)
reject(err => console.log(err))
}, 2000)
}
)

export default getFetch