import { Gift, LogIn, Menu, Search } from 'lucide-react'
import { REF_LINK } from '@/lib/ref-link'

export function SiteTopbar() {
  return (
    <header className="q7b3-topbar">
      <a href="#q7b3-menu" className="q7b3-burger" aria-label="Открыть меню">
        <Menu size={20} />
      </a>
      <a href={REF_LINK} className="q7b3-logo">
        Beef
      </a>
      <a href={REF_LINK} className="q7b3-giftbtn" aria-label="Бонусы">
        <Gift size={18} />
      </a>
      <div className="q7b3-search" role="search">
        <input type="search" placeholder="ПОИСК" aria-label="Поиск игр" />
        <a href={REF_LINK} className="q7b3-searchgo" aria-label="Найти">
          <Search size={18} />
        </a>
      </div>
      <a href={REF_LINK} className="q7b3-login" aria-label="Войти">
        <LogIn size={18} />
      </a>
      <a href={REF_LINK} className="q7b3-reg">
        Регистрация
      </a>
    </header>
  )
}
