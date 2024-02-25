"use client"
import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolbar";
import { useSelf } from "@/liveblocks.config";

interface CanvasProps{
    boardId:string
}



export function Canvas ({boardId}:CanvasProps) {

const info = useSelf()
console.log(info);

    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info />
            <Participants/>
            <ToolBar/>
        </main>
    )
}