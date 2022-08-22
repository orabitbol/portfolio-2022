import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import { FaAward } from 'react-icons/fa'


const About = () => {
  return (
    <section id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            {/* <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>

            </article> */}
          </div>

          <p>
            I am a junior Front-End developer with a working experience in multiple programming languages including, Java,
            C++, Python, JavaScript, React.js, Html, CSS, Node.js, Spring Boot , to name a few. Extensive knowledge in object-oriented
            programming. I am a highly motivated individual that is eager to continue learning and developing my technical
            skill set. I am passionate about helping customers develop scalable applications and working as a technical
            leader alongside customer business, development and infrastructure teams. I am interested in a position that
            would allow me to work on a variety of projects that will allow me to utilize my creativity in problem solving.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About