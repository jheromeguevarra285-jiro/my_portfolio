'use client'
import React, { useEffect, useRef, useState } from 'react'

// ── Nav items with icons ──
const navItems = [
  { label: 'About Me',      href: '/about_me',        icon: '👤' },
  { label: 'Skills',        href: '/skills',        icon: '⚡' },
  { label: 'Projects',      href: '/projects',      icon: '🗂️' },
  { label: 'Hobbies',       href: '/hobbies',       icon: '🎯' },
  { label: 'Education',     href: '/education',     icon: '🎓' },
  { label: 'Achievements',  href: '/achievements',  icon: '🏆' },
  { label: 'Resume',        href: '/resume',        icon: '📄' },
  { label: 'Gallery',       href: '/gallery',       icon: '🖼️' },
  { label: 'Contact Me',    href: '/contact',       icon: '✉️' },
]

// ── Floating particle dot ──
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '3px',
        height: '3px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.12)',
        ...style,
      }}
    />
  )
}

// ── Nav card with floating animation ──
function NavCard({
  item,
  index,
}: {
  item: (typeof navItems)[0]
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const delay = index * 0.12

  return (
    <a
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '20px 14px',
        borderRadius: '16px',
        border: hovered
          ? '1px solid rgba(255,255,255,0.25)'
          : '1px solid rgba(255,255,255,0.08)',
        backgroundColor: hovered
          ? 'rgba(255,255,255,0.1)'
          : 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'translateY(-6px) scale(1.04)' : 'translateY(0px) scale(1)',
        animation: `floatIn 0.6s ease forwards, floatBob 4s ease-in-out ${delay + 0.6}s infinite`,
        opacity: 0,
        minWidth: '90px',
        boxShadow: hovered
          ? '0 8px 32px rgba(255,255,255,0.06)'
          : '0 2px 8px rgba(0,0,0,0.3)',
      }}
    >
      <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{item.icon}</span>
      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.06em',
          color: hovered ? '#ffffff' : 'rgba(255,255,255,0.65)',
          textAlign: 'center',
          transition: 'color 0.2s',
          textTransform: 'uppercase',
          lineHeight: 1.3,
        }}
      >
        {item.label}
      </span>
    </a>
  )
}

// ── Main Page ──
export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Subtle animated canvas grid lines
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let raf: number

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      // Subtle grid
      ctx.strokeStyle = 'rgba(255,255,255,0.03)'
      ctx.lineWidth = 1
      const spacing = 60
      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Scanning horizontal line
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

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Static particle positions (seeded)
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

        @keyframes floatIn {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0px) scale(1); }
        }

        @keyframes floatBob {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

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

        .hero-eyebrow {
          animation: fadeUp 0.7s ease 0.1s both;
        }
        .hero-name {
          animation: fadeUp 0.7s ease 0.25s both;
        }
        .hero-role {
          animation: fadeUp 0.7s ease 0.4s both;
        }
        .hero-bio {
          animation: fadeUp 0.7s ease 0.55s both;
        }
        .hero-divider {
          animation: fadeUp 0.7s ease 0.65s both;
        }
        .nav-grid {
          animation: fadeUp 0.7s ease 0.75s both;
        }

        .particle {
          animation: particlePulse var(--dur, 5s) var(--delay, 0s) ease-in-out infinite,
                     subtlePan 12s ease-in-out infinite;
        }
      `}</style>

      <main
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 24px',
          backgroundColor: '#0a0a0b',
          overflow: 'hidden',
          fontFamily: "'Syne', sans-serif",
        }}
      >
        {/* Canvas background */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Radial glow center */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              top: p.top,
              left: p.left,
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              backgroundColor: 'white',
              ['--delay' as string]: p.animationDelay,
              ['--dur' as string]: p.animationDuration,
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '700px',
            width: '100%',
          }}
        >
          {/* Eyebrow */}
          <p
            className="hero-eyebrow"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '18px',
            }}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="hero-name"
            style={{
              fontSize: 'clamp(2.6rem, 7vw, 4.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '14px',
            }}
          >
            Jherome 
          </h1>

          {/* Role */}
          <h2
            className="hero-role"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.5)',
              marginBottom: '18px',
              letterSpacing: '0.05em',
            }}
          >
            BSIT Student · Aspiring Developer
          </h2>

          {/* Bio */}
          <p
            className="hero-bio"
            style={{
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.7,
              maxWidth: '400px',
              marginBottom: '40px',
            }}
          >
            I build clean, simple, and meaningful web experiences.
          </p>

          {/* Divider */}
          <div
            className="hero-divider"
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              marginBottom: '40px',
            }}
          />

          {/* Floating Nav Grid */}
          <div
            className="nav-grid"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
            }}
          >
            {navItems.map((item, i) => (
              <NavCard key={item.href} item={item} index={i} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}