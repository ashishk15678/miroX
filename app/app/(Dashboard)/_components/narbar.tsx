"use client"

import { UserButton,OrganizationSwitcher, useOrganization } from "@clerk/nextjs"
import { SearchComponent } from "./search_input"
import { Invite } from "./invite-button"


export const Navbar = () => {
    const {organization} = useOrganization();
    
    return(
        <>
        <div className="flex items-center p-5 gap-x-5 ">
            <div className="hidden lg:flex lg:flex-1">
                <SearchComponent/>
            </div>
            <div className="block lg:hidden flex-1">
            <OrganizationSwitcher
            hidePersonal
            appearance={{
                elements:{
                    rootBox:{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        width:"100%",
                        maxWidth:"376px"
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
            </div>
            { organization && (<Invite />   )}
            <UserButton/>
        </div>
        </>
    )
}