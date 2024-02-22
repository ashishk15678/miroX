import {create } from "zustand"

const defaultvalues = {id:"",title:""}

interface IRenameModalProps{
    isOpen : boolean;
    initialValues : typeof defaultvalues;
    onOpen : (id:string,title:string) => void;
    onClose : () => void;
}

export const useRenameModal = create<IRenameModalProps>((set)=>({
    isOpen:false,
    onOpen: (id,title)=>set({
        isOpen:true,
        initialValues: {id,title}
    }),
    onClose: () => set({
        isOpen:false,
        initialValues:defaultvalues,
    }),
    initialValues:defaultvalues,

}))