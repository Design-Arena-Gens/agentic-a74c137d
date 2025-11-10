import Image from 'next/image'
import Link from 'next/link'
import { FollowButton } from './FollowButton'

export type Whale = {
  id: string
  displayName: string
  bio: string
  avatar?: string
  themes: string[]
  suggestedMarkets?: {
    market_slug: string
    question: string
    image?: string
  }[]
}

export function WhaleCard({ whale }: { whale: Whale }) {
  return (
    <div className="rounded border p-4 grid gap-3">
      <div className="flex items-center gap-3">
        {whale.avatar ? (
          <Image src={whale.avatar} alt={whale.displayName} width={36} height={36} className="rounded" />
        ) : (
          <div className="w-9 h-9 rounded bg-gray-200" />
        )}
        <div className="flex-1">
          <p className="font-medium leading-tight">{whale.displayName}</p>
          <p className="text-xs text-gray-600">{whale.bio}</p>
        </div>
        <FollowButton whaleId={whale.id} />
      </div>
      {whale.themes?.length ? (
        <div className="text-xs text-gray-700">
          <span className="mr-1">Themes:</span>
          {whale.themes.map((t) => (
            <span key={t} className="inline-block mr-1 mb-1 px-2 py-0.5 rounded bg-gray-100 border">
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {whale.suggestedMarkets && whale.suggestedMarkets.length > 0 ? (
        <div>
          <p className="text-sm font-medium mb-2">Suggested markets</p>
          <div className="grid md:grid-cols-2 gap-3">
            {whale.suggestedMarkets.slice(0, 6).map((m) => (
              <Link href={`https://polymarket.com/event/${m.market_slug}`} key={m.market_slug} target="_blank" className="group border rounded p-3 hover:bg-gray-50">
                <p className="text-sm group-hover:underline">{m.question}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-xs text-gray-500">No live suggestions right now.</p>
      )}
    </div>
  )
}
