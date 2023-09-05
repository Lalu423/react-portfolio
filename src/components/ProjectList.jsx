

export default function ProjectList(){
  const projs = [
    {
      name: "Activity Roullette",
      link: "https://sarroyo551.github.io/Activity-Roulette/",
      screenshot: "http://github.com/Lalu423/react-portfolio/blob/main/portfolio/src/assets/AR_project.png"
    },
    {
      name: "Workout Tracker",
      link: "https://workout-plus-c7901a67a230.herokuapp.com/",
      screenshot: "http://github.com/Lalu423/react-portfolio/blob/main/portfolio/src/assets/workout-tracker.jpg"
    },
    {
      name: "Workout Tracker",
      link: "https://hive1-03d1291901c2.herokuapp.com/",
      screenshot: "https://github.com/Lalu423/react-portfolio/blob/main/public/sample1.jpg"
    }
  ]

  return (
    <section>
      <h2 className="title">Projects</h2>
      <ul id="projects" className="titleBody">
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