import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-mutation"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const NewBoardButton = ({orgId,disabled}:{orgId:string,disabled?:boolean}) => {
    const router = useRouter()
    const {mutate,pending} = useApiMutation(api.board.create)
    const onClick = () => {
        mutate({
            orgId,
            title:"Untitled"
        })
        .then((id)=>{
            toast.success("Board created succesFully")
            router.push(`/board/${id}`)
        })
        .catch(()=>{
            toast.error("Board was not created")
        })
    }
    return (
        <>
        <button onClick={onClick} disabled={pending || disabled} className={cn(
            "col-span-1 aspect-[100/127] bg-white border-amber-800 border-dashed bg-amber-400 hover:bg-amber-600 flex flex-col py-6 items-center justify-center rounded-lg",
            (disabled || pending) && "opacity-50 hover:bg-amber-400 cursor-not-allowed"
        )}>
           <div/>
           <Plus className="h-12 w-12 text-white stroke-1" />
            <p className="text-lg text-white"> Create Board</p>
        </button>
        </>
    )
}