import { Link } from 'react-router-dom'
import './index.scss'

function ProjectCard({ title, tagline, cover, color, url }) {
    return(
        <div className="card" style={{backgroundColor: color}}>
            <img alt="A screenshot of the website" src={cover}/>
            <div className="project-details">
               <h3>{title}</h3>
               <p>{tagline}</p>
               { title === "Bivo" ? (
                <button className='disabled' disabled>Coming soon !</button>
               ) : (
                <Link to={`/projet/${url}`}>
                    <button>See case study</button>
               </Link>
               )
               }
            </div>
        </div>
    )
}
export default ProjectCard