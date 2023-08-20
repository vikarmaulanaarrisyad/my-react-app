import React from "react"
import CardProduct from "../components/Fragments/CardProduct"

// Data Products
const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    url: "/images/shoes1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,consequuntur saepe libero nam ab inventore totam quas quod unde vel.`
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 2.000.000",
    url: "/images/shoes1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,consequuntur saepe libero nam ab inventore totam quas quod unde vel.`
  },
  {
    id: 3,
    name: "Sepatu",
    price: "Rp 1.400.000",
    url: "/images/shoes1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,consequuntur saepe libero nam ab inventore totam quas quod unde vel.`
  },
]

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header url={product.url} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  )
}

export default ProductsPage
