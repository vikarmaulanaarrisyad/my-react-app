import React from 'react'
import InputForm from '../Elements/Input'
import Button from '../Elements/Button'

const FormRegister = () => {
  return (
    <div>
      <form action="">
        <InputForm
          label="Nama lengkap"
          type="text"
          placeholder="Masukkan nama lengkap"
          name="name"
          htmlFor="name"
        />
        <InputForm
          label="Email"
          type="email"
          placeholder="Masukkan email anda yang masih aktif"
          name="email"
          htmlFor="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="Masukkan password"
          name="password"
          htmlFor="password"
        />
        <Button classname="bg-blue-600 w-full">Register</Button>
      </form>
    </div>
  )
}

export default FormRegister
