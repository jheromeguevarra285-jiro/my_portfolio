// app/components/Navbar.tsx

export default function navbar() {
  return (
    <nav style={{
      padding: '16px 40px',
      borderBottom: '1px solid #e0e0e0',
      position: 'sticky',
      top: 0,
      backgroundColor: '#fff',
      zIndex: 100,
    }}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
      }}>
        <a href="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#1a1a1a' }}>
          Your Name
        </a>

        {/* Primary links — scroll to sections */}
        <ul style={{
          display: 'flex',
          gap: '24px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontSize: '0.95rem',
        }}>
          <li><a href="/home" style={linkStyle}>Home</a></li>
          <li><a href="/about" style={linkStyle}>About Me</a></li>
          <li><a href="/skills" style={linkStyle}>Skills</a></li>
          <li><a href="/projects" style={linkStyle}>Projects</a></li>
          <li><a href="/contact" style={linkStyle}>Contact</a></li>
        </ul>
      </div>

      {/* Secondary links */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '20px',
        fontSize: '0.82rem',
        flexWrap: 'wrap',
      }}>
        <a href="/hobbies" style={subLinkStyle}>Hobbies</a>
        <a href="/education" style={subLinkStyle}>Education</a>
        <a href="/achievements" style={subLinkStyle}>Achievements</a>
        <a href="/resume" style={subLinkStyle}>Resume</a>
        <a href="/gallery" style={subLinkStyle}>Gallery</a>
      </div>

    </nav>
  )
}

const linkStyle = {
  color: '#1a1a1a',
  fontWeight: '500' as const,
}

const subLinkStyle = {
  color: '#888',
  fontSize: '0.82rem',
}