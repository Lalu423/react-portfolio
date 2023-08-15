export default function Contact(){
    return (
        <div>
            <h1 className="title">Contact</h1>
            <ul className="titleBody">
                <a href="mailto:jonathanlalu@gmail.com">Email</a>
                <a href="https://instagram.com/laluminati">Instagram</a>
                <a href="https://linkedin.com/in/jonathan-lalu-8a5620255">LinkedIn</a>
                <style jsx>{`
        a {
          display: block;
          margin-bottom: 10px; /* Adjust the value as needed */
        }
      `}</style>
            </ul>
        </div>
    )
};