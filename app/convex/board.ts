import {mutation} from "./_generated/server"
import {v} from "convex/values"

export default function getImage(num:Number) {
    return `https://raw.githubusercontent.com/AntonioErdeljac/next14-miro-clone/master/public/placeholders/${num}.svg` 
}
const randomImage = getImage(Math.floor(Math.random() * 10))
export const create = mutation({
    args:{
        orgId:v.string(),
        title:v.string()
    },
    handler: async(ctx,args) => {
        const identity = await ctx.auth.getUserIdentity()

        if(!identity) throw new Error("Unauthorized")

        const board = await ctx.db.insert("boards",{
            title:args.title,
            orgId:args.orgId,
            authorId:identity.subject,
            authorName:identity.name!,
            imageUrl:randomImage,
        })
        return board
    }

})

export const remove = mutation({
    args:{
        id:v.id("boards")
    },
    handler:async(ctx,args)=>{
        const identity = await ctx.auth.getUserIdentity()

        if(!identity) throw new Error("Unauthorized")

        if(identity) {
            ctx.db.delete(args.id)
        }
    }
})

export const update = mutation({
    args:{
        id:v.id("boards")
        ,title:v.string()
    },
    handler: async(ctx,args)=>{
        const identity = await ctx.auth.getUserIdentity()
        if(!identity) throw new Error("Unauthorized")
        const title = args.title.trim()

        if(!title) throw new Error("title is required")
        if(title.length>60) throw new Error("Title cannot be greater than 60 chars")

        const board = await ctx.db.patch(
            args.id,{
                title:args.title
            }
        )
        return board
    }
})

export const favourite = mutation({
    args:{
        id:v.id("boards") , orgId : v.string()
    } , handler:async(ctx,args) => {
        const identity = await ctx.auth.getUserIdentity()
        if(!identity) throw Error("Unauthorized")

        const board = await ctx.db.get(args.id);

        if(!board) throw new Error("No boards found")

        const userId = identity.subject;

        const existingFavourite = await ctx.db.query("userFavourites")
        .withIndex("by_user_board_org",(q) => 
        q
            .eq("userId",userId)
            .eq("orgId",args.orgId)
            .eq("boardId",board._id
        )).unique()

        if(existingFavourite)throw new Error("board already favourited")

        const fav = await ctx.db.insert("userFavourites",{
            userId,
            orgId:args.orgId,
            boardId:board._id
        })
        return fav
    }
})



export const unfavourite = mutation({
    args:{
        id:v.id("boards") 
    } , handler:async(ctx,args) => {
        const identity = await ctx.auth.getUserIdentity()
        if(!identity) throw Error("Unauthorized")

        const board = await ctx.db.get(args.id);

        if(!board) throw new Error("No boards found")

        const userId = identity.subject;

        const existingFavourite = await ctx.db.query("userFavourites")
        .withIndex("by_user_board",(q) => 
        q
            .eq("userId",userId)
            .eq("boardId",board._id
        )).unique()

        if(!existingFavourite)throw new Error("Favourited Board not found")

        const fav = await ctx.db.delete(existingFavourite._id)
        return fav
    }
})