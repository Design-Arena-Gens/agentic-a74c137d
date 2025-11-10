import Link from 'next/link'

export default async function HomePage() {
  return (
    <main>
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2">Track Polymarket Whales</h2>
        <p className="text-gray-600 mb-4 max-w-2xl">
          Discover and follow top bettors (?whales?) on Polymarket. See what they?re betting on and
          get a curated feed of their latest markets.
        </p>
        <div className="flex gap-3">
          <Link href="/whales" className="px-4 py-2 rounded bg-blue-600 text-white text-sm">Browse Whales</Link>
          <Link href="/following" className="px-4 py-2 rounded border text-sm">Your Following</Link>
        </div>
      </section>

      <section>
        <h3 className="font-medium mb-3">What you get</h3>
        <ul className="grid md:grid-cols-3 gap-4 text-sm">
          <li className="border rounded p-4">
            <p className="font-semibold mb-1">Leaderboard</p>
            <p className="text-gray-600">A curated list of high-volume and consistent bettors.</p>
          </li>
          <li className="border rounded p-4">
            <p className="font-semibold mb-1">Live markets</p>
            <p className="text-gray-600">See markets related to whales? themes and activity.</p>
          </li>
          <li className="border rounded p-4">
            <p className="font-semibold mb-1">Follow feed</p>
            <p className="text-gray-600">Personalized feed of the whales you follow.</p>
          </li>
        </ul>
      </section>
    </main>
  )
}
