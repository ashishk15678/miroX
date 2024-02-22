import Image from "next/image";

export const Loading = () => {
    return(
        <div className="h-full w-full flex flex-col gap-y-4 justify-center items-center">
            <Image src={"/logo.svg"} height={120 } width={120 } alt="Loading state " className="animate-pulse duration-700"></Image>
        </div>
    )
}