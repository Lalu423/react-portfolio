

export default function ProjectList(){
  const projs = [
    {
      name: "Proj 1",
      link: "https://sarroyo551.github.io/Activity-Roulette/"
    },
    {
      name: "Proj 2",
      link: "https://workout-plus-c7901a67a230.herokuapp.com/"
    },
    {
      name: "Proj 3",
      link: "https://workout-plus-c7901a67a230.herokuapp.com/"
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
          </li>
        ))
      }
      </ul>
    </section>
  )
};