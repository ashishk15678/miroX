import {auth} from "@clerk/nextjs"
export default function page(){
    async function GETUSER(){
        return auth()
    }

    return(
        <>
        </>
    )
}

export {GETUSER}