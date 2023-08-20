import React from 'react'
import InputForm from '../Elements/Input'
import Button from '../Elements/Button'

const FormLogin = () => {
  return (
    <div>
      <form action="">
        <InputForm
          label="Email"
          type="email"
          placeholder="Masukkan email anda yang masih aktif"
          name="email"
          htmlFor="name"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="Masukkan password"
          name="password"
          htmlFor="password"
        />
        <Button classname="bg-blue-600 w-full">Login</Button>
      </form>
    </div>
  )
}

export default FormLogin
