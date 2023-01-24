import './Button.css'

function Button({children,disabled}) {
  return (
    <button className='small-button' disabled={disabled}>{children}</button>
  )
}

export default Button
