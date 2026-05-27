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

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'jheromeguevarra285@gmail.com',
    href: 'mailto:jheromeguevarra285@gmail.com',
    icon: '✉️',
    color: 'rgba(120,180,255,0.6)',
    glow:  'rgba(80,140,255,0.08)',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    value: 'facebook.com/yourprofile',
    href: 'https://facebook.com/yourprofile',
    icon: '📘',
    color: 'rgba(100,160,255,0.6)',
    glow:  'rgba(60,120,255,0.08)',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
    icon: '🐙',
    color: 'rgba(200,200,200,0.6)',
    glow:  'rgba(160,160,160,0.08)',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
    icon: '💼',
    color: 'rgba(100,200,255,0.6)',
    glow:  'rgba(60,160,255,0.08)',
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

function ContactCard({ item, index }: { item: typeof contactLinks[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', gap: '20px',
        padding: '24px 28px', borderRadius: '18px',
        border: hovered
          ? `1px solid ${item.color.replace('0.6','0.35')}`
          : '1px solid rgba(255,255,255,0.08)',
        backgroundColor: hovered ? item.glow : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        textDecoration: 'none',
        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'translateX(8px)' : 'translateX(0)',
        boxShadow: hovered
          ? `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${item.color.replace('0.6','0.1')}`
          : '0 2px 10px rgba(0,0,0,0.25)',
        animation: `fadeUp 0.6s ease ${0.3 + index * 0.1}s both`,
        opacity: 0, cursor: 'pointer',
      }}
    >
      {/* Corner glow */}
      <div style={{
        position: 'absolute', top: '-30px', right: '-30px',
        width: '100px', height: '100px', borderRadius: '50%',
        background: `radial-gradient(circle, ${item.color.replace('0.6','0.14')} 0%, transparent 70%)`,
        pointerEvents: 'none', opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }} />

      {/* Icon */}
      <div style={{
        width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: hovered
          ? `1px solid ${item.color.replace('0.6','0.3')}`
          : '1px solid rgba(255,255,255,0.08)',
        backgroundColor: hovered ? item.color.replace('0.6','0.1') : 'rgba(255,255,255,0.03)',
        transition: 'all 0.3s',
        fontSize: '1.4rem',
      }}>
        <span style={{
          filter: hovered ? 'drop-shadow(0 0 6px rgba(255,255,255,0.3))' : 'none',
          transition: 'filter 0.3s',
        }}>{item.icon}</span>
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '0.62rem',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.28)', marginBottom: '4px',
        }}>{item.label}</p>
        <p style={{
          fontFamily: "'Syne', sans-serif", fontSize: '0.95rem',
          fontWeight: 600,
          color: hovered ? '#ffffff' : 'rgba(255,255,255,0.7)',
          transition: 'color 0.2s',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{item.value}</p>
      </div>

      {/* Arrow */}
      <span style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '1.1rem', flexShrink: 0,
        color: hovered ? item.color : 'rgba(255,255,255,0.15)',
        transition: 'all 0.3s',
        transform: hovered ? 'translateX(4px)' : 'none',
      }}>→</span>
    </a>
  )
}

// ── Contact form ──
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Replace this with your actual form submission logic (e.g. EmailJS, Formspree)
    setTimeout(() => setStatus('sent'), 1500)
  }

  const inputStyle = (focused: boolean): React.CSSProperties => ({
    width: '100%', padding: '14px 16px', borderRadius: '12px',
    border: focused ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(255,255,255,0.08)',
    backgroundColor: focused ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
    color: '#ffffff', outline: 'none',
    fontFamily: "'Syne', sans-serif", fontSize: '0.9rem',
    transition: 'all 0.25s ease',
    backdropFilter: 'blur(8px)',
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <div style={{
      width: '100%', padding: '32px', borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.08)',
      backgroundColor: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      animation: 'fadeUp 0.6s ease 0.7s both', opacity: 0,
    }}>
      <p style={{
        fontFamily: "'DM Mono', monospace", fontSize: '0.62rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.28)', marginBottom: '20px',
        paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>Send a message</p>

      {status === 'sent' ? (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '12px', padding: '32px 0',
        }}>
          <span style={{ fontSize: '2.5rem' }}>✅</span>
          <p style={{
            fontFamily: "'Syne', sans-serif", fontSize: '1rem',
            fontWeight: 700, color: 'rgba(255,255,255,0.85)',
          }}>Message sent!</p>
          <p style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em',
          }}>I'll get back to you soon.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Name */}
          <div>
            <label style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '6px',
            }}>Name</label>
            <input
              name="name" type="text" placeholder="Your name"
              value={form.name} onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              style={{
                ...inputStyle(focusedField === 'name'),
                caretColor: 'white',
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '6px',
            }}>Email</label>
            <input
              name="email" type="email" placeholder="your@email.com"
              value={form.email} onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              style={{
                ...inputStyle(focusedField === 'email'),
                caretColor: 'white',
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '6px',
            }}>Message</label>
            <textarea
              name="message" rows={4} placeholder="Write your message here..."
              value={form.message} onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              style={{
                ...inputStyle(focusedField === 'message'),
                resize: 'none', caretColor: 'white',
              }}
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === 'sending'}
            style={{
              marginTop: '6px', padding: '14px 24px', borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.2)',
              backgroundColor: status === 'sending' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.08)',
              color: status === 'sending' ? 'rgba(255,255,255,0.4)' : '#ffffff',
              fontFamily: "'DM Mono', monospace", fontSize: '0.72rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              if (status !== 'sending') {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.14)'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
              }
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.08)'
              ;(e.currentTarget as HTMLButtonElement).style.transform = 'none'
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>
        </div>
      )}
    </div>
  )
}

function NavPill({ item }: { item: typeof navItems[0] }) {
  const [hovered, setHovered] = useState(false)
  const isActive = item.href === '/contact'
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

export default function ContactPage() {
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
        @keyframes statusPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.3); }
        }
        .particle {
          animation: particlePulse var(--dur, 5s) var(--delay, 0s) ease-in-out infinite,
                     subtlePan 12s ease-in-out infinite;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.2);
          font-family: 'DM Mono', monospace;
          font-size: 0.82rem;
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
          <div style={{ textAlign: 'center', marginBottom: '52px', width: '100%' }}>
            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.72rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)', marginBottom: '14px',
              animation: 'fadeUp 0.6s ease 0.15s both', opacity: 0,
            }}>Let's connect</p>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', fontWeight: 800,
              color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05,
              marginBottom: '16px',
              animation: 'fadeUp 0.6s ease 0.28s both', opacity: 0,
            }}>Contact Me</h1>
            <div style={{
              width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)',
              margin: '0 auto 20px',
              animation: 'fadeUp 0.6s ease 0.38s both', opacity: 0,
            }} />
            <p style={{
              fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)',
              lineHeight: 1.7, maxWidth: '380px', margin: '0 auto',
              animation: 'fadeUp 0.6s ease 0.45s both', opacity: 0,
            }}>
              Feel free to reach out — whether it's about a project, an opportunity, or just to say hi. I'm always open to connecting.
            </p>
          </div>

          {/* Status badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 18px', borderRadius: '20px',
            border: '1px solid rgba(120,255,160,0.2)',
            backgroundColor: 'rgba(120,255,160,0.05)',
            marginBottom: '44px',
            animation: 'fadeUp 0.6s ease 0.5s both', opacity: 0,
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              backgroundColor: 'rgba(120,255,160,0.85)',
              boxShadow: '0 0 8px rgba(120,255,160,0.5)',
              animation: 'statusPulse 2.5s ease-in-out infinite',
              display: 'inline-block', flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.65rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(120,255,160,0.75)',
            }}>Available · Open to opportunities</span>
          </div>

          {/* Contact links */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '12px',
            width: '100%', marginBottom: '36px',
          }}>
            {contactLinks.map((item, i) => (
              <ContactCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Divider */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            width: '100%', marginBottom: '28px',
            animation: 'fadeUp 0.6s ease 0.65s both', opacity: 0,
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }} />
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.2)',
            }}>or send a message</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }} />
          </div>

          {/* Contact form */}
          <div style={{ width: '100%', marginBottom: '60px' }}>
            <ContactForm />
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