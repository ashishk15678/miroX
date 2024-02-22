"use client"
import { ClerkProvider,useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated,AuthLoading,ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";

interface ConvexWithClerkprops{
    children:React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export const ProvideWithClerkAndConvex = ({children}:ConvexWithClerkprops) => {
return(
    <>
    <ClerkProvider>
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
            <Authenticated>{children}</Authenticated>
            <AuthLoading><Loading/></AuthLoading>
        </ConvexProviderWithClerk>        
    </ClerkProvider>
    </>
)
}