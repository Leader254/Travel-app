import Image from 'next/image'
import React from 'react'
type ButtonProps = {
    type: 'button' | 'submit' | 'reset'
    title: string
    icon?: string
    variant: 'btn_dark_green' | 'btn_light_green' | 'btn_dark_white' | 'btn_light_white'
    }

const Button = ({type, title, icon, variant} : ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-2.5 py-2.5 px-5 rounded-full transition-all hover:opacity-80 ${variant}`}
     type={type}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  )
}

export default Button