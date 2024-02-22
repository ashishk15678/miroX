import { Button } from "@/components/ui/button"
import { Dialog,DialogContent,DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import Image from "next/image"

export function EmptyOrg (){
    return(
        <>
        <div className="h-full flex flex-col items-center justify-center" > 

        <Image 
        src={"/elements.svg"}
        width={200}
        height={200}
        alt="blank org"
        />
        <h2 className="text-2xl mt-2 font-semibold">
            Welcome to Miro X
        </h2>
        <p className="text-muted-foreground mt-2 text-md">
            Create an Organization to get Started
        </p>
        <Dialog >
            <DialogTrigger asChild className="mt-4">
                <Button size={"lg"}>
                    Create Organization
                </Button>
            </DialogTrigger>
        <DialogContent className="p-0 max-w-[480px] bg-transparent border-none">
            <CreateOrganization/>
        </DialogContent>
        </Dialog>
        </div>
        </>
    )
} 