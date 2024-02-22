"use client"
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import {useApiMutation} from "@/hooks/use-mutation"
import { toast } from "sonner";

export const EmptyBoard = () => {
    const {organization} = useOrganization()
    const {mutate,pending} = useApiMutation(api.board.create)

    const onClick = () => {
        if(!organization) return;
        mutate({

            title:"Untitled",
            orgId:organization?.id!,
        })
        .then((id)=>{
            toast.success("Board created succesfully")
        })
        .catch(()=>{
            toast.error("Board not created :((")
        })
    }

    return (
        <>
        <div className="h-full flex flex-col items-center justify-center mt-14">
            <Image  
            src={"/note.svg"}
            height={140}
            width={140}
            alt="Empty "
            />

            <h2 className="text-2xl mt-6 font-semibold">
                No Boards , Try creating some
            </h2>
            <p className=" text-muted-foreground">
                Create a board to see one!
            </p>
            <Button
            disabled={pending}
            className="mt-4"
            size={"lg"}
            onClick={onClick}
            >Create a board</Button>
        </div>
        </>
    )
} 