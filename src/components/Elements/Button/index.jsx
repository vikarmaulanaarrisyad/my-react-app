// arrow function
const Button = ({
  children = "Button",
  classname = "bg-black",
  onClick = () => {},
  type = "button"
}) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
