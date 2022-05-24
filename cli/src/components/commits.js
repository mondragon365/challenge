import { useEffect, useState } from "react"
import Commit from './commit'
import "./commit.css"

export default function () {
    const [commits,setCommits]=useState([]);
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'commits').then(res=>{
            return res.json()
        }).then(res=>{
            setCommits(res)
        })
    },[]);
    function handleClick(html_url){
        window.open(html_url, "_blank")
    }
    return (
        <div>
            {commits.map(item=><Commit key={item.node_id} item={item} handleClick={handleClick}/>)}
        </div>
    )
}