

export default function ProjectList(){
  const projs = [
    {
      name: "Proj 1",
      link: "https://sarroyo551.github.io/Activity-Roulette/",
      screenshot: "https://github.com/Lalu423/react-portfolio/blob/main/portfolio/src/assets/AR_project.png"
    },
    {
      name: "Proj 2",
      link: "https://workout-plus-c7901a67a230.herokuapp.com/",
      screenshot: "https://github.com/Lalu423/react-portfolio/blob/main/portfolio/src/assets/workout-tracker.jpg"
    },
    {
      name: "Proj 3",
      link: "https://workout-plus-c7901a67a230.herokuapp.com/",
      screenshot: "https://github.com/Lalu423/react-portfolio/blob/main/portfolio/src/assets/workout-tracker.jpg"
    }
  ]

  return (
    <section>
      <h2>Projects</h2>
      <ul id="projects">
      {
        projs.map((project, i) => (
          <li key = {i}>
            <a className="links" href={project.link}>
              {project.name}
            </a>
            <img className="screenshot" src={project.screenshot} alt="project screenshot" />
          </li>
        ))
      }
      </ul>
    </section>
  )
};