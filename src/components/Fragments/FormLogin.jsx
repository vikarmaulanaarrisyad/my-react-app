import React from "react"
import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem("email", event.target.email.value)
    localStorage.setItem("password", event.target.password.value)

    window.location.href = "/products"
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <InputForm
          label="Email"
          type="email"
          placeholder="Masukkan email anda yang masih aktif"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="Masukkan password"
          name="password"
        />
        <Button classname="bg-blue-600 w-full" type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}

export default FormLogin
