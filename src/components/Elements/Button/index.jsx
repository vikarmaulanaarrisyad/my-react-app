// arrow function
const Button = (props) => {
  //distractering js
  const {children = 'Button', variant = 'bg-black'} = props;

  return (
     <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}>
          {children}
    </button>
  )
}

export default Button