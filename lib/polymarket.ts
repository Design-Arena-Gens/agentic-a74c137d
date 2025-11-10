export type Market = {
  market_slug: string
  question: string
  image?: string
  end_date_iso?: string
  tags?: string[]
  tokens?: { outcome: string; price: number }[]
}

export async function fetchMarkets(limit = 50): Promise<Market[]> {
  const url = `https://clob.polymarket.com/markets?limit=${limit}`
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) throw new Error(`Failed to fetch markets: ${res.status}`)
  const json = (await res.json()) as { data?: any[] }
  const items = json.data ?? []
  return items.map((m) => ({
    market_slug: m.market_slug,
    question: m.question,
    image: m.image,
    end_date_iso: m.end_date_iso,
    tags: m.tags,
    tokens: m.tokens,
  }))
}
