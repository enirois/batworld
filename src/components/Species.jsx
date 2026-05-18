import { useState } from 'react'

const base = import.meta.env.BASE_URL

const species = [
  {
    nombre: 'Murciélago vampiro común',
    cientifico: 'Desmodus rotundus',
    habitat: 'América Central y Sur',
    dieta: 'Sangre (hematófago)',
    curiosidad: 'El único mamífero que se alimenta exclusivamente de sangre. Comparte alimento con compañeros hambrientos.',
    emoji: '🩸',
    color: '#dc2626',
    imagen: `${base}images/species/vampiro.jpg`,
  },
  {
    nombre: 'Zorro volador gigante',
    cientifico: 'Pteropus vampyrus',
    habitat: 'Sudeste Asiático',
    dieta: 'Frutas y néctar',
    curiosidad: 'Con una envergadura de hasta 1.5 metros, es el murciélago más grande del mundo.',
    emoji: '🌴',
    color: '#d4a853',
    imagen: `${base}images/species/zorro-volador.jpg`,
  },
  {
    nombre: 'Murciélago orejudo',
    cientifico: 'Plecotus auritus',
    habitat: 'Europa y Asia',
    dieta: 'Polillas e insectos',
    curiosidad: 'Sus orejas pueden ser tan largas como su cuerpo. Las dobla bajo las alas al hibernar.',
    emoji: '👂',
    color: '#c084fc',
    imagen: `${base}images/species/orejudo.jpg`,
  },
  {
    nombre: 'Murciélago pescador',
    cientifico: 'Noctilio leporinus',
    habitat: 'América Tropical',
    dieta: 'Peces y crustáceos',
    curiosidad: 'Usa ecolocalización para detectar ondas en el agua y atrapa peces con sus grandes garras.',
    emoji: '🐟',
    color: '#22d3ee',
    imagen: `${base}images/species/pescador.jpg`,
  },
]

function ImagenEspecie({ src, alt, color, emoji }) {
  const [error, setError] = useState(false)
  const [cargando, setCargando] = useState(true)

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: '250px',
      background: `linear-gradient(135deg, ${color}22, ${color}44)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {error ? (
        <span style={{ fontSize: '5rem' }}>{emoji}</span>
      ) : (
        <>
          {cargando && (
            <span style={{
              position: 'absolute',
              fontSize: '3rem',
              opacity: 0.4,
              animation: 'pulse 1.5s ease-in-out infinite',
            }}>{emoji}</span>
          )}
          <img
            src={src}
            alt={alt}
            onLoad={() => setCargando(false)}
            onError={() => { setError(true); setCargando(false) }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: cargando ? 0 : 1,
              transition: 'opacity 0.5s ease',
              position: 'absolute',
              inset: 0,
            }}
          />
          {!cargando && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(to right, ${color}33, transparent)`,
              pointerEvents: 'none',
            }} />
          )}
        </>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
      `}</style>
    </div>
  )
}

export default function Species() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="species" style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, transparent, var(--surface) 20%, var(--surface) 80%, transparent)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
          }}>Biodiversidad</span>
          <h2 style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginTop: '0.75rem',
            color: 'var(--text)',
          }}>Especies destacadas</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {species.map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
                background: 'var(--surface2)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: `1px solid ${hovered === i ? s.color + '66' : 'var(--border)'}`,
                transition: 'border-color 0.3s, box-shadow 0.3s',
                boxShadow: hovered === i ? `0 20px 40px ${s.color}22` : 'none',
              }}
            >
              {i % 2 === 0 && (
                <ImagenEspecie
                  src={s.imagen}
                  alt={s.nombre}
                  color={s.color}
                  emoji={s.emoji}
                />
              )}

              <div style={{ padding: '2.5rem' }}>
                <div style={{
                  fontFamily: "'Crimson Text', serif",
                  fontStyle: 'italic',
                  color: s.color,
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem',
                }}>{s.cientifico}</div>

                <h3 style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: '1.1rem',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                }}>{s.nombre}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: 'Hábitat', value: s.habitat, icon: '📍' },
                    { label: 'Dieta', value: s.dieta, icon: '🍽️' },
                  ].map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span>{item.icon}</span>
                      <span style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
                        <strong style={{ color: 'var(--text)' }}>{item.label}:</strong> {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <p style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  borderLeft: `2px solid ${s.color}`,
                  paddingLeft: '1rem',
                }}>{s.curiosidad}</p>
              </div>

              {i % 2 !== 0 && (
                <ImagenEspecie
                  src={s.imagen}
                  alt={s.nombre}
                  color={s.color}
                  emoji={s.emoji}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}