import { NextResponse } from 'next/server'
import seed from '@/data/seedWhales.json'
import { fetchMarkets } from '@/lib/polymarket'

// A lightweight heuristic: map whales to currently-active markets by tag keywords
function matchMarketsToThemes(markets: Awaited<ReturnType<typeof fetchMarkets>>, themes: string[]) {
  const themeSet = new Set(themes.map((t) => t.toLowerCase()))
  return markets.filter((m) => {
    const tags = (m.tags ?? []).map((t) => t.toLowerCase())
    if (tags.some((t) => themeSet.has(t))) return true
    const q = m.question.toLowerCase()
    return Array.from(themeSet).some((t) => q.includes(t))
  })
}

export async function GET() {
  try {
    const markets = await fetchMarkets(100)
    const whales = (seed as any[]).map((w) => ({
      ...w,
      suggestedMarkets: matchMarketsToThemes(markets, w.themes).slice(0, 12),
    }))
    return NextResponse.json({ whales })
  } catch (e) {
    // Fallback to static whales without market suggestions
    const whales = (seed as any[]).map((w) => ({ ...w, suggestedMarkets: [] }))
    return NextResponse.json({ whales, stale: true })
  }
}
