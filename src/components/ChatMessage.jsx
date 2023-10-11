import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-lg p-2'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOm2LuId_WkIuaCpuGYldjjC1c_Zi134yRg&usqp=CAU"
          alt="user-icon"
          className="w-6 h-6 rounded-lg"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;