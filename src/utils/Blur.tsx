import React from 'react'

const Blur = ({className}:{className?:string}) => {
  return (
    <div className={`absolute w-32 h-32 -z-[10]  bg-theme blur-3xl ${className}`}></div>
  );
}

export default Blur
