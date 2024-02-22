"use client"
import { useRenameModal } from "@/store/use-rename-modal";
import { Dialog , DialogClose,DialogFooter,DialogHeader,DialogDescription
    ,DialogTitle,DialogTrigger,DialogContent } from "../ui/dialog";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModal = () => {
    const {mutate,pending} = useApiMutation(api.board.update);

    const {
        isOpen,onClose,initialValues
    } = useRenameModal()
    const [title,setTitle] = useState(initialValues.title)

    useEffect(()=>{
        setTitle(initialValues.title)
    },[initialValues.title])
    
    const onSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        mutate({
            id: initialValues.id,
            title
        })
        .then(()=>{
            toast.success("Board Renamed!")
            onClose()
        })
        .catch(()=>{
            toast.error("Board not renamed")
        })
    }

    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
               <DialogHeader>
               <DialogTitle>
                 Edit board    
                </DialogTitle>
               </DialogHeader>
               <DialogDescription>
                Enter a new name for your board
               </DialogDescription>
               <form action="
               "
               className="space-y-4"
               onSubmit={onSubmit}
               >
                <Input 
                disabled={pending}
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
                maxLength={60}
                />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button className="" type="button" variant={"outline"}>
                            Cancel
                        </Button>
                    </DialogClose>
                        <Button  className="" type="submit"  disabled={pending}>
                            Save
                        </Button>
                </DialogFooter>
               </form>
            </DialogContent>

        </Dialog>
    )
}