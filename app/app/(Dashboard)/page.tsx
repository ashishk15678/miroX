"use client"
import { UserButton, useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

interface Dashboardpageprops {
  searchParams : {
    favourites? : string ;
    search? : string;
  }
}

export default function Home({searchParams}:Dashboardpageprops) {
  const {organization} = useOrganization();

  return (
   <>
   {/* {JSON.stringify(searchParams)} */}
   <div className="flex-1  h-[calc(100%-80px)] p-6">
    {!organization ? <EmptyOrg/> : <BoardList orgId={organization.id} searchParams={searchParams} />}
   </div>
   </>
  );
}
