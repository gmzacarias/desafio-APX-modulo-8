import React ,{ useState, useEffect} from "react"
import css from "./index.css"

type buttonProps={
    children: String;
    className?: any
    color: "blue"|"grey"|"pink"|"grey"
    onClick?: (e?)=> void

}






export function MainButton(props:buttonProps){
    const [className, setClassName] = useState("")
    
        useEffect(()=>{
            setClassName(props.className)
        }, [className])

    return <button className={css.root} onClick={props.onClick? props.onClick : null}>{props.children}</button>
}

