'use client'

import { GiftReferee } from '@/assets/gift-referee'
import { cn } from '@/lib/utils'
import { CheckIcon, SendHorizontal } from 'lucide-react'
import { FormEvent, useState, ChangeEvent } from 'react'

export default function Referral() {
  const [referIsComplete, setReferIsComplete] = useState<boolean>(false)
  const [content, setContent] = useState('')

  function handleForm(event: FormEvent) {
    event.preventDefault()

    if (content !== '') {
      setReferIsComplete(true)
    }

    return false
  }

  function handleInputContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value)

    if (event.target.value === '') {
      setReferIsComplete(false)
    }
  }

  return (
    <main className="container mx-auto my-20 px-2">
      <div className="flex flex-col items-center justify-center">
        <GiftReferee className="size-52" />
        <h2 className="text-2xl font-medium text-blue-600">Referral Program</h2>
        <p className="mt-2 text-sm font-medium">
          Join our exciting referral program and start earning cash rewards
          today! Here&apos;s how it works:
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <span className="font-semibold">👫 Refer Friends:</span> Share your
            unique referral link with friends, family, and colleagues.
          </li>
          <li>
            <span className="font-semibold">💰 Earn Rewards:</span> For every
            friend who signs up using your referral link and completes a
            qualifying action, both you and your friend will earn cash rewards.
          </li>
        </ul>
        <form className="mt-10">
          <div
            className={cn(
              `flex items-center rounded-lg bg-blue-200 p-2 ring-2 ring-blue-600 ${referIsComplete && 'bg-green-200 ring-green-600'}`,
            )}
          >
            <input
              type="text"
              className={cn(
                `bg-blue-200 text-center text-slate-700 outline-none ${referIsComplete && 'bg-green-200'}`,
              )}
              placeholder="Your friends e-mail here."
              onChange={handleInputContent}
              value={content}
            />
            <button type="button" onClick={(e) => handleForm(e)}>
              {referIsComplete ? (
                <CheckIcon className="stroke-green-800" />
              ) : (
                <SendHorizontal className="stroke-blue-800" />
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
