import React from 'react'
import '../components/TodoList.css'

function TodoList({children}) {
  return (
    <ul>
      {children}
    </ul>
  )
}

export {TodoList}