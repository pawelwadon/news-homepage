import data from "./data";

const RightSide = ()=>{

const RightSideNews = (data.map((i)=>{
return <div className="right-side-topic">
    <h3>{i.header}</h3>
    <p>{i.text}</p>
</div> 
}));

    return(
        <div className="right-side">
        <h2>New</h2>
        <div className="right-side-topics">{RightSideNews}</div>
      </div>
    )
}

export default RightSide;
