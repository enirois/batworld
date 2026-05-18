import { useEffect, useState } from 'react'

const bats = ['🦇', '🦇', '🦇', '🦇', '🦇', '🦇', '🦇', '🦇']

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 0%, #2d1b3d 0%, #0a0609 60%)',
      padding: '2rem',
      textAlign: 'center',
    }}>

      {/* Fondo con patrón */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(192,132,252,0.05) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(232,121,249,0.05) 0%, transparent 40%)`,
        pointerEvents: 'none',
      }} />

      {/* Murciélagos animados */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        display: 'flex', justifyContent: 'space-around',
        fontSize: '1.5rem', opacity: 0.3,
        animation: 'float 6s ease-in-out infinite',
      }}>
        {bats.map((b, i) => (
          <span key={i} style={{
            animationDelay: `${i * 0.4}s`,
            display: 'inline-block',
            animation: `sway ${3 + i * 0.3}s ease-in-out infinite alternate`,
          }}>{b}</span>
        ))}
      </div>

      <style>{`
        @keyframes sway {
          from { transform: translateY(0px) rotate(-10deg); }
          to   { transform: translateY(20px) rotate(10deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Contenido principal */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 1s ease',
        zIndex: 1,
      }}>
        <div style={{
          fontSize: '5rem',
          marginBottom: '1rem',
          filter: 'drop-shadow(0 0 30px rgba(192,132,252,0.5))',
        }}>🦇</div>

        <h1 style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: 'clamp(2rem, 6vw, 4.5rem)',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #c084fc, #e879f9, #d4a853)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          letterSpacing: '0.02em',
        }}>
          BatWorld
        </h1>

        <p style={{
          fontFamily: "'Crimson Text', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          color: 'var(--muted)',
          maxWidth: '600px',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          Los únicos mamíferos capaces de volar. Guardianes de la noche, 
          polinizadores silenciosos y controladores naturales de insectos.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#facts" style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            color: '#fff',
            textDecoration: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
            boxShadow: '0 0 30px rgba(192,132,252,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          >
            Explorar
          </a>
          <a href="#species" style={{
            border: '1px solid var(--border)',
            color: 'var(--accent)',
            textDecoration: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
            transition: 'all 0.2s',
            backdropFilter: 'blur(10px)',
          }}
            onMouseEnter={e => { e.target.style.background = 'rgba(192,132,252,0.1)' }}
            onMouseLeave={e => { e.target.style.background = 'transparent' }}
          >
            Especies
          </a>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '1px', height: '80px',
        background: 'linear-gradient(to bottom, var(--accent), transparent)',
      }} />
    </section>
  )
}