import './index.scss'
import ProjectCard from '../../componants/ProjectCard'
import projects from '../../projects.json'
import designIcon from '../../Photos/web-design.png'
import devIcon from '../../Photos/coding.png'
import Scroller from '../../componants/Scroller'


function Home() {
    // console.log(projects[0])
    // const projectTitle = projects[0].title
    return(
        <main>
            <div className="main-container">
                <h1 className="first">The  <span>freedom</span> of creativity</h1> 
                <h1 className="second">meets the <span>precision</span> of code</h1>
                <a href="#works"> 
                    <button>See projects</button>
                </a>
                
            </div>
            <div className="glass-overlay" id='works'>
                <h2>Here's a selection of my previous work</h2>
                <div className="card-wrapper">
                    {projects.map(({ title, id, tagline, cover, color, url}) => (
                        <ProjectCard title={title} key={id} tagline={tagline} cover={cover} color={color} url={url}/>
                    ))} 
                    
                </div>
            </div>
            <div className="about-container" id='about'>
                <div className="img-box">
                    
                </div>
                <div>
                    <h2>Title of section</h2>
                    <p>Little paragraph talking about me, about my services, very brief just an overview, nobody wants to read a super long thing these days anyways. Maybe a second sentence, if it’s needed, just keep it short.</p>
                </div>
            </div>
            
            <div className="skills" id='skills'>
                <h2>My skillset</h2>
                <div className="skills-container">
                        <div className="skills-card">
                            <h4>Design</h4>
                            <img alt="" src={designIcon}/>
                            <p>Quickly talk about design and passion and things.</p>
                            <ul>
                                <li>Logos</li>
                                <li>UI</li>
                                <li>UX</li>
                                <li>Web design</li>
                                <li>Graphic design</li>
                            </ul>
                        </div>
                        <div className="skills-card">
                            <h4>Dev</h4>
                            <img alt="" src={devIcon}/>
                            <p>Sentence about development and bringing my designs to life.</p>
                            <ul>
                                <li>HTML</li>
                                <li>SASS</li>
                                <li>React</li>
                                <li>Javascript</li>
                                <li>GSAP</li>
                            </ul>
                        </div>
                        
                </div>
            </div>
            <Scroller />

        </main>
    )
}

export default Home