import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";
import { Info } from "./info";
import { Participants } from "./participants";

export const Loading = () => (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
        <Loader  className="h-6 w-6 text-muted-foregrround animate-spin" />
        <Info.skeleton />
        <Participants.Skeleton />
    </main>
)