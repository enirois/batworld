export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '4rem 2rem 3rem',
      borderTop: '1px solid var(--border)',
      position: 'relative',
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🦇</div>
      <p style={{
        fontFamily: "'Cinzel Decorative', serif",
        fontSize: '1.2rem',
        color: 'var(--accent)',
        marginBottom: '0.5rem',
      }}>BatWorld</p>
      <p style={{
        color: 'var(--muted)',
        fontStyle: 'italic',
        fontSize: '0.95rem',
      }}>
        Guardianes de la oscuridad, héroes del ecosistema.
      </p>
      <p style={{
        marginTop: '2rem',
        color: 'var(--muted)',
        fontSize: '0.8rem',
        letterSpacing: '0.1em',
      }}>
        © 2025 BATWORLD — PROYECTO EDUCATIVO
      </p>
    </footer>
  )
}