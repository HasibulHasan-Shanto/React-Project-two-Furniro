import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1286px] m-auto ${className}`}>{children}</div>
  )
}

export default Container