import './Button.css'

function Button({children}) {
  return (
    <button className='small-button'>{children}</button>
  )
}

export default Button
