import {
  ChevronRight,
  Compass,
  Crown,
  Dices,
  Gamepad2,
  Gift,
  Rocket,
  Star,
  Trophy,
  Tv,
  Wallet,
  Zap,
} from 'lucide-react'
import { REF_LINK } from '@/lib/ref-link'

const promos = [
  { label: 'Рефералка', icon: Gift },
  { label: 'Рейкбек', icon: Wallet },
  { label: 'Promohub', icon: Zap },
  { label: 'Турниры', icon: Trophy },
  { label: 'Акции', icon: Crown },
]

const tabs = [
  { label: 'Лобби', icon: Compass, active: true },
  { label: 'Слоты', icon: Gamepad2, active: false },
  { label: 'Live-казино', icon: Tv, active: false },
  { label: 'Bonus Buy', icon: Gift, active: false },
  { label: 'Instant Games', icon: Zap, active: false },
  { label: 'Настольные', icon: Dices, active: false },
  { label: 'Только новые', icon: Star, active: false },
]

const games = [
  { name: 'Gates of Olympus', src: '/images/cover-olympus.jpg', alt: 'Слот Gates of Olympus с богом грома' },
  { name: 'Le Pharaoh', src: '/images/cover-pharaoh.jpg', alt: 'Слот Le Pharaoh с котом-фараоном' },
  { name: 'Ultimate Hot', src: '/images/cover-hot7.jpg', alt: 'Слот Ultimate Hot с красной семёркой' },
  { name: 'Sugar Rush', src: '/images/cover-sugar.jpg', alt: 'Слот Sugar Rush со сладостями' },
  { name: 'Bat Trident', src: '/images/cover-bat.jpg', alt: 'Слот Bat Trident с летучей мышью' },
  { name: 'Coin Hot Fire', src: '/images/cover-coins.jpg', alt: 'Слот Coin Hot Fire с золотыми монетами' },
]

export function CasinoHero() {
  return (
    <section className="q7b3-hero" aria-label="Главный экран Beef Casino">
      <div className="q7b3-banner">
        <img src="/images/banner-queen.jpg" alt="Королева Beef Casino с подарочным набором" fetchPriority="high" />
        <div className="q7b3-bannerfade" aria-hidden="true"></div>
        <div className="q7b3-bannerbody">
          <h1>
            <span className="sr-only">Beef Casino — официальный сайт: </span>
            <span className="q7b3-pill">Welcome package</span>
            <span className="q7b3-bignum">250% + 600 FS</span>
          </h1>
          <a href={REF_LINK} className="q7b3-get">
            Получить
          </a>
        </div>
      </div>

      <div className="q7b3-circles" role="list" aria-label="Акции и разделы">
        {promos.map((promo) => (
          <a href={REF_LINK} className="q7b3-circle" role="listitem" key={promo.label}>
            <span className="q7b3-circledisc">
              <promo.icon size={28} />
            </span>
            <span>{promo.label}</span>
          </a>
        ))}
      </div>

      <nav className="q7b3-tabs" aria-label="Категории игр">
        {tabs.map((tab) => (
          <a href={REF_LINK} className={tab.active ? 'q7b3-tab q7b3-tab--on' : 'q7b3-tab'} key={tab.label}>
            <tab.icon size={16} />
            {tab.label}
          </a>
        ))}
      </nav>

      <div className="q7b3-pophead">
        <Rocket size={20} />
        <h2>Популярные</h2>
        <a href={REF_LINK} className="q7b3-showall">
          Показать все
          <ChevronRight size={14} />
        </a>
      </div>

      <div className="q7b3-games">
        {games.map((game) => (
          <a href={REF_LINK} className="q7b3-game" key={game.name}>
            <img src={game.src} alt={game.alt} loading="lazy" />
            <span>{game.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
