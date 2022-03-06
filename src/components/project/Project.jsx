import './project.css';
import img from '../../images/portfolio/10.jpg';



const Project = ({title, link}) => {
    return(
            <div className="proj">
                <div className="proj-browser">
                    <div className="proj-circle"></div>
                    <div className="proj-circle"></div>
                    <div className="proj-circle"></div>
                    
                </div>
                <div className="proj-title"> {title}</div>

                    <a href={link} target="blank" rel='noreferrer'>
                    <img src={img} alt="" className='proj-img'/>
                    </a>
     

            </div>

    )
}

export default Project