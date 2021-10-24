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
              <svg className='film-strip' xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 18 18" shape-rendering="crispEdges">
                <path xmlns="http://www.w3.org/2000/svg" stroke="#000000" d="M0 0h18M0 1h18M0 2h2M4 2h2M12 2h2M16 2h2M0 3h2M4 3h2M12 3h2M16 3h2M0 4h6M12 4h6M0 5h6M12 5h6M0 6h2M4 6h2M12 6h2M16 6h2M0 7h2M4 7h2M12 7h2M16 7h2M0 8h18M0 9h18M0 10h2M4 10h2M12 10h2M16 10h2M0 11h2M4 11h2M12 11h2M16 11h2M0 12h6M12 12h6M0 13h6M12 13h6M0 14h2M4 14h2M12 14h2M16 14h2M0 15h2M4 15h2M12 15h2M16 15h2M0 16h18M0 17h18"/>
                <path xmlns="http://www.w3.org/2000/svg" stroke="#000000" d="M0 0h18M0 1h18M0 2h2M4 2h2M12 2h2M16 2h2M0 3h2M4 3h2M12 3h2M16 3h2M0 4h6M12 4h6M0 5h6M12 5h6M0 6h2M4 6h2M12 6h2M16 6h2M0 7h2M4 7h2M12 7h2M16 7h2M0 8h18M0 9h18M0 10h2M4 10h2M12 10h2M16 10h2M0 11h2M4 11h2M12 11h2M16 11h2M0 12h6M12 12h6M0 13h6M12 13h6M0 14h2M4 14h2M12 14h2M16 14h2M0 15h2M4 15h2M12 15h2M16 15h2M0 16h18M0 17h18"/>
              </svg>
              </div>
              <div className='project-title'>Movie Hub</div>
            </div>

            <div onClick={goToProject} className='project-container' id='book'>
              <div className='project-svg' id='bookSVG'>
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