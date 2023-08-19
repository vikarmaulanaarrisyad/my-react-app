import React from "react"

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

function App() {
 return (
  <div className="flex justify-center bg-blue-600 min-h-screen items-center">
    <div className="flex gap-x-3">
      <Button variant="bg-red-600">Login</Button>
      <Button variant="bg-slate-700">Logout</Button>
      <Button></Button>
    </div>
  </div>
 ) 
}

export default App