"use client"
import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Star } from "lucide-react"
import {useSearchParams} from "next/navigation"

const poppins = Poppins({
    subsets:["latin"],
    weight:["600"]
})

export const OrgSideBar = () => {
    const searchParams = useSearchParams()
    const favourites = searchParams.get('favourites')
    return(
        <>
        <div className="hidden lg:flex space-y-6 w-[206px] pl-5 pt-5 flex-col">
            <Link href={"/"}>
                <div className="flex items-center gap-x-2">
                    <Image
                    src={"/logo.svg"}
                    alt="Logo of miroX"
                    width={60}
                    height={60}
                    />
                    <span
                    className={cn("font-semibold text-2xl",poppins.className)}
                    >Miro X</span>
                </div>
            </Link>
            <OrganizationSwitcher
            hidePersonal
            appearance={{
                elements:{
                    rootBox:{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        width:"100%"
                    },
                    organizationSwitcherTrigger:{
                        padding:"6px",
                        width:"100%",
                        borderRadius:"8px",
                        border:"1px solid #E5E7EB",
                        justifyContent:"space-between",
                        backgroundColor:"white"
                    }
                }
            }}
            />
            <div className="space-y-1 w-full">
                <Button variant={favourites ? "ghost" : "secondary"} className="font-normal justify-start px-2 w-full" asChild size={"lg"}>
                    <Link href={"/"} >
                        <LayoutDashboard className="h-4 w-4 mr-2"/> Team boards
                    </Link>
                </Button>
                <Button variant={favourites ? "secondary" : "ghost"} className="font-normal justify-start px-2 w-full" asChild size={"lg"}>
                    <Link href={{
                        pathname:"/",
                        query:{favourites:true}
                    }} >
                        <Star className="h-4 w-4 mr-2"/> Favourite boards
                    </Link>
                </Button>
            </div>
        </div>
        </>
    )
}