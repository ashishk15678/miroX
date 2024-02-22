"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu,DropdownMenuTrigger 
    , DropdownMenuContent,DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-mutation";
import { api } from "@/convex/_generated/api";
import { ConfirmModal } from "./confirm-model";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionProps{
    children: React.ReactNode;
    side? : DropdownMenuContentProps["side"];
    sideOffset? : DropdownMenuContentProps["sideOffset"];
    id:string;
    title:string;
}


export const Actions = ({children,side,sideOffset,id,title}:ActionProps) => {
    
    const onCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/board/${id}`)
        .then(()=>{toast.success("Link copied succesfully")})
        .catch(()=>{toast.error("Link wasnt copied")})
    }


    const {mutate , pending} = useApiMutation(api.board.remove)

    const onDeleteBoard = () => {
        mutate({
            id
        })
        .then(()=>{toast.success("Board deleted")})
        .catch(()=>{toast.error("Board not deleted")})
    }

    const {onOpen} = useRenameModal()

    return (

        <>
        <DropdownMenu >
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent
            side={side}
            sideOffset={sideOffset}
            className="w-60 text-md"
            onClick={(e)=>{e.stopPropagation()}}
            >
                <DropdownMenuItem className="p-2 cursor-pointer" onClick={onCopyLink}>
                    <Link2 className="h-4 w-4 mr-2" /> Copy for link
                </DropdownMenuItem>
                <ConfirmModal 
                header="Delete board"
                description="This will delete everything from the board"
                onConfirm={onDeleteBoard}
                disabled={pending}
                >
                <Button className="p-2 cursor-pointer w-full font-normal text-sm justify-start" variant={"ghost"}>
                    <Trash2 className="h-4 w-4 mr-2" /> Delete Permanently
                </Button>
                </ConfirmModal>
                <DropdownMenuItem className="p-2 cursor-pointer" onClick={()=>onOpen(id,title)}>
                    <Pencil className="h-4 w-4 mr-2" /> Rename Board
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )
}