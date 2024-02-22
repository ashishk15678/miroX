import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Dialog , DialogContent , DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const Invite = () => {
    return (
        <>
        <Dialog>
            <DialogTrigger asChild>
                <Button className="" variant={"outline"}>
                    <Plus /> Invite members
                </Button >
            </DialogTrigger>
        <DialogContent className="p-0 bg-none border-none max-w-[880px]">
            <OrganizationProfile/>
        </DialogContent>
        </Dialog>
        </>
    )
}