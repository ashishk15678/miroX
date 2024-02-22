"use client"

import { AlertDialog,AlertDialogAction,AlertDialogCancel
    ,AlertDialogHeader,AlertDialogTitle
    ,AlertDialogTrigger,AlertDialogContent, AlertDialogFooter } from "@/components/ui/alert-dialog"
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

interface ConfirmModalProps{
    children:React.ReactNode;
    description?:string;
    onConfirm : ()=> void;
    header:string;
    disabled:boolean;
}

export const ConfirmModal = ({
    children,
    onConfirm,
    header,
    description,
    disabled
}:ConfirmModalProps)  => {

    const handleConfirm = () => {
        onConfirm()
    }
    return(
        <AlertDialog>
            <AlertDialogTrigger>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    {header}
                </AlertDialogTitle>
               
                        <AlertDialogDescription>
                        {description}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>
                            Cancel ? 
                        </AlertDialogCancel>
                        <AlertDialogAction
                        onClick={handleConfirm}
                        className=""
                        // disabled=  {disabled}
                        >
                            Confirm
                        </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}