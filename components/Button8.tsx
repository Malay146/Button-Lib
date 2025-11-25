import { cn } from '@/lib/utlis';
import React from 'react'

type Button8Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
}

const Button8 = ({children, className, ...props}: Button8Props) => {
  return (
    <button className={cn("relative px-5 py-3 rounded-full text-black bg-white/80 tracking-tight cursor-pointer backdrop-blur-md overflow-hidden active:scale-98 active:duration-100", className)} {...props}>
        {children}
        <span className='absolute w-5 h-5 right-1/2 left-3 bg-amber-300 rounded-full blur-xs animate-bounce [animation-duration:2s]' />
        <span className='absolute w-4 h-4 bottom-3 bg-red-300 rounded-full blur-xs animate-bounce [animation-duration:3s]' />
        <span className='absolute w-6 h-6 right-5 top-1 bg-green-300 rounded-full blur-xs animate-bounce [animation-duration:2s]' />
        <span className='absolute w-7 h-7 right-8 bottom-1 bg-blue-300 rounded-full blur-xs animate-bounce [animation-duration:2.5s]' />
        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{children}</span>
    </button>
)
}

export default Button8