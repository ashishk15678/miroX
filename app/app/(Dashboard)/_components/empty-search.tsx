import Image from "next/image";

export const EmptySearch = () => {
    return (
        <>
        <div className="h-full flex flex-col items-center justify-center mt-8">
            <Image  
            src={"/empty-search.svg"}
            height={140}
            width={140}
            alt="Empty "
            />

            <h2 className="text-2xl mt-6 font-semibold">
                No results found!
            </h2>
            <p className="mt-2 text-muted-foreground">
                Try searching for something else
            </p>
        </div>
        </>
    )
} 