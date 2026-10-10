import {
  Boxes,
  ChevronDown,
  Crown,
  Dices,
  Disc3,
  Gamepad2,
  Gift,
  Megaphone,
  Palette,
  Sparkles,
  Tv,
  X,
  Zap,
} from 'lucide-react'
import { REF_LINK } from '@/lib/ref-link'

export function SiteRail() {
  return (
    <>
      <nav id="q7b3-menu" className="q7b3-rail" aria-label="Главное меню казино">
        <a href="#!" className="q7b3-railclose" aria-label="Закрыть меню">
          <X size={18} />
        </a>
        <a href={REF_LINK} className="q7b3-railitem">
          <Disc3 size={18} />
          Колесо Фортуны
        </a>
        <a href={REF_LINK} className="q7b3-railitem q7b3-railitem--drop">
          <Sparkles size={18} />
          Prize Drops
        </a>
        <a href={REF_LINK} className="q7b3-railitem">
          <Gift size={18} />
          Бонусы
        </a>
        <a href={REF_LINK} className="q7b3-railitem">
          <Megaphone size={18} />
          Промо
        </a>
        <a href={REF_LINK} className="q7b3-railitem">
          <Crown size={18} />
          VIP Club
        </a>
        <a href={REF_LINK} className="q7b3-railhead">
          Казино
          <ChevronDown size={16} />
        </a>
        <div className="q7b3-railsub">
          <a href={REF_LINK} className="q7b3-railitem">
            <Gamepad2 size={16} />
            Слоты
          </a>
          <a href={REF_LINK} className="q7b3-railitem">
            <Tv size={16} />
            Live-казино
          </a>
          <a href={REF_LINK} className="q7b3-railitem">
            <Gift size={16} />
            Bonus Buy
          </a>
          <a href={REF_LINK} className="q7b3-railitem">
            <Zap size={16} />
            Instant Games
          </a>
          <a href={REF_LINK} className="q7b3-railitem">
            <Dices size={16} />
            Настольные
          </a>
          <a href={REF_LINK} className="q7b3-railitem">
            <Palette size={16} />
            Темы
          </a>
          <a href={REF_LINK} className="q7b3-railitem">
            <Boxes size={16} />
            Провайдеры
          </a>
        </div>
      </nav>
      <a href="#!" className="q7b3-scrim" aria-hidden="true" tabIndex={-1}></a>
    </>
  )
}
