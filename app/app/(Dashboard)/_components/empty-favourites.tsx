import Image from "next/image";

export const EmptyFavourites = () => {
    return (
        <>
        <div className="h-full flex flex-col items-center justify-center mt-14">
            <Image  
            src={"/empty-favourites.svg"}
            height={140}
            width={140}
            alt="Empty "
            />

            <h2 className="text-2xl mt-6 font-semibold">
                No Favourites found
            </h2>
            <p className="mt-2 text-muted-foreground">
                You made any favourites ? Sure?
            </p>
        </div>
        </>
    )
} 