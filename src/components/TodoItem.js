import React from 'react'

function TodoItem(props) {
  return (
      <ul>
        <li>V</li>
        <li>{props.text}</li>
        <li>X</li>
      </ul>
  )
}

export {TodoItem}