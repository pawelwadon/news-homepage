const News = ({image,alt,nr,header,text})=>{

    return(
        <div className="topic-element">
        <img src={image} alt={alt}/>
            <div>
                <h3>{nr}</h3>
                <h4>{header}</h4>
                <p>{text}</p>
            </div>
        </div>
    )

}

export default News