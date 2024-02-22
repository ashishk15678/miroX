import { List } from "./list"
import { NewNavButton } from "./new-button"

export const Sidebar = ( ) => {
    return(
        <>
        <aside className="fixed z-1 h-full text-white left-0 bg-blue-950 w-[60px] flex flex-col p-3 gap-y-4">
            <List/>
            <NewNavButton/>
            
            side
        </aside>
        </>
    )
}