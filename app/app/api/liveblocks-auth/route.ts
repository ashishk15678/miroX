import { auth, currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { NextResponse } from "next/server";
import {GETUSER} from "@/app/(Dashboard)/sendsUser/page";

const convex = new ConvexHttpClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
  );
  
  const liveblocks = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY!,
  });
  
  export async function POST(request: Request) {
    const USER = GETUSER()
    console.log(USER);
  
  
  

  const authorization = await auth();
  const user = await auth().user;

  console.log({"AUTH ": await authorization,"USER" :await user});
  

  if (!authorization || !user) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { room } = await request.json();
  const board = await convex.query(api.board.get, { id: room });

  if (board?.orgId !== authorization.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }

  const userInfo = {
    name: user.firstName || "Teammeate",
    picture: user.imageUrl,
  };

  const session = liveblocks.prepareSession(
    user.id,
    { userInfo }
  );

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();
  return new Response(body, { status });
};

export function GET(){
  return new NextResponse("ok")
}