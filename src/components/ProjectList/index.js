/* import './status.css' */
import Pokeball from "../Pokeball";
import PipSvg from "../PipSvg";

function ProjectList({setLabel}) {

  const goToProject = e => {
    const eventId = e.currentTarget.getAttribute('id')
    switch(eventId) {
      case 'movie':
        setLabel('MOVIE HUB')
        break;
      case 'book':
        setLabel('BOOKFAST CLUB')
        break;
      case 'pipboy':
        setLabel('PIP FOR PI')
        break;
      case 'pokemon':
        setLabel('POKEFINDERTCG')
        break;
      default:
        break;
    }
  }

    return (
        <div className='project-grid'>
            <div onClick={goToProject} className='project-container' id='movie'>
              <div className='flex project-svg'>
                {/* <i className="fas fa-film"></i> */}
                <svg viewBox="0 0 24 24" fill="#000000" version="1.1" id="film1">
                  <path d="M0 0h24v24H0V0z" fill="none" id="path33"/>
                  <path d="M 20.985934,3.0647498 V 5.136975 H 18.005616 V 3.0647498 H 6.0843459 V 5.136975 H 3.1040286 V 3.0647498 H 0.12371134 V 21.714776 H 3.1040286 v -2.072225 h 2.9803173 v 2.072225 H 18.005616 v -2.072225 h 2.980318 v 2.072225 H 23.96625 V 3.0647498 Z M 6.0843459,17.570325 H 3.1040286 V 15.4981 h 2.9803173 z m 0,-4.14445 H 3.1040286 V 11.35365 h 2.9803173 z m 0,-4.1444495 H 3.1040286 V 7.2092002 H 6.0843459 Z M 15.025299,19.642551 H 9.0646627 V 5.136975 h 5.9606363 z m 5.960635,-2.072226 H 18.005616 V 15.4981 h 2.980318 z m 0,-4.14445 H 18.005616 V 11.35365 h 2.980318 z m 0,-4.1444495 H 18.005616 V 7.2092002 h 2.980318 z" id="path35"/>
                </svg>
                <svg viewBox="0 0 24 24" fill="#000000" version="1.1" id="film2" className='project-svg'>
                  <path d="M0 0h24v24H0V0z" fill="none" id="path33"/>
                  <path d="M 20.985934,3.0647498 V 5.136975 H 18.005616 V 3.0647498 H 6.0843459 V 5.136975 H 3.1040286 V 3.0647498 H 0.12371134 V 21.714776 H 3.1040286 v -2.072225 h 2.9803173 v 2.072225 H 18.005616 v -2.072225 h 2.980318 v 2.072225 H 23.96625 V 3.0647498 Z M 6.0843459,17.570325 H 3.1040286 V 15.4981 h 2.9803173 z m 0,-4.14445 H 3.1040286 V 11.35365 h 2.9803173 z m 0,-4.1444495 H 3.1040286 V 7.2092002 H 6.0843459 Z M 15.025299,19.642551 H 9.0646627 V 5.136975 h 5.9606363 z m 5.960635,-2.072226 H 18.005616 V 15.4981 h 2.980318 z m 0,-4.14445 H 18.005616 V 11.35365 h 2.980318 z m 0,-4.1444495 H 18.005616 V 7.2092002 h 2.980318 z" id="path35"/>
                </svg>
              </div>
              <div className='project-title'>Movie Hub</div>
            </div>

            <div onClick={goToProject} className='project-container' id='book'>
              <div className='project-svg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>   
                </svg>
              </div>
              <div className='project-title'>The Bookfast Club</div>
            </div>

            <div onClick={goToProject} className='project-container' id='pipboy'>
              <div className='project-svg'>
                <PipSvg></PipSvg>
              </div>
              <div className='project-title'>Pip for pi</div>
            </div>

            <div onClick={goToProject} className='project-container' id='pokemon'>
              <Pokeball></Pokeball>
              
              <div className='project-title'>PokefinderTCG</div>
            </div>
        </div>
)}

export default ProjectList;