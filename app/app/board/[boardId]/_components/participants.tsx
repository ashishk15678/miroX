import { Skeleton } from "@/components/ui/skeleton"

export function Participants(){
    return(
        <div className="absolute right-2 top-2 bg-white rounded-md px-1.5 
        h-12 flex items-center shadow-md justify-center">
            List of users
        </div>
    )
}
Participants.Skeleton = function(){
    return(
        <div className="absolute right-2 top-2 bg-white rounded-md px-1.5 
        h-12 flex items-center shadow-md justify-center w-[110px]" >
            <Skeleton className="h-full w-full bg-muted-400" />
        </div>
    )
}