import './index.scss'

function ProjectCard({ title, description, cover, color }) {
    return(
        <div className="card" style={{backgroundColor: color}}>
            <img alt="A screenshot of the website" src={cover}/>
            <div className="project-details">
               <h3>{title}</h3>
               <p>{description}</p>
               <button>See case study</button> 
            </div>
            
        </div>
    )
}
export default ProjectCard