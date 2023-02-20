import React from 'react'

export default function Alert(props) {
  return (
    <p className='mb-4 text-red-500'>{props.children}</p>
  )
}
