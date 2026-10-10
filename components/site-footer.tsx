import { REF_LINK } from '@/lib/ref-link'

const tags = [
  { label: '#Beef_Casino', href: '#q7b3-s1' },
  { label: '#Beef_Casino_официальный_сайт', href: '#q7b3-s1' },
  { label: '#Beef_Casino_официальный', href: '#q7b3-s2' },
  { label: '#Beef_Casino_играть', href: '#q7b3-s4' },
  { label: '#Beef_Casino_зеркало', href: '#q7b3-s5' },
  { label: '#Биф_Казино_официальный_сайт', href: '#q7b3-s3' },
  { label: '#Биф_Казино_официальный', href: '#q7b3-s3' },
  { label: '#Биф_Казино', href: '#q7b3-s10' },
  { label: '#Биф_Казино_зеркало_рабочее', href: '#q7b3-s6' },
  { label: '#Биф_Казино_онлайн', href: '#q7b3-s8' },
  { label: '#Биф_Казино_играть', href: '#q7b3-s11' },
  { label: '#Биф_Казино_зеркало', href: '#q7b3-s12' },
]

export function SiteFooter() {
  return (
    <footer className="q7b3-footer">
      <nav className="q7b3-tags" aria-label="Теги по ключевым фразам">
        {tags.map((tag) => (
          <a href={tag.href} className="q7b3-tag" key={tag.label}>
            {tag.label}
          </a>
        ))}
      </nav>
      <div className="q7b3-footline">
        <span>© 2026 Beef Casino. 18+ Играйте ответственно.</span>
        <a href={REF_LINK}>Beef Casino официальный сайт</a>
      </div>
    </footer>
  )
}
