export default function Commit({item,handleClick}){
    return(
        <div className="commitContainer">
            <div className="commit" onClick={()=>handleClick(item?.html_url)}>
                <div className="tittle">{item?.commit.message} - By -{item?.commit.author.name}</div>                
            </div>
        </div>
    )
}
