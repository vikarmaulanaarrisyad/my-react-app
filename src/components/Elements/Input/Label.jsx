import React from 'react'

const Label = (props) => {
  const { htmlFor, children } = props

  return (
    <div>
      <label htmlFor={htmlFor} className="block text-slate-700 text-sm mb-2">
        {children}
      </label>
    </div>
  )
}

export default Label
