import React from 'react'

    function TodoCounter({total, completed}) { 
  return (
    <h1>Has completado {completed} ToDo's de {total} </h1>
  )
}
 
export {TodoCounter}