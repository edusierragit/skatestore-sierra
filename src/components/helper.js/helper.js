import React from "react";
export const productos = [
  {
    id: 1,
    title: "1 Producto",
    price: "15000",
    description: "skate1",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_646301-MLM48147123248_112021-W.jpg",
  },
  {
    id: 2,
    title: "2 Producto",
    description: "skate2",
    price: "15000",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnNOMWqBzR2eJQ28W2Sfgw13UHVZw53dYuxt8e2Pv3XsK1CjgV0xF5Vb1gCRpkHVkD-M&usqp=CAU",
  },
  {
    id: 3,
    title: "3 Producto Woodoo Tatu Martinez Pro Tokyo",
    price: "18960",
    description: "skate3",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_949600-MLA50024320314_052022-O.webp",
  },
  {
    id: 4,
    title: "4 Producto",
    price: "39400",
    description: "skate4",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_801551-MLA51048408098_082022-O.webp",
  },
  {
    id: 5,
    title: "5 Producto Patineta Skate Yx-0205",
    price: "15000",
    description: "skate5",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_855314-MLA51033009965_082022-O.webp",
  },
  {
    id: 6,
    title: "6 Producto",
    price: "15000",
    description: "skate6",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_747386-MLA49521537342_032022-O.webp",
  },
  {
    id: 7,
    title: "7 Producto",
    price: "15000",
    description: "skate7",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_904825-MLA49716546124_042022-O.webp",
  },
  {
    id: 8,
    title: "8 Producto",
    price: "15000",
    description: "skate8",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDOl1G_51FrqZfqJZZbP5bRJyMFZamEEzMQn_Xy8GgmugSf_fCN7sr00zkyFFsvRHm1Y&usqp=CAU",
  },
  {
    id: 9,
    title: "9 Producto",
    price: "15000",
    description: "skate9",
    pictureUrl:
      "https://cdn.shopify.com/s/files/1/0364/9614/6491/products/IK0137_1200x.jpg?v=1660939815",
  },
];

export const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
    reject((err) => console.log(err));
  }, 1000);
});

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    const product = productos.find((item) => {
      return item.id === parseInt(id)
    });
    resolve(product);
  });
};