import React from 'react'
import { cn } from '@/lib/utlis'

type Button17Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {

};

const Button17 = ({children="Button", className, ...props}: Button17Props) => {
  return (
    <button className={cn("px-4 py-2 rounded-lg bg-zinc-800 cursor-pointer active:scale-97    active:transition-all active:duration-100 relative group overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.5)]",className)} {...props}>
        {children}
        <span className='absolute top-[150%] group-hover:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-500 text-zinc-900 w-full h-full text-center flex justify-center items-center transition-all duration-150 rounded-lg'>{children}</span>
    </button>
  )
}

export default Button17