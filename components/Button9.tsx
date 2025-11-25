import { cn } from '@/lib/utlis';
import React from 'react'

type Button9Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
}

const Button9 = ({children, className, ...props}: Button9Props) => {
  return (
   <button className={cn("px-4 py-2 rounded-lg bg-zinc-100 text-black tracking-tighter font-medium border-[1.5px] border-zinc-300 shadow-[inset_3px_3px_3px_rgba(255,255,255,1),inset_-3px_-3px_3px_rgba(255,255,255,1)] drop-shadow-2xl active:scale-98 active:duration-100 cursor-pointer text-sm", className)} {...props}>{children}</button>
)
}

export default Button9;