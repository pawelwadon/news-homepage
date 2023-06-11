import News from "./News";
import './DownSection.css'
import retroPc from "./assets/image-retro-pcs.jpg";
import laptopKeyboard from "./assets/image-top-laptops.jpg";
import gamingController from "./assets/image-gaming-growth.jpg";


const DownSection = ()=>{

    return(
       <div className="topics">
        <News image={retroPc} alt={'retro-pcs'} nr={'01'} header={'Reviving Retro PCs'} text={'What happens when old PCs are given modern upgrades?'} />
        <News image={laptopKeyboard} alt={'laptop-keyboard'} nr={'02'} header={'Top 10 Laptops of 2022'} text={'Our best picks for various needs and budgets.'}/>
        <News image={gamingController} alt={'gaming-controller'} nr={'03'} header={'The Growth of Gaming'} text={'How the pandemic has sparked fresh opportunities.'}/>
       </div>
    )
    
}

export default DownSection