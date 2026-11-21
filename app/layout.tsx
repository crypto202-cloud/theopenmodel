import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BK NEXUS',
  description: 'Football Predictions & Live Scores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bk-bg text-white min-h-screen pb-20`}>
        
        {/* TOP HEADER */}
        <header className="pt-6 px-4 pb-4">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-yellow-400 text-3xl">⚡</span>
            <h1 className="text-bk-neon text-3xl font-extrabold tracking-wider">BK NEXUS</h1>
          </div>

          {/* Top Tabs (Live, Fixtures, News) */}
          <div className="flex justify-between items-center bg-[#1a1c3b] rounded-lg p-1 text-sm font-semibold">
            <button className="flex-1 py-2 text-bk-neon border-b-2 border-bk-neon">LIVE</button>
            <button className="flex-1 py-2 text-bk-text-muted">FIXTURES</button>
            <button className="flex-1 py-2 text-bk-text-muted">NEWS</button>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="px-4">
          {children}
        </main>

        {/* BOTTOM NAVIGATION BAR */}
        <nav className="fixed bottom-0 w-full bg-[#0a0b1c] border-t border-gray-800 flex justify-around items-center py-3 text-xs font-semibold text-bk-text-muted">
          <button className="text-bk-neon flex flex-col items-center gap-1">
             <span className="w-2 h-2 rounded-full bg-bk-neon mb-1"></span>
             Live
          </button>
          <button className="flex flex-col items-center gap-1">Fixtures</button>
          <button className="flex flex-col items-center gap-1">Predictions</button>
          <button className="flex flex-col items-center gap-1">News</button>
          <button className="flex flex-col items-center gap-1">Stats</button>
          <button className="flex flex-col items-center gap-1">Profile</button>
        </nav>

      </body>
    </html>
  )
          }
