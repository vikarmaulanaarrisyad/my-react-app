import React from 'react'

const Input = (props) => {
  const { type, placeholder } = props

  return (
    <div>
      <input
        type={type}
        className="text-sm border rounded w-full px-3 py-3 text-slate-700 placeholder:opacity-50 hover:border-blue-600"
        placeholder={placeholder}
        name={name}
      />
    </div>
  )
}

export default Input
