'use client'
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useEffect, useRef, useState } from 'react'

const navItems = [
  { label: 'About Me',     href: '/about_me',     icon: '👤' },
  { label: 'Skills',       href: '/skills',       icon: '⚡' },
  { label: 'Projects',     href: '/projects',     icon: '🗂️' },
  { label: 'Hobbies',      href: '/hobbies',      icon: '🎯' },
  { label: 'Education',    href: '/education',    icon: '🎓' },
  { label: 'Achievements', href: '/achievements', icon: '🏆' },
  { label: 'Resume',       href: '/resume',       icon: '📄' },
  { label: 'Gallery',      href: '/gallery',      icon: '🖼️' },
  { label: 'Contact Me',   href: '/contact',      icon: '✉️' },
]

const hobbies = [
  {
    id: 'anime',
    icon: '🎌',
    title: 'Watching Anime',
    label: '01 / ENTERTAINMENT',
    desc: "Anime is my go-to way to unwind. I enjoy a wide range of genres — from action-packed shonen to thought-provoking psychological thrillers. It's not just entertainment; it's storytelling at its finest.",
    tags: ['Action', 'Shonen', 'Thriller', 'Slice of Life'],
    color: 'rgba(255,150,150,0.6)',
    glow:  'rgba(255,100,100,0.08)',
  },
  {
    id: 'gaming',
    icon: '🎮',
    title: 'Playing Online Games',
    label: '02 / GAMING',
    desc: "Online games sharpen my focus and strategic thinking. Whether it's competing in ranked matches or just grinding with friends, gaming is where I decompress and connect with others.",
    tags: ['Strategy', 'Competitive', 'Multiplayer', 'RPG'],
    color: 'rgba(120,180,255,0.6)',
    glow:  'rgba(80,140,255,0.08)',
  },
  {
    id: 'sports',
    icon: '♟️',
    title: 'Sports & Chess',
    label: '03 / PHYSICAL & MENTAL',
    desc: "I believe in balance — staying active with sports keeps my body sharp, while chess exercises my mind. Chess especially teaches patience, foresight, and calm under pressure.",
    tags: ['Chess', 'Sports', 'Strategy', 'Fitness'],
    color: 'rgba(120,220,160,0.6)',
    glow:  'rgba(80,200,120,0.08)',
  },
  {
    id: 'music',
    icon: '🎵',
    title: 'Listening to Music',
    label: '04 / MUSIC',
    desc: "Music is my constant companion — whether I'm studying, coding, or just relaxing. The right playlist can set the tone for the entire day and fuel creativity when I need it most.",
    tags: ['Chill', 'Lo-fi', 'OPM', 'OST'],
    color: 'rgba(200,150,255,0.6)',
    glow:  'rgba(160,100,255,0.08)',
  },
]

function BackButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="/home"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontFamily: "'DM Mono', monospace", fontSize: '0.7rem',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: hovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
        textDecoration: 'none', padding: '10px 18px', borderRadius: '10px',
        border: hovered ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.07)',
        backgroundColor: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateX(-3px)' : 'none',
        animation: 'fadeUp 0.6s ease 0.1s both', opacity: 0,
      }}
    >← Home</a>
  )
}

function HobbyCard({ hobby, index }: { hobby: typeof hobbies[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        padding: '28px 30px', borderRadius: '18px',
        border: hovered
          ? `1px solid ${hobby.color.replace('0.6', '0.35')}`
          : '1px solid rgba(255,255,255,0.08)',
        backgroundColor: hovered ? hobby.glow : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'translateY(-6px) scale(1.01)' : 'none',
        boxShadow: hovered
          ? `0 16px 48px rgba(0,0,0,0.45), 0 0 0 1px ${hobby.color.replace('0.6','0.15')}`
          : '0 2px 10px rgba(0,0,0,0.25)',
        animation: `fadeUp 0.6s ease ${0.3 + index * 0.12}s both`,
        opacity: 0, cursor: 'default',
      }}
    >
      {/* Corner glow */}
      <div style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '130px', height: '130px', borderRadius: '50%',
        background: `radial-gradient(circle, ${hobby.color.replace('0.6','0.15')} 0%, transparent 70%)`,
        pointerEvents: 'none', opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }} />

      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            fontSize: '2rem', lineHeight: 1,
            filter: hovered ? 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' : 'none',
            transition: 'filter 0.3s',
          }}>{hobby.icon}</span>
          <p style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
          }}>{hobby.label}</p>
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', fontWeight: 800,
        color: hovered ? '#ffffff' : 'rgba(255,255,255,0.88)',
        letterSpacing: '-0.01em', marginBottom: '12px',
        transition: 'color 0.2s',
      }}>{hobby.title}</h3>

      {/* Description */}
      <p style={{
        fontSize: '0.84rem', color: 'rgba(255,255,255,0.35)',
        lineHeight: 1.75, marginBottom: '20px',
      }}>{hobby.desc}</p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {hobby.tags.map((tag) => (
          <span key={tag} style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.58rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: hovered ? hobby.color : 'rgba(255,255,255,0.25)',
            padding: '3px 10px', borderRadius: '6px',
            border: hovered
              ? `1px solid ${hobby.color.replace('0.6','0.3')}`
              : '1px solid rgba(255,255,255,0.08)',
            backgroundColor: hovered
              ? hobby.color.replace('0.6','0.08')
              : 'rgba(255,255,255,0.02)',
            transition: 'all 0.25s ease',
          }}>{tag}</span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div style={{
        marginTop: '20px', height: '1px',
        background: `linear-gradient(to right, ${hobby.color.replace('0.6','0.4')}, transparent)`,
        opacity: hovered ? 1 : 0.25,
        transition: 'opacity 0.3s',
      }} />
    </div>
  )
}

function NavPill({ item }: { item: typeof navItems[0] }) {
  const [hovered, setHovered] = useState(false)
  const isActive = item.href === '/hobbies'
  return (
    <a
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '8px 14px', borderRadius: '10px',
        border: isActive ? '1px solid rgba(255,255,255,0.3)'
          : hovered ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(255,255,255,0.06)',
        backgroundColor: isActive ? 'rgba(255,255,255,0.1)'
          : hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.02)',
        textDecoration: 'none', transition: 'all 0.25s ease',
        transform: hovered && !isActive ? 'translateY(-3px)' : 'none',
      }}
    >
      <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>{item.icon}</span>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: '0.62rem',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: isActive ? 'rgba(255,255,255,0.9)'
          : hovered ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.3)',
        transition: 'color 0.2s', whiteSpace: 'nowrap',
      }}>{item.label}</span>
    </a>
  )
}

export default function HobbiesPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let frame = 0, raf: number

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++
      ctx.strokeStyle = 'rgba(255,255,255,0.03)'
      ctx.lineWidth = 1
      const s = 60
      for (let x = 0; x < canvas.width; x += s) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); ctx.stroke() }
      for (let y = 0; y < canvas.height; y += s) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); ctx.stroke() }
      const scanY = ((frame * 0.4) % (canvas.height + 40)) - 20
      const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40)
      grad.addColorStop(0, 'rgba(255,255,255,0)')
      grad.addColorStop(0.5, 'rgba(255,255,255,0.03)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY - 40, canvas.width, 80)
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  const particles = Array.from({ length: 24 }, (_, i) => ({
    top: `${((i * 37 + 11) % 97)}%`,
    left: `${((i * 53 + 7) % 95)}%`,
    animationDelay: `${(i * 0.4) % 6}s`,
    animationDuration: `${5 + (i % 4)}s`,
  }))

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@400;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0b; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes particlePulse {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50%       { opacity: 0.22; transform: scale(1.6); }
        }
        @keyframes subtlePan {
          0%, 100% { transform: translateX(0) translateY(0); }
          33%       { transform: translateX(8px) translateY(-12px); }
          66%       { transform: translateX(-6px) translateY(8px); }
        }
        .particle {
          animation: particlePulse var(--dur, 5s) var(--delay, 0s) ease-in-out infinite,
                     subtlePan 12s ease-in-out infinite;
        }
      `}</style>

      <main style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'flex-start', padding: '60px 24px 80px',
        backgroundColor: '#0a0a0b', overflow: 'hidden',
        fontFamily: "'Syne', sans-serif",
      }}>
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

        <div style={{
          position: 'absolute', top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)', width: '700px', height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {particles.map((p, i) => (
          <div key={i} className="particle" style={{
            position: 'absolute', top: p.top, left: p.left,
            width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'white',
            ['--delay' as string]: p.animationDelay,
            ['--dur' as string]: p.animationDuration,
            pointerEvents: 'none',
          }} />
        ))}

        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          width: '100%', maxWidth: '720px',
        }}>
          <div style={{ alignSelf: 'flex-start', marginBottom: '48px' }}>
            <BackButton />
          </div>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '56px', width: '100%' }}>
            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.72rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)', marginBottom: '14px',
              animation: 'fadeUp 0.6s ease 0.15s both', opacity: 0,
            }}>What I enjoy</p>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', fontWeight: 800,
              color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05,
              marginBottom: '16px',
              animation: 'fadeUp 0.6s ease 0.28s both', opacity: 0,
            }}>Hobbies</h1>
            <div style={{
              width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)',
              margin: '0 auto', animation: 'fadeUp 0.6s ease 0.38s both', opacity: 0,
            }} />
          </div>

          {/* Cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px', width: '100%', marginBottom: '60px',
          }}>
            {hobbies.map((hobby, i) => (
              <HobbyCard key={hobby.id} hobby={hobby} index={i} />
            ))}
          </div>

          {/* Count divider */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '52px',
            animation: 'fadeUp 0.5s ease 0.9s both', opacity: 0, width: '100%',
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }} />
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.65rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.2)',
            }}>{hobbies.length} hobbies</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }} />
          </div>

          <p style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.68rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)', marginBottom: '20px',
            animation: 'fadeUp 0.6s ease 0.95s both', opacity: 0,
          }}>Explore more</p>

          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center',
            animation: 'fadeUp 0.6s ease 1.05s both', opacity: 0,
          }}>
            {navItems.map((item) => <NavPill key={item.href} item={item} />)}
          </div>
        </div>
      </main>
    </>
  )
}