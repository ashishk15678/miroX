export function ToolBar() {
    return(
        <>
        <div className="absolute top-[50%] -translate-y-[50%] flex flex-col gap-y-2">
            <div className="bg-white rounded-md p-1.5 flex flex-col gap-y-1 shadow-md items-center">
                <div>Pencil</div>
                <div>Square</div>
            </div>

            <div className="bg-white rounded-md p-1.5 flex flex-col gap-y-1 shadow-md items-center">
                <div>undo</div>
                <div>redo</div>
            </div>
        </div>
        </>
    )
}