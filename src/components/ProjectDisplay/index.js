import './project-display.css'
/* import pipForPi from '../../assets/images/pipForPi.png' */

function ProjectDisplay({setLabel, projectDetails}) {

    const backToProjectList = () => {
        setLabel('PROJECTS')
    }

    return (
        <div className='project-grid project-display'>
            <div>
                <button onClick={backToProjectList}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <p>
                    {projectDetails.description}
                </p>
            </div>

            <div>
                <a href={projectDetails.siteLink} rel="noreferrer" target="_blank">
                    <img src={require(`../../assets/images/${projectDetails.title}.png`).default} alt={`example of ${projectDetails.title} site`}></img>
                </a>
                
                <div className='project-links'>
                    <a className='site' rel="noreferrer" href={projectDetails.siteLink} target="_blank">
                        <i className="fas fa-globe"></i>
                    </a>
                    
                    <a className='git' rel="noreferrer" href={projectDetails.githubLink} target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
)}

export default ProjectDisplay;