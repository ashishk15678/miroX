"use client"
import { Skeleton } from "@/components/ui/skeleton"

export function Info(){
    return(
        <div className="absolute left-2 top-2 bg-white rounded-md px-1.5 
        h-12 flex items-center shadow-md justify-center">
            TODO : information about the board
        </div>
    )
}

Info.skeleton = function(){
    return(
        <div className="absolute left-2 top-2 bg-white rounded-md px-1.5 
        h-12 flex items-center shadow-md justify-center w-[300px]">
            <Skeleton  className="h-full w-full bg-muted-400" />
        </div>
    )
}