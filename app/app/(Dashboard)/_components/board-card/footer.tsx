import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps{
    title:string;
    authorLabel:string;
    createdAtLabel:string;
    isFavourite:boolean;
    disabled:boolean;
    onClick : () => void;
}
export const Footer = ({title,authorLabel,createdAtLabel,isFavourite,disabled,onClick}:FooterProps) => {
    return(
        <>
        <div className="relative bg-white p-3">
            <p className="truncate text-[13px] max-w-[calc(100%-20px)]">{title}</p>
            <p className="opacity-0 group-hover:opacity-100 text-[11px] text-muted-foreground truncate"> {authorLabel}, {createdAtLabel}</p>
            <button className={cn("opacity-0 group-hover:opacity-100 absolute top-3 text-muted-foreground right-3 hover:text-pink-700",
            disabled && "cursor-not-allowed"
            )} disabled={disabled} onClick={onClick}>
                <Star
                className={cn(
                    isFavourite && "fill-pink-700 text-pink-700"
                )}
                />
            </button>
        </div>
        </>
    )
}