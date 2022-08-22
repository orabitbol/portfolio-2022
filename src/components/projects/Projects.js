import React from 'react'
import './projects.css'
import IMG1 from '../../assets/management-app.png'
import IMG2 from '../../assets/weather-app-pic.png'
import IMG3 from '../../assets/thirdeye-pic.png'
import IMG4 from '../../assets/portfolio.png'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Management of a table of employees || React.js, Spring Boot, MySql',
    github: 'https://github.com/orabitbol/Management',
    demo: 'https://www.youtube.com/watch?v=_AE-ieQoKSw'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Weather Management By Cities In The World || React.js',
    github: 'https://github.com/orabitbol/Weather-app',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Technology For Use In Drones || React.js , Node.js',
    github: 'https://github.com/orabitbol/ThirdEye',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'My Portfolio',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
]


const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <div key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects