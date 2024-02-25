"use client"

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "@/liveblocks.config";

export const Room = ({children,roomId,fallback}:{children:React.ReactNode,roomId:string,fallback:NonNullable<ReactNode> | null}) => {
    return(
        <RoomProvider id={roomId} initialPresence={{}}>
            <ClientSideSuspense fallback={<div>Loading...</div>} >
                {()=>children}
            </ClientSideSuspense>
        </RoomProvider>
    )
}