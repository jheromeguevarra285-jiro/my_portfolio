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

const resumeData = {
  name: 'Jherome',
  role: 'Bachelor Of Science in Information Technology Student · Aspiring Developer',
  location: 'Brgy. Atisan, San Pablo City, Laguna',
  education: [
    {
      school: 'Pamantasan ng Lungsod ng San Pablo',
      degree: 'BS Information Technology',
      year: '2024 — Present',
      current: true,
    },
    {
      school: 'Santisimo Rosario Integrated Senior High School',
      degree: 'Senior High School',
      year: '2023 — 2024',
      current: false,
    },
    {
      school: 'Atisan Integrated High School',
      degree: 'Junior High School',
      year: '2021 — 2022',
      current: false,
    },
    {
      school: 'Atisan Elementary School',
      degree: 'Elementary',
      year: '2017 — 2018',
      current: false,
    },
  ],
  skills: [
    { name: 'Python',     level: 'Intermediate' },
    { name: 'Java',       level: 'Intermediate' },
    { name: 'HTML & CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Beginner'     },
    { name: 'C / C++',    level: 'Beginner'     },
    { name: 'SQL',        level: 'Beginner'     },
  ],
  achievements: [
    { title: 'With Honor',       org: 'Atisan Integrated High School',                    year: '2022' },
    { title: 'With High Honor',  org: 'Santisimo Rosario Integrated SHS',                 year: '2024' },
    { title: 'Best in Research', org: 'Santisimo Rosario Integrated SHS',                 year: '2024' },
  ],
  hobbies: ['Watching Anime', 'Online Gaming', 'Sports & Chess', 'Listening to Music'],
}

function ProfilePhoto() {
  const [imgError, setImgError] = useState(false)
  return (
    <div style={{ position: 'relative', flexShrink: 0, width: '86px', height: '86px' }}>
      {/* Spinning ring */}
      <div style={{
        position: 'absolute', inset: '-2px', borderRadius: '50%',
        background: 'conic-gradient(from 0deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04), rgba(255,255,255,0.18))',
        animation: 'spinRing 6s linear infinite',
      }} />
      <div style={{
        position: 'absolute', inset: '1px', borderRadius: '50%',
        backgroundColor: '#0a0a0b', zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', inset: '4px', zIndex: 2,
        borderRadius: '50%', overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        backgroundColor: 'rgba(255,255,255,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {!imgError ? (
          <img
            src="/profile_pic.jpg"
            alt="Jherome"
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
        ) : (
          <span style={{
            fontFamily: "'Syne', sans-serif", fontSize: '1.8rem',
            fontWeight: 800, color: 'rgba(255,255,255,0.5)',
          }}>J</span>
        )}
      </div>
    </div>
  )
}

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'DM Mono', monospace", fontSize: '0.62rem',
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.28)', marginBottom: '14px',
      paddingBottom: '10px',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>{children}</p>
  )
}

function DownloadButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="/resume.pdf"
      download
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontFamily: "'DM Mono', monospace", fontSize: '0.7rem',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: hovered ? '#ffffff' : 'rgba(255,255,255,0.6)',
        textDecoration: 'none', padding: '12px 22px', borderRadius: '12px',
        border: hovered ? '1px solid rgba(255,255,255,0.35)' : '1px solid rgba(255,255,255,0.15)',
        backgroundColor: hovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.4)' : 'none',
        animation: 'fadeUp 0.6s ease 0.5s both', opacity: 0,
        cursor: 'pointer',
      }}
    >
      <span style={{ fontSize: '1rem' }}>⬇</span>
      Download PDF
    </a>
  )
}

function NavPill({ item }: { item: typeof navItems[0] }) {
  const [hovered, setHovered] = useState(false)
  const isActive = item.href === '/resume'
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

export default function ResumePage() {
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
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
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
          width: '100%', maxWidth: '720px',
        }}>

          {/* Top bar: back + download */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            width: '100%', marginBottom: '48px', flexWrap: 'wrap', gap: '12px',
          }}>
            <BackButton />
            <DownloadButton />
          </div>

          {/* Page header */}
          <div style={{ textAlign: 'center', marginBottom: '52px', width: '100%' }}>
            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.72rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)', marginBottom: '14px',
              animation: 'fadeUp 0.6s ease 0.15s both', opacity: 0,
            }}>Curriculum Vitae</p>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', fontWeight: 800,
              color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05,
              marginBottom: '16px',
              animation: 'fadeUp 0.6s ease 0.28s both', opacity: 0,
            }}>Resume</h1>
            <div style={{
              width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)',
              margin: '0 auto', animation: 'fadeUp 0.6s ease 0.38s both', opacity: 0,
            }} />
          </div>

          {/* ── Resume Card ── */}
          <div style={{
            width: '100%', borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.09)',
            backgroundColor: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            overflow: 'hidden',
            animation: 'fadeUp 0.6s ease 0.45s both', opacity: 0,
            marginBottom: '52px',
          }}>

            {/* ── Identity header inside card ── */}
            <div style={{
              padding: '36px 36px 28px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.02)',
              display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap',
            }}>
              {/* Profile photo */}
              <ProfilePhoto />

              {/* Text info */}
              <div style={{ flex: 1, minWidth: '180px' }}>
                <h2 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800,
                  color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '8px',
                }}>{resumeData.name}</h2>
                <p style={{
                  fontFamily: "'DM Mono', monospace", fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em',
                  marginBottom: '14px',
                }}>{resumeData.role}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.85rem' }}>📍</span>
                  <span style={{
                    fontFamily: "'DM Mono', monospace", fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em',
                  }}>{resumeData.location}</span>
                </div>
              </div>
            </div>

            {/* ── Body: two-column on wide, stacked on mobile ── */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0',
            }}>

              {/* Left col */}
              <div style={{ padding: '28px 36px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>

                {/* Skills */}
                <div style={{ marginBottom: '32px' }}>
                  <SectionLabel>Skills</SectionLabel>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {resumeData.skills.map((s) => (
                      <div key={s.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{
                          fontFamily: "'Syne', sans-serif", fontSize: '0.88rem',
                          fontWeight: 600, color: 'rgba(255,255,255,0.75)',
                        }}>{s.name}</span>
                        <span style={{
                          fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.28)',
                          padding: '2px 8px', borderRadius: '5px',
                          border: '1px solid rgba(255,255,255,0.07)',
                          backgroundColor: 'rgba(255,255,255,0.03)',
                        }}>{s.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hobbies */}
                <div>
                  <SectionLabel>Interests</SectionLabel>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {resumeData.hobbies.map((h) => (
                      <span key={h} style={{
                        fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.35)',
                        padding: '4px 10px', borderRadius: '6px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backgroundColor: 'rgba(255,255,255,0.02)',
                      }}>{h}</span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right col */}
              <div style={{ padding: '28px 36px' }}>

                {/* Education */}
                <div style={{ marginBottom: '32px' }}>
                  <SectionLabel>Education</SectionLabel>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {resumeData.education.map((e, i) => (
                      <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        {/* dot */}
                        <div style={{
                          width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0,
                          marginTop: '5px',
                          backgroundColor: e.current ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)',
                          boxShadow: e.current ? '0 0 8px rgba(255,255,255,0.3)' : 'none',
                        }} />
                        <div>
                          <p style={{
                            fontFamily: "'Syne', sans-serif", fontSize: '0.88rem',
                            fontWeight: 700, color: 'rgba(255,255,255,0.8)',
                            marginBottom: '2px', lineHeight: 1.3,
                          }}>{e.school}</p>
                          <p style={{
                            fontFamily: "'DM Mono', monospace", fontSize: '0.65rem',
                            color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em',
                          }}>{e.degree} · {e.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <SectionLabel>Achievements</SectionLabel>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {resumeData.achievements.map((a, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                        <div>
                          <p style={{
                            fontFamily: "'Syne', sans-serif", fontSize: '0.88rem',
                            fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: '2px',
                          }}>{a.title}</p>
                          <p style={{
                            fontFamily: "'DM Mono', monospace", fontSize: '0.63rem',
                            color: 'rgba(255,255,255,0.28)', letterSpacing: '0.04em',
                            lineHeight: 1.4,
                          }}>{a.org}</p>
                        </div>
                        <span style={{
                          fontFamily: "'DM Mono', monospace", fontSize: '0.62rem',
                          color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em',
                          padding: '3px 8px', borderRadius: '6px',
                          border: '1px solid rgba(255,255,255,0.07)',
                          backgroundColor: 'rgba(255,255,255,0.02)',
                          whiteSpace: 'nowrap', flexShrink: 0,
                        }}>{a.year}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Card footer */}
            <div style={{
              padding: '16px 36px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '8px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  backgroundColor: 'rgba(120,255,160,0.85)',
                  boxShadow: '0 0 6px rgba(120,255,160,0.5)',
                  animation: 'statusPulse 2.5s ease-in-out infinite',
                  display: 'inline-block',
                }} />
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                }}>Open to opportunities</span>
              </div>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
                letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)',
              }}>2025</span>
            </div>
          </div>

          {/* Explore more */}
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