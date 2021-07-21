/* import './status.css' */
import {useState} from 'react'
import ProjectList from '../components/ProjectList';
import ProjectDisplay from '../components/ProjectDisplay';

function Projects() {
  const [label, setLabel] = useState('PROJECTS')

  const projectDetails = [
    {
      title: 'moviehub',
      description: 'A collaborative project that lets a user create a list of movies they would like to watch, using the omdb api, jquery, and local storage. The site also has multiple ways to show the user trending movies and topics that they can then put on their list. After viewing they can then check the movie off their list and organize and rank it with other movies they have seen.',
      githubLink: 'https://github.com/clintonstrange/movie-hub',
      siteLink: 'https://clintonstrange.github.io/movie-hub/'
    },
    {
      title: 'bookfast-club',
      description: 'A social network, where people can create an account and share what books they recommend to others. Users can like what others post and add the book to a list for them to read, which is tracked on the users profile. Made with the handlebars templating language, jquery, and a MySQL backend.',
      githubLink: 'https://github.com/BeatyPete/the-bookfast-club',
      siteLink: 'https://the-bookfast-club.herokuapp.com/'
    },
    {
      title: 'pipForPi',
      description: 'A recreation of the pip-boy from Fallout 4 in React. The goal of this is to create a front end that simulates the same functions as the in-game pip-boy, both through normal browser event like mouse clicks, as well as accepting input from a raspberry pi’s gpio pins. Ideally any person could clone the code and have a competent UI to go with their own pip-boy prop.',
      githubLink: 'https://github.com/BeatyPete/pip-pip',
      siteLink: 'https://www.youtube.com/watch?v=1g_UHV42jOA&ab_channel=Raz'
    },
    {
      title: 'pokefinderTCG',
      description: 'A MERN stack, trading platform for pokemon cards, themed after the gen 3 games’ UI. Users can upload details of the cards they would like to trade, images are stored using Cloudinary and data is fetched with graphql.Trading through users is done through the two parties contacting each other through email and login is handled with jsonwebtokens. ',
      githubLink: 'https://github.com/Spody10/PokefinderTCG',
      siteLink: 'https://pokefinder-tcg.herokuapp.com/'
    }
  ]

    return (
        <section className='projects'>

        <div className='title-container'>
          <div className='section-title'>{label}</div>
        </div>

        {label === 'PROJECTS' && (<ProjectList setLabel={setLabel}></ProjectList>)}
        {label === 'MOVIE HUB' && (<ProjectDisplay setLabel={setLabel} projectDetails={projectDetails[0]}></ProjectDisplay>)}
        {label === 'BOOKFAST CLUB' && (<ProjectDisplay setLabel={setLabel} projectDetails={projectDetails[1]}></ProjectDisplay>)}
        {label === 'PIP FOR PI' && (<ProjectDisplay setLabel={setLabel} projectDetails={projectDetails[2]}></ProjectDisplay>)}
        {label === 'POKEFINDERTCG' && (<ProjectDisplay setLabel={setLabel} projectDetails={projectDetails[3]}></ProjectDisplay>)}

      </section>
)}

export default Projects;