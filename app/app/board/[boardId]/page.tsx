"use client"
import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";

export default function BoardIdPage({params}:any){
  

    return(
        <Room
        roomId={params.boardId}
        fallback={<Loading/>}
        >
            <Canvas 
        boardId={params.boardId}
        />
        </Room>
    )
}