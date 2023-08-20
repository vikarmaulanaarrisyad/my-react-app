import React from "react"
import Button from "../Elements/Button"

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between my-2">
      {children}
    </div>
  )
}

const Header = ({ url }) => {
  return (
    <a href="">
      <img src={url} alt="product" className="p-8 rounded-t-lg" />
    </a>
  )
}

const Body = ({ name, children }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  )
}

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        Rp{" "}
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct
