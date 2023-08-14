export default function Nav({setPage}){
  return (
    <nav>
      <button onClick={() => setPage('About')}>About Me</button>
      <button onClick={() => setPage('Portfolio')}>Portfolio</button>
      <button onClick={() => setPage('Contact')}>Contact</button>
      <button onClick={() => setPage('Resume')}>Resume</button>
    </nav>
  )
};