import '@fontsource-variable/manrope'
import '@fontsource-variable/caveat'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="2694166a1c6839ca" />
        <title>Beef Casino официальный сайт — играть онлайн, зеркало Биф Казино, бонус 250%+600FS</title>
        <meta
          name="description"
          content="Beef Casino официальный сайт: играть в Beef Casino онлайн, рабочее зеркало Биф Казино, слоты и live-казино, бонус 250% + 600 FS. Регистрация в Beef Casino официальный открыта — забирайте приветственный пакет."
        />
        <link rel="canonical" href="https://beef4casino.vercel.app/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Beef Casino" />
        <meta property="og:url" content="https://beef4casino.vercel.app/" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:title"
          content="Beef Casino официальный сайт — играть онлайн, зеркало Биф Казино, бонус 250%+600FS"
        />
        <meta
          property="og:description"
          content="Beef Casino официальный сайт: играть в Beef Casino онлайн, рабочее зеркало Биф Казино, слоты и live-казино, бонус 250% + 600 FS. Регистрация в Beef Casino официальный открыта — забирайте приветственный пакет."
        />
        <meta property="og:image" content="https://beef4casino.vercel.app/images/banner-queen.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Beef Casino официальный сайт — играть онлайн, зеркало Биф Казино, бонус 250%+600FS"
        />
        <meta
          name="twitter:description"
          content="Beef Casino официальный сайт: играть в Beef Casino онлайн, рабочее зеркало Биф Казино, слоты и live-казино, бонус 250% + 600 FS."
        />
        <meta name="twitter:image" content="https://beef4casino.vercel.app/images/banner-queen.jpg" />
        <meta name="theme-color" content="#0b0d12" />
      </head>
      <body className="q7b3-body">{children}</body>
    </html>
  )
}
