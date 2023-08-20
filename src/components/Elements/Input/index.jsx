import React from 'react'
import Input from './Input'
import Label from './label'

const InputForm = (props) => {
  const { label, name, type, htmlFor, placeholder } = props
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

export default InputForm
