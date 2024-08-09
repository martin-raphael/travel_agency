import React from 'react'

type ButtonProps = {
    type: 'button'| 'submit';
    title: string;
    icon?: string;
    variant?: 'btn_dark_green' ;
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button type='button' >Get Started</button>
  )
}

export default Button