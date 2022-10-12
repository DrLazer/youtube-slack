import React from 'react'

function Button(props) {
  const { children, theme, classes } = props;
  return (
    <button className={`
        p-2 mx-2 border border-opacity-80 
        ${theme !== 'dark' ? 'bg-white' : 'bg-transparent'} 
        ${theme !== 'dark' ? 'text-fuchsia-900' : 'text-white'} 
        ${classes} 
        border-white text-s rounded hover:border-opacity-100`}
        type="button">
      { children }
    </button>
  )
}

export default Button
