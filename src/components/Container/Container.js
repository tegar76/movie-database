import React from 'react'

export default function Container(props) {
  return (
    <div className='lg:max-w-[1200px] mx-auto'>
        {props.children}
    </div>
  )
}
