"use client"
import qs from "query-string"
import { useDebounce } from "usehooks-ts"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import {
    ChangeEvent,useEffect,useState
} from "react"
import { Input } from "@/components/ui/input"

export function SearchComponent() {
    const router = useRouter()
    const [value,setValue] = useState("")
    const debouncedValue = useDebounce(value,500)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(()=>{
        const url = qs.stringifyUrl({
            url:"/",
            query:{
                search:debouncedValue
            }     
        },{skipEmptyString:true,skipNull:true}    
        )
        router.push(url);
    },[
        debouncedValue , router
    ])

    return (
        <>
        <div className="w-full relative">
            <Search 
            className="absolute top-1/2 transform -translate-y-1/2 ml-4 text-muted-foreground w-4 h-4"
            />
            <Input 
            placeholder="Search your boards"
            className="w-full max-w-[516px] pl-9"
            onChange={handleChange}
            value={value}
            />
        </div>
        
        </>
    )
}