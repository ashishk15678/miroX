"use client"

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface BoardCardProps {
    key :string;
    id :string;
    title :string;
    imageUrl :string;
    authorId :string;
    authorName :string;
    createdAt :number;
    orgId :string;
    isFavourite :boolean;
}
export const BoardCard = ({id,title,imageUrl,authorId,authorName,createdAt,orgId,isFavourite}:BoardCardProps) => {
    const {
        mutate:favourite,
        pending:pendingFavourite

    } = useApiMutation(api.board.favourite)
    const  {
        mutate:unFavourite,
        pending:onUnFavourite
    } = useApiMutation(api.board.unfavourite)

    const toggleFavorite = () => {
        if(isFavourite){
            unFavourite({id})
            .catch(()=>toast.error("Board was not un-favourited"))
        }else{
            favourite({id,orgId})
            .then(()=>toast.success("board favourited"))
            .catch(()=>toast.error("Board was not favourited"))
        }
    }

    const {userId} = useAuth()
    const authorLabel = userId === authorId ? "You" : authorName
    const createdAtlabel = formatDistanceToNow(createdAt , {addSuffix:true})
    return(
        <>
        <Link href={`board/${id}`}>   
            <div className="group flex flex-col aspect-[100/127] rounded-lg justify-between overflow-hidden"> 
                <div className="relative flex-1 bg-amber-100 ">
                    <Image 
                    src={imageUrl}
                    fill
                    className="object-fit"
                    alt= "Doodle"
                    />
                    <Overlay/>
                    <Actions
                    side="right"
                    id={id}
                    title={title}
                    >
                        <button
                        className="absolute z-50 top-1 right-1 opacity-0 group-hover:opacity-100 px-3 py-2"
                        >
                            <MoreHorizontal
                            className=" opacity-50 transition-opacity hover:opacity-100 text-white"
                            />
                        </button>
                    </Actions>
                </div>
                <Footer
                    title={title} 
                    authorLabel={authorLabel}
                    createdAtLabel={createdAtlabel}
                    isFavourite={isFavourite}
                    onClick={() => {toggleFavorite()}}
                    disabled={pendingFavourite || onUnFavourite}
                />
            </div>
        </Link>
        </>
    )
}

export function BoardCardSkeleton (){
    return(
        <>
         <div className=" aspect-[100/127] rounded-lg overflow-hidden"> 
            <Skeleton className="h-full w-full" />
         </div>
        </>
    )
}