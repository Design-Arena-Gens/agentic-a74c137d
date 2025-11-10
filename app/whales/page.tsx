import { headers } from 'next/headers'
import { WhaleCard, type Whale } from '@/components/WhaleCard'

async function fetchWhales(): Promise<Whale[]> {
  const hdrs = headers()
  const host = hdrs.get('host')
  const protocol = host?.includes('localhost') ? 'http' : 'https'
  const base = process.env.NEXT_PUBLIC_BASE_URL || (host ? `${protocol}://${host}` : '')
  const res = await fetch(`${base}/api/whales`, { cache: 'no-store' })
  const json = await res.json()
  return json.whales as Whale[]
}

export default async function WhalesPage() {
  const whales = await fetchWhales()
  return (
    <main>
      <h2 className="text-xl font-medium mb-4">Top whales</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {whales.map((w) => (
          <WhaleCard whale={w} key={w.id} />
        ))}
      </div>
    </main>
  )
}
