"use client"
import { useEffect, useState } from 'react'
import type { Whale } from '@/components/WhaleCard'
import { WhaleCard } from '@/components/WhaleCard'

const STORAGE_KEY = 'following_whales'

export default function FollowingPage() {
  const [followingIds, setFollowingIds] = useState<string[]>([])
  const [whales, setWhales] = useState<Whale[]>([])

  useEffect(() => {
    const val = localStorage.getItem(STORAGE_KEY)
    const list = val ? (JSON.parse(val) as string[]) : []
    setFollowingIds(list)
    fetch('/api/whales')
      .then((r) => r.json())
      .then((j) => setWhales((j.whales as Whale[]).filter((w) => list.includes(w.id))))
  }, [])

  return (
    <main>
      <h2 className="text-xl font-medium mb-4">Your following</h2>
      {followingIds.length === 0 ? (
        <p className="text-gray-600 text-sm">You are not following any whales yet. Browse the whales page to follow.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {whales.map((w) => (
            <WhaleCard whale={w} key={w.id} />
          ))}
        </div>
      )}
    </main>
  )}
