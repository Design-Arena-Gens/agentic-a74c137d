import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polymarket Whales',
  description: 'Follow top Polymarket whales and see their latest bets',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Polymarket Whales</h1>
            <nav className="space-x-4 text-sm">
              <a className="hover:underline" href="/">Home</a>
              <a className="hover:underline" href="/whales">Whales</a>
              <a className="hover:underline" href="/following">Following</a>
            </nav>
          </header>
          {children}
          <footer className="mt-16 text-xs text-gray-500">
            <p>Not affiliated with Polymarket. Data aggregated from public endpoints.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
