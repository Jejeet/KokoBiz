import "./Button.css"



const Button = ({type= "button", outline=false,
   variant = 'primary',
   className,
    size = 'medium',
    children,
    ...props}) => {
  return (
    <button 
    type={type}
    className={`${className} 
    ${size.toLocaleLowerCase()}
      ${variant} 
      ${outline && "outline"}`}
      {...props}
      >
        {children}
        </button>
  )
}



export default Button


