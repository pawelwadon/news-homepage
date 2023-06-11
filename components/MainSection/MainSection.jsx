import './MainSection.css'
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';

const MainSection = ()=>{

    return(
        <div className={'news'}>
        <LeftSide/>
        <RightSide/>
        </div>
    )
    

}

export default MainSection