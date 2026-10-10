import { CasinoHero } from '@/components/casino-hero'
import { SeoArticle } from '@/components/seo-article'
import { SiteFooter } from '@/components/site-footer'
import { SiteRail } from '@/components/site-rail'
import { SiteTopbar } from '@/components/site-topbar'

export default function Page() {
  return (
    <div className="q7b3-page">
      <SiteTopbar />
      <div className="q7b3-shell">
        <SiteRail />
        <main className="q7b3-main">
          <CasinoHero />
          <SeoArticle />
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}
