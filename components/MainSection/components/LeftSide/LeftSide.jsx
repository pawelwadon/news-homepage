import data from './data'
import desktopImg from '../../assets/image-web-3-desktop.jpg'
import mobileImg from '../../assets/image-web-3-mobile.jpg'


const LeftSide = ({header,text})=>{

header = data.map((i)=>{return i.header});
text = data.map((i)=>{return i.text})  

    return(
        <div className="leftside">
        <div className="img-desktop">
          <img
            src={desktopImg}
            alt="image-desktop"
            className='img-active-desktop'
          />
          <img src={mobileImg} alt='image-mobile' className='img-active-mobile'/>
        </div>
        <div className="main">
          <h1 className="header">{header}</h1>
          <div className="main-text">
              <p>{text}</p>
            <div className="btn">
              <button className="read-more">Read more</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LeftSide;