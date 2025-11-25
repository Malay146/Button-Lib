import { cn } from '@/lib/utlis';
import React from 'react'

type Button10Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
}

const Button10 = ({children, className, ...props}: Button10Props) => {
  return (
   <button className={cn("px-4 py-2 rounded-xl bg-blue-600 text-white tracking-tighter font-medium border-[1.5px] border-blue-600 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.2),inset_0_3px_5px_rgba(255,255,255,0.2)] drop-shadow-[0px_4px_7px_rgba(0,0,0,0.3),0px_2px_2px_rgba(0,0,0,0.2),0px_2px_3px_rgba(0,0,0,0.1)] active:scale-98 active:duration-100 cursor-pointer text-sm", className)} {...props}>{children}</button>
)
}

export default Button10;