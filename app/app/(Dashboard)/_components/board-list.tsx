import { useQuery } from "convex/react";
import {api} from "@/convex/_generated/api"
import { EmptyBoard } from "./empty-board";
import { EmptyFavourites } from "./empty-favourites";
import { EmptySearch } from "./empty-search";
import { BoardCard, BoardCardSkeleton } from "./board-card/inedx";
import { NewBoardButton } from "./board-card/new-board-button";

interface BoardListprops{
    orgId: string;
    searchParams:{
        search?:string;
        favourites?: string;
    }
}
export function BoardList ({orgId,searchParams}:BoardListprops) {

    const data = useQuery(api.boards.get,{orgId:orgId})
    // console.log(searchParams);
    
    if(data===undefined) {
        return(
            <>
            <h2 className="text-3xl">
                {searchParams.favourites ? "Favourite boards" : "Team Boards"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 xl:grid-cols-5 2xl:grid-cols-6 pb-6 gap-5 mt-2 pb-10">
            
            <NewBoardButton orgId={orgId} disabled={true}/>
            <BoardCardSkeleton />
            <BoardCardSkeleton />
            <BoardCardSkeleton />
            <BoardCardSkeleton />
            </div>
            </>
        )
    }
    
    if(searchParams.search && !data?.length){
        return(
            <>
            <div>
               <EmptySearch/>
            </div>
            </>
        )
    }


    if(searchParams.favourites && !data?.length){
        return(
            <>
            <div>
                <EmptyFavourites />
            </div>
            </>
        )
    }
    if(!data?.length){
        return(
            <>
            <div>
               <EmptyBoard/>
            </div>
            </>
        )
    }
    
return(
    <>
    <h2 className="text-3xl">
    {searchParams.favourites ? "Favourite boards" : "Team Boards"}
    </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 xl:grid-cols-5 2xl:grid-cols-6 pb-6 gap-5 mt-2 pb-10">
            
            <NewBoardButton orgId={orgId}/>
            {data.map((board)=>{
                return(
                        <BoardCard                         
                        key = {board._id}
                        id = {board._id}
                        title = {board.title}
                        imageUrl = {board.imageUrl}
                        authorId = {board.authorId}
                        authorName = {board.authorName}
                        createdAt = {board._creationTime}
                        orgId = {board.orgId}
                        isFavourite = {false}
                        />
                )
            })}

        </div>
    </>
)
}

