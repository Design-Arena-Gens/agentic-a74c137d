"use client"
import { useEffect, useState } from 'react'

type Props = { whaleId: string }

const STORAGE_KEY = 'following_whales'

export function FollowButton({ whaleId }: Props) {
  const [following, setFollowing] = useState(false)

  useEffect(() => {
    const val = localStorage.getItem(STORAGE_KEY)
    const list = val ? (JSON.parse(val) as string[]) : []
    setFollowing(list.includes(whaleId))
  }, [whaleId])

  function toggle() {
    const val = localStorage.getItem(STORAGE_KEY)
    const list = val ? (JSON.parse(val) as string[]) : []
    const next = list.includes(whaleId) ? list.filter((id) => id !== whaleId) : [...list, whaleId]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setFollowing(next.includes(whaleId))
  }

  return (
    <button onClick={toggle} className={`px-3 py-1.5 rounded text-sm border ${following ? 'bg-blue-600 text-white border-blue-600' : ''}`}>
      {following ? 'Following' : 'Follow'}
    </button>
  )
}
