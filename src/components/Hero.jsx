import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      position: 'relative',
      overflow: 'hidden',
      background: '#0a0609',
    }}>

      <style>{`
        @keyframes floatBat {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-18px) rotate(5deg); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(192,132,252,0.4) !important; }
        .hero-btn-secondary:hover { background: rgba(192,132,252,0.1) !important; border-color: rgba(192,132,252,0.5) !important; }
        .hero-btn-primary, .hero-btn-secondary { transition: all 0.25s ease; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
          .hero-content { padding: 6rem 2rem 4rem !important; }
        }
      `}</style>

      {/* Panel izquierdo — contenido */}
      <div
        className="hero-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '6rem 3rem 4rem 5rem',
          position: 'relative',
          zIndex: 2,
          opacity: visible ? 1 : 0,
          animation: visible ? 'fadeLeft 0.9s ease forwards' : 'none',
        }}
      >
        {/* Etiqueta superior */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(192,132,252,0.1)',
          border: '1px solid rgba(192,132,252,0.25)',
          borderRadius: '50px',
          padding: '6px 16px',
          marginBottom: '2rem',
          width: 'fit-content',
        }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c084fc', fontFamily: "'Cinzel Decorative', serif" }}>
            ORDEN CHIROPTERA
          </span>
        </div>

        {/* Título */}
        <h1 style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          color: '#e8ddf0',
          lineHeight: 1.15,
          marginBottom: '0.5rem',
          letterSpacing: '-0.01em',
        }}>
          Bat
          <span style={{
            background: 'linear-gradient(135deg, #c084fc, #e879f9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>World</span>
        </h1>

        {/* Subtítulo decorativo */}
        <p style={{
          fontFamily: "'Crimson Text', serif",
          fontStyle: 'italic',
          fontSize: '1.1rem',
          color: '#9d8aad',
          marginBottom: '1.5rem',
          letterSpacing: '0.02em',
        }}>
          Los únicos mamíferos que dominan el vuelo
        </p>

        {/* Descripción */}
        <p style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: '1.15rem',
          color: '#b8a8c8',
          lineHeight: 1.85,
          marginBottom: '2.5rem',
          maxWidth: '420px',
        }}>
          Guardianes silenciosos de los ecosistemas nocturnos. 
          Polinizadores, cazadores de insectos y maestros de la ecolocalización.
        </p>

        {/* Stats rápidos */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          {[
            { num: '+1400', label: 'especies' },
            { num: '20%', label: 'de mamíferos' },
            { num: '500+', label: 'plantas dependientes' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: '1.3rem',
                color: '#c084fc',
                marginBottom: '2px',
              }}>{s.num}</div>
              <div style={{
                fontSize: '0.75rem',
                color: '#9d8aad',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Botones */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#facts" className="hero-btn-primary" style={{
            background: 'linear-gradient(135deg, #c084fc, #e879f9)',
            color: '#fff',
            textDecoration: 'none',
            padding: '0.7rem 1.8rem',
            borderRadius: '50px',
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            boxShadow: '0 4px 20px rgba(192,132,252,0.3)',
          }}>
            Descubrir
          </a>
          <a href="#species" className="hero-btn-secondary" style={{
            border: '1px solid rgba(192,132,252,0.25)',
            color: '#c084fc',
            textDecoration: 'none',
            padding: '0.7rem 1.8rem',
            borderRadius: '50px',
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            background: 'transparent',
          }}>
            Ver especies
          </a>
        </div>
      </div>

      {/* Panel derecho — visual */}
      <div
        className="hero-visual"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at center, #2d1b3d 0%, #0a0609 70%)',
          opacity: visible ? 1 : 0,
          animation: visible ? 'fadeRight 0.9s ease forwards' : 'none',
        }}
      >
        {/* Círculos decorativos */}
        <div style={{
          position: 'absolute',
          width: '350px', height: '350px',
          borderRadius: '50%',
          border: '1px solid rgba(192,132,252,0.1)',
        }} />
        <div style={{
          position: 'absolute',
          width: '250px', height: '250px',
          borderRadius: '50%',
          border: '1px solid rgba(192,132,252,0.15)',
        }} />
        <div style={{
          position: 'absolute',
          width: '150px', height: '150px',
          borderRadius: '50%',
          border: '1px solid rgba(192,132,252,0.2)',
        }} />

        {/* Murciélago central */}
        <div style={{
          fontSize: '9rem',
          animation: 'floatBat 4s ease-in-out infinite',
          filter: 'drop-shadow(0 0 40px rgba(192,132,252,0.4))',
          zIndex: 1,
          lineHeight: 1,
        }}>
          🦇
        </div>

        {/* Murciélagos pequeños orbitando */}
        {[
          { top: '20%', left: '15%', size: '2rem', delay: '0s' },
          { top: '65%', left: '10%', size: '1.5rem', delay: '1s' },
          { top: '25%', right: '12%', size: '1.8rem', delay: '0.5s' },
          { top: '70%', right: '15%', size: '1.3rem', delay: '1.5s' },
        ].map((b, i) => (
          <span key={i} style={{
            position: 'absolute',
            fontSize: b.size,
            top: b.top,
            left: b.left,
            right: b.right,
            animation: `floatBat ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: b.delay,
            opacity: 0.5,
            filter: 'drop-shadow(0 0 8px rgba(192,132,252,0.3))',
          }}>🦇</span>
        ))}

        {/* Línea divisoria izquierda */}
        <div style={{
          position: 'absolute',
          left: 0, top: '10%', bottom: '10%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(192,132,252,0.2), transparent)',
        }} />
      </div>

      {/* Indicador scroll */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        opacity: 0.5,
        animation: 'shimmer 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#9d8aad', fontFamily: "'Cinzel Decorative', serif" }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #c084fc, transparent)' }} />
      </div>
    </section>
  )
}