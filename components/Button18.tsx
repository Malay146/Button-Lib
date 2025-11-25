import { cn } from '@/lib/utlis';
import React from 'react'

type Button18Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button18 = ({children="Button", className, ...props}: Button18Props) => {
  return (
    <button className={cn("text-zinc-900 relative after:[''] after:rounded-2xl after:w-0 hover:after:w-full after:h-0.5 after:bg-zinc-950 after:absolute after:left-1/2 after:bottom-[10%] after:-translate-x-1/2 after:transition-all after:duration-200 cursor-pointer",className)} {...props}>
        {children}
    </button>
  )
}

export default Button18;