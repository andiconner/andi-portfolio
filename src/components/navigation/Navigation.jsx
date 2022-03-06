import myResume from '../../images/about/220111_andi_Conner.pdf'
import './navigation.css'

function Navigation ({setCurrentPage}){
    
    return(
        <nav className='navigation'>
            <ul className='flex-row'>
            <li className="">
                    <a href="#" onClick ={()=>setCurrentPage("home")}>
                    Home
                    </a>
                </li>
                <li className="">
                    <a href="#about" onClick = {()=> setCurrentPage("about")}>
                    About me
                    </a>
                </li>
                <li className="">
                    <a href="#portfolio" onClick = {()=> setCurrentPage("portfolio")}>
                    Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick = {() => setCurrentPage("contact")}>
                    Contract
                    </a>
                </li>
                <li className="">
                    <a href={myResume}   alt="Andi Conner resume" >
                    Resume
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default Navigation;