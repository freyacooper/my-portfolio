import projects from '../../projects.json'
import './index.scss'
import { useParams } from "react-router-dom"
import { Navigate } from 'react-router-dom'
import Error from '../Error'

function Project() {

    const { url } = useParams()
    const currentProject = projects.find(project => project.url === url)
    console.log(currentProject)

    if (currentProject === undefined)
        return (
            <Navigate to="/Error" element={<Error />}/>
    )

    return(
        <div className='project-container'>
            <h1>{currentProject.title}</h1>
            <p className='tagline' style={{color: currentProject.darkercolor}}>{currentProject.tagline}</p>
            <div className='intro'>
                <img src={currentProject.cover} alt=''/>
                <div>
                    <p>{currentProject.description[0]}</p>
                    <p>{currentProject.description[1]}</p>
                    <p>{currentProject.description[2]}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Project