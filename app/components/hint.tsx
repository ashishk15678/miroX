"use client"

import { Tooltip, TooltipContent,TooltipTrigger,TooltipProvider } from "./ui/tooltip"

interface HintProps{
    label:string;
    children:React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    align? :"start" | "center" | "end";
    alignOffset?: number;
    sideOffset?: number;
}

export const Hint = ({
    label,children,side,align,alignOffset,sideOffset,
}:HintProps) => {
    return(
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="text-white bg-black border-black" side={side} align={align} 
                alignOffset={alignOffset} sideOffset={sideOffset}>
                    <p className="capitalize font-semibold">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}