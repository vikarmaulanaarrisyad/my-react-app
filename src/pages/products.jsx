import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes1.jpg" />
        <CardProduct.Body title="Sepatu baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          consequuntur saepe libero nam ab inventore totam quas quod unde vel.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes1.jpg" />
        <CardProduct.Body title="Sepatu baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          consequuntur saepe libero nam ab inventore totam quas quod unde vel.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
    </div>
  )
}

export default ProductsPage
