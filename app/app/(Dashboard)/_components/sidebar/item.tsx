"use client"

import { Hint } from "@/components/hint"
import { cn } from "@/lib/utils"
import { useOrganization,useOrganizationList } from "@clerk/nextjs"
import Image from "next/image"

interface itemprops{
    id:string,
    name:string,
    imageUrl:string
}

export const Item = ({id,name,imageUrl}:itemprops) => {
    
    const {organization} = useOrganization()
    const {setActive} = useOrganizationList()

    const isActive = organization?.id === id;
    const onClick = () => {
        if(!setActive) return null
        else setActive({organization:id})
    }
    
    return(
        <>
       
       <div className="aspect-square relative">
       <Hint label={name} sideOffset={18} side="right" align="start">
            <Image
            fill
            onClick={onClick}
            src={imageUrl}
            alt={name}
            className={cn(
                "rounded-md cursor-pointer transition opacity-55 hover:opacity-100",
                isActive && "opacity-100"
            )}
            />
            </Hint>
        </div>
     
        </>
    )
}