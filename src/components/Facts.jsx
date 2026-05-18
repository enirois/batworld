import { useState } from 'react'

const facts = [
  {
    icon: '👁️',
    titulo: 'No son ciegos',
    texto: 'Contrario al mito popular, los murciélagos pueden ver perfectamente. Muchas especies también usan ecolocalización para navegar en total oscuridad.',
  },
  {
    icon: '🌸',
    titulo: 'Polinizadores clave',
    texto: 'Más de 500 especies de plantas dependen de los murciélagos para su polinización, incluyendo el agave, del cual se produce el tequila.',
  },
  {
    icon: '🦟',
    titulo: 'Control de plagas',
    texto: 'Un solo murciélago puede comer hasta 1,000 mosquitos en una hora. Son uno de los controladores de insectos más eficaces de la naturaleza.',
  },
  {
    icon: '💤',
    titulo: 'Hibernación',
    texto: 'En climas fríos, los murciélagos hibernan durante meses. Su ritmo cardíaco puede bajar de 400 a solo 25 latidos por minuto.',
  },
  {
    icon: '📡',
    titulo: 'Ecolocalización',
    texto: 'Emiten ultrasonidos de hasta 120 dB y analizan el eco para detectar objetos de menos de 1 mm con precisión milimétrica.',
  },
  {
    icon: '🌍',
    titulo: 'Gran diversidad',
    texto: 'Existen más de 1,400 especies de murciélagos, representando el 20% de todas las especies de mamíferos conocidas en el planeta.',
  },
]

export default function Facts() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="facts" style={{
      padding: '6rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
        }}>Datos fascinantes</span>
        <h2 style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          marginTop: '0.75rem',
          color: 'var(--text)',
        }}>Lo que no sabías</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        {facts.map((f, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i
                ? 'linear-gradient(135deg, rgba(192,132,252,0.1), rgba(232,121,249,0.05))'
                : 'var(--surface)',
              border: `1px solid ${hovered === i ? 'rgba(192,132,252,0.4)' : 'var(--border)'}`,
              borderRadius: '16px',
              padding: '2rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hovered === i ? '0 20px 40px rgba(192,132,252,0.15)' : 'none',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
            <h3 style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: '1rem',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
              letterSpacing: '0.02em',
            }}>{f.titulo}</h3>
            <p style={{
              color: 'var(--muted)',
              lineHeight: 1.8,
              fontSize: '1rem',
            }}>{f.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}