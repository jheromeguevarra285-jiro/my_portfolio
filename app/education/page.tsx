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

const education = [
  {
    id: 'college',
    level: '01 / COLLEGE',
    school: 'Pamantasan ng Lungsod ng San Pablo',
    degree: 'Bachelor of Science in Information Technology',
    year: '2024 — Present',
    icon: '🎓',
    current: true,
  },
  {
    id: 'shs',
    level: '02 / SENIOR HIGH SCHOOL',
    school: 'Santisimo Rosario Integrated Senior High School',
    degree: 'Senior High School',
    year: '2023 — 2024',
    icon: '📚',
    current: false,
  },
  {
    id: 'jhs',
    level: '03 / JUNIOR HIGH SCHOOL',
    school: 'Atisan Integrated High School',
    degree: 'Junior High School',
    year: '2021 — 2022',
    icon: '🏫',
    current: false,
  },
  {
    id: 'elem',
    level: '04 / ELEMENTARY',
    school: 'Atisan Elementary School',
    degree: 'Elementary',
    year: '2017 — 2018',
    icon: '✏️',
    current: false,
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
    >
      ← Home
    </a>
  )
}

function EducationCard({ item, index }: { item: typeof education[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div style={{ display: 'flex', gap: '0', width: '100%' }}>
      {/* Timeline line + dot */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        marginRight: '24px', flexShrink: 0,
      }}>
        {/* Dot */}
        <div style={{
          width: '12px', height: '12px', borderRadius: '50%', flexShrink: 0,
          backgroundColor: item.current ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.2)',
          border: item.current ? '2px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.12)',
          boxShadow: item.current ? '0 0 10px rgba(255,255,255,0.3)' : 'none',
          marginTop: '22px',
          position: 'relative', zIndex: 1,
          animation: item.current ? 'dotPulse 2.5s ease-in-out infinite' : 'none',
        }} />
        {/* Vertical line */}
        {index < education.length - 1 && (
          <div style={{
            flex: 1, width: '1px', marginTop: '8px',
            backgroundColor: 'rgba(255,255,255,0.07)',
            minHeight: '40px',
          }} />
        )}
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1, padding: '22px 26px', borderRadius: '16px', marginBottom: '16px',
          border: hovered ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.07)',
          backgroundColor: hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: hovered ? 'translateX(5px)' : 'translateX(0)',
          boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.2)',
          animation: `fadeUp 0.6s ease ${0.3 + index * 0.13}s both`,
          opacity: 0, cursor: 'default',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{item.icon}</span>
            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.62rem',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
            }}>{item.level}</p>
          </div>
          {/* Year badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '4px 10px', borderRadius: '8px',
            border: item.current ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.07)',
            backgroundColor: item.current ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.02)',
          }}>
            {item.current && (
              <span style={{
                width: '5px', height: '5px', borderRadius: '50%',
                backgroundColor: 'rgba(120,255,160,0.85)',
                boxShadow: '0 0 6px rgba(120,255,160,0.5)',
                animation: 'statusPulse 2.5s ease-in-out infinite',
                flexShrink: 0,
              }} />
            )}
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.62rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: item.current ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)',
            }}>{item.year}</span>
          </div>
        </div>

        {/* School name */}
        <h3 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 700,
          color: hovered ? '#ffffff' : 'rgba(255,255,255,0.85)',
          letterSpacing: '-0.01em', marginBottom: '6px',
          transition: 'color 0.2s', lineHeight: 1.3,
        }}>{item.school}</h3>

        {/* Degree */}
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.32)', letterSpacing: '0.04em',
        }}>{item.degree}</p>
      </div>
    </div>
  )
}

function NavPill({ item }: { item: typeof navItems[0] }) {
  const [hovered, setHovered] = useState(false)
  const isActive = item.href === '/education'
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

export default function EducationPage() {
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
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 6px rgba(255,255,255,0.2); }
          50%       { box-shadow: 0 0 14px rgba(255,255,255,0.5); }
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.3); }
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
          width: '100%', maxWidth: '680px',
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
            }}>My journey</p>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', fontWeight: 800,
              color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05,
              marginBottom: '16px',
              animation: 'fadeUp 0.6s ease 0.28s both', opacity: 0,
            }}>Education</h1>
            <div style={{
              width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)',
              margin: '0 auto', animation: 'fadeUp 0.6s ease 0.38s both', opacity: 0,
            }} />
          </div>

          {/* Timeline */}
          <div style={{ width: '100%', marginBottom: '60px' }}>
            {education.map((item, i) => (
              <EducationCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Divider */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '52px',
            animation: 'fadeUp 0.5s ease 0.9s both', opacity: 0, width: '100%',
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }} />
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.65rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.2)',
            }}>{education.length} institutions</span>
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