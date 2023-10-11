import React from 'react'

const Button = ({name,onClick}) => {
  return (
    <button className='rounded-lg px-5 py-2 m-2 bg-gray-200 hover:bg-gray-300' onClick={onClick}>{name}</button>
  )
}

export default Button;