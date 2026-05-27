'use client'
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import React, { useEffect, useRef, useState } from 'react'

// ── Nav items (same as home) ──
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

// ── About sections data ──
const aboutSections = [
  {
    id: 'who',
    label: '01 / WHO',
    title: 'Who I Am',
    body: "I'm Jherome, a BSIT student with a genuine curiosity for how things are built — from the logic behind a well-structured algorithm to the feeling of landing on a beautifully designed interface. I care deeply about craft.",
  },
  {
    id: 'what',
    label: '02 / WHAT',
    title: 'What I Do',
    body: 'I design and develop web experiences — clean, intentional, and purpose-driven. Whether it\'s front-end work, solving backend logic, or exploring new tools, I approach every project as a chance to improve.',
  },
  {
    id: 'why',
    label: '03 / WHY',
    title: 'Why I Build',
    body: "Technology, done right, changes lives. I build because I believe small, well-made things matter. A site that loads fast, a UI that feels natural, a tool that saves someone time — that's meaningful work.",
  },
]

// ── Profile Avatar ──
function ProfileAvatar() {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        animation: 'fadeUp 0.6s ease 0.35s both',
        opacity: 0,
        marginBottom: '44px',
      }}
    >
      {/* Avatar ring */}
      <div
        style={{
          position: 'relative',
          width: '110px',
          height: '110px',
        }}
      >
        {/* Outer glow ring */}
        <div
          style={{
            position: 'absolute',
            inset: '-3px',
            borderRadius: '50%',
            background:
              'conic-gradient(from 0deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04), rgba(255,255,255,0.18))',
            animation: 'spinRing 6s linear infinite',
          }}
        />
        {/* Inner mask */}
        <div
          style={{
            position: 'absolute',
            inset: '1px',
            borderRadius: '50%',
            backgroundColor: '#0a0a0b',
            zIndex: 1,
          }}
        />
        {/* Photo or initials fallback */}
        <div
          style={{
            position: 'absolute',
            inset: '4px',
            borderRadius: '50%',
            overflow: 'hidden',
            zIndex: 2,
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {!imgError ? (
            <img
              src="/profile_pic.jpg"
              alt="Jherome"
              onError={() => setImgError(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          ) : (
            // Initials fallback
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '2rem',
                fontWeight: 800,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '-0.02em',
                userSelect: 'none',
              }}
            >
         
            </span>
          )}
        </div>
      </div>

      {/* Name + status dot */}
      <div style={{ textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.01em',
            marginBottom: '6px',
          }}
        >
          Jherome
        </h2>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: 'rgba(255,255,255,0.04)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'rgba(120,255,160,0.85)',
              boxShadow: '0 0 6px rgba(120,255,160,0.5)',
              animation: 'statusPulse 2.5s ease-in-out infinite',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Open to opportunities
          </span>
        </div>
      </div>
    </div>
  )
}

// ── Stat pill ──
function StatPill({ value, label }: { value: string; label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '18px 28px',
        borderRadius: '14px',
        border: hovered
          ? '1px solid rgba(255,255,255,0.22)'
          : '1px solid rgba(255,255,255,0.08)',
        backgroundColor: hovered
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'translateY(-4px) scale(1.03)' : 'none',
        cursor: 'default',
        minWidth: '90px',
      }}
    >
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1,
          marginBottom: '6px',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.38)',
        }}
      >
        {label}
      </span>
    </div>
  )
}

// ── About card ──
function AboutCard({
  section,
  index,
}: {
  section: (typeof aboutSections)[0]
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '28px 30px',
        borderRadius: '18px',
        border: hovered
          ? '1px solid rgba(255,255,255,0.2)'
          : '1px solid rgba(255,255,255,0.07)',
        backgroundColor: hovered
          ? 'rgba(255,255,255,0.07)'
          : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'translateY(-5px)' : 'none',
        boxShadow: hovered
          ? '0 12px 40px rgba(0,0,0,0.4)'
          : '0 2px 10px rgba(0,0,0,0.25)',
        textAlign: 'left',
        animation: `fadeUp 0.6s ease ${0.3 + index * 0.15}s both`,
        opacity: 0,
      }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        {section.label}
      </p>
      <h3
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          fontWeight: 700,
          color: hovered ? '#ffffff' : 'rgba(255,255,255,0.85)',
          marginBottom: '12px',
          transition: 'color 0.2s',
          letterSpacing: '-0.01em',
        }}
      >
        {section.title}
      </h3>
      <p
        style={{
          fontSize: '0.88rem',
          color: 'rgba(255,255,255,0.38)',
          lineHeight: 1.75,
        }}
      >
        {section.body}
      </p>
    </div>
  )
}

// ── Back home button ──
function BackButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="/home"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: "'DM Mono', monospace",
        fontSize: '0.7rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: hovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
        textDecoration: 'none',
        padding: '10px 18px',
        borderRadius: '10px',
        border: hovered
          ? '1px solid rgba(255,255,255,0.2)'
          : '1px solid rgba(255,255,255,0.07)',
        backgroundColor: hovered
          ? 'rgba(255,255,255,0.06)'
          : 'rgba(255,255,255,0.02)',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateX(-3px)' : 'none',
        animation: 'fadeUp 0.6s ease 0.1s both',
        opacity: 0,
      }}
    >
      ← Home
    </a>
  )
}

// ── Nav pill (mini nav at bottom) ──
function NavPill({ item }: { item: (typeof navItems)[0] }) {
  const [hovered, setHovered] = useState(false)
  const isActive = item.href === '/about_me'
  return (
    <a
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 14px',
        borderRadius: '10px',
        border: isActive
          ? '1px solid rgba(255,255,255,0.3)'
          : hovered
          ? '1px solid rgba(255,255,255,0.18)'
          : '1px solid rgba(255,255,255,0.06)',
        backgroundColor: isActive
          ? 'rgba(255,255,255,0.1)'
          : hovered
          ? 'rgba(255,255,255,0.07)'
          : 'rgba(255,255,255,0.02)',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        transform: hovered && !isActive ? 'translateY(-3px)' : 'none',
      }}
    >
      <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>{item.icon}</span>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.62rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: isActive
            ? 'rgba(255,255,255,0.9)'
            : hovered
            ? 'rgba(255,255,255,0.65)'
            : 'rgba(255,255,255,0.3)',
          transition: 'color 0.2s',
          whiteSpace: 'nowrap',
        }}
      >
        {item.label}
      </span>
    </a>
  )
}

// ── Main About Page ──
export default function AboutPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Same canvas animation as HomePage
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

  // Same particle seed logic as home
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

        @keyframes shimmer {
          0%   { opacity: 0.0; transform: scaleX(0); transform-origin: left; }
          50%  { opacity: 1;   transform: scaleX(1); transform-origin: left; }
          100% { opacity: 0.0; transform: scaleX(1); transform-origin: right; }
        }

        .particle {
          animation: particlePulse var(--dur, 5s) var(--delay, 0s) ease-in-out infinite,
                     subtlePan 12s ease-in-out infinite;
        }

        .divider-line {
          animation: shimmer 2.5s ease 0.8s both;
        }

        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.3); }
        }
      `}</style>

      <main
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '60px 24px 80px',
          backgroundColor: '#0a0a0b',
          overflow: 'hidden',
          fontFamily: "'Syne', sans-serif",
        }}
      >
        {/* Canvas background */}
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
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

        {/* Page content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '760px',
          }}
        >
          {/* Back button */}
          <div style={{ alignSelf: 'flex-start', marginBottom: '48px' }}>
            <BackButton />
          </div>

          {/* ── Header ── */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '52px',
              width: '100%',
            }}
          >
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '14px',
                animation: 'fadeUp 0.6s ease 0.15s both',
                opacity: 0,
              }}
            >
              Get to know me
            </p>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                marginBottom: '16px',
                animation: 'fadeUp 0.6s ease 0.28s both',
                opacity: 0,
              }}
            >
              About Me
            </h1>

            {/* Animated divider */}
            <div
              className="divider-line"
              style={{
                width: '40px',
                height: '1px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                margin: '0 auto',
                opacity: 0,
              }}
            />
          </div>

          {/* ── Profile Avatar ── */}
          <ProfileAvatar />

          {/* ── Stats row ── */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              marginBottom: '52px',
              animation: 'fadeUp 0.6s ease 0.42s both',
              opacity: 0,
            }}
          >
            <StatPill value="20" label="Age" />
            <StatPill value="2nd" label="Year" />
            <StatPill value="San Pablo" label="City" />
            <StatPill value="Atisan" label="Brgy" />
          </div>

          {/* ── About cards ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '14px',
              width: '100%',
              marginBottom: '52px',
            }}
          >
            {aboutSections.map((section, i) => (
              <AboutCard key={section.id} section={section} index={i} />
            ))}
          </div>

          {/* ── Divider ── */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.07)',
              marginBottom: '40px',
              animation: 'fadeUp 0.6s ease 0.75s both',
              opacity: 0,
            }}
          />

          {/* ── Section label ── */}
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
              marginBottom: '20px',
              animation: 'fadeUp 0.6s ease 0.85s both',
              opacity: 0,
            }}
          >
            Explore more
          </p>

          {/* ── Mini nav (same cards from home, smaller pill style) ── */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              animation: 'fadeUp 0.6s ease 0.95s both',
              opacity: 0,
            }}
          >
            {navItems.map((item) => (
              <NavPill key={item.href} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}