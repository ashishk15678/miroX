import { Navbar } from "./_components/narbar"
import { OrgSideBar } from "./_components/org-sidebar"
import { Sidebar } from "./_components/sidebar"

const DashBoardLayout = ({children}:{children:React.ReactNode}) => {
return(
    <>
    <main className="h-full">
        <Sidebar/>
        <div className="h-full pl-[60px]">
            <div className="flex gap-x-3 h-full">
                <OrgSideBar/> 
                <div className="h-full flex-1">
                    <Navbar/>
                {children}
                </div>
            </div>
        
        </div>
    </main>
    </>
)
}
export default DashBoardLayout